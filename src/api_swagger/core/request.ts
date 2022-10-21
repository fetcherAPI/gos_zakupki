/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import { ApiError } from "./ApiError";
import type { ApiRequestOptions } from "./ApiRequestOptions";
import type { ApiResult } from "./ApiResult";
import { CancelablePromise } from "./CancelablePromise";
import type { OnCancel } from "./CancelablePromise";
import type { OpenAPIConfig } from "./OpenAPI";

const isDefined = <T>(
  value: T | null | undefined
): value is Exclude<T, null | undefined> => {
  return value !== undefined && value !== null;
};

const isString = (value: any): value is string => {
  return typeof value === "string";
};

const isStringWithValue = (value: any): value is string => {
  return isString(value) && value !== "";
};

const isBlob = (value: any): value is Blob => {
  return (
    typeof value === "object" &&
    typeof value.type === "string" &&
    typeof value.stream === "function" &&
    typeof value.arrayBuffer === "function" &&
    typeof value.constructor === "function" &&
    typeof value.constructor.name === "string" &&
    /^(Blob|File)$/.test(value.constructor.name) &&
    /^(Blob|File)$/.test(value[Symbol.toStringTag])
  );
};

const isFormData = (value: any): value is FormData => {
  return value instanceof FormData;
};

const isSuccess = (status: number): boolean => {
  return status >= 200 && status < 300;
};

const getQueryString = (params: Record<string, any>): string => {
  const qs: string[] = [];

  const append = (key: string, value: any) => {
    qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
  };

  const process = (key: string, value: any) => {
    if (isDefined(value)) {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          process(key, v);
        });
      } else if (typeof value === "object") {
        Object.entries(value).forEach(([k, v]) => {
          process(`${key}[${k}]`, v);
        });
      } else {
        append(key, value);
      }
    }
  };

  Object.entries(params).forEach(([key, value]) => {
    process(key, value);
  });

  if (qs.length > 0) {
    return `?${qs.join("&")}`;
  }

  return "";
};

const getUrl = (config: OpenAPIConfig, options: ApiRequestOptions): string => {
  const encoder = encodeURI;

  const path = options.url.replace(
    /{(.*?)}/g,
    (substring: string, group: string) => {
      if (options.path?.hasOwnProperty(group)) {
        return encoder(String(options.path[group]));
      }
      return substring;
    }
  );

  const url = `${config.BASE}${path}`;
  if (options.query) {
    return `${url}${getQueryString(options.query)}`;
  }
  return url;
};

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;

const resolve = async <T>(
  options: ApiRequestOptions,
  resolver?: T | Resolver<T>
): Promise<T | undefined> => {
  if (typeof resolver === "function") {
    return (resolver as Resolver<T>)(options);
  }
  return resolver;
};

const getRequestBody = (options: ApiRequestOptions): any => {
  if (options.body) {
    return options.body;
  }
  return undefined;
};

const sendRequest = async <T>(
  config: OpenAPIConfig,
  options: ApiRequestOptions,
  url: string,
  body: any,
  onCancel: OnCancel,
  formData?: FormData | undefined,
  headers?: Record<string, string>
): Promise<AxiosResponse<T>> => {
  const source = axios.CancelToken.source();

  const requestConfig: AxiosRequestConfig = {
    url,
    headers,
    data: body ?? formData,
    method: options.method,
    cancelToken: source.token,
  };

  onCancel(() => source.cancel("The user aborted a request."));

  try {
    return await axios.request(requestConfig);
  } catch (error) {
    const axiosError = error as AxiosError<T>;
    if (axiosError.response) {
      return axiosError.response;
    }
    throw error;
  }
};

const getResponseHeader = (
  response: AxiosResponse<any>,
  responseHeader?: string
): string | undefined => {
  if (responseHeader) {
    const content = response.headers[responseHeader];
    if (isString(content)) {
      return content;
    }
  }
  return undefined;
};

const getResponseBody = (response: AxiosResponse<any>): any => {
  if (response.status !== 204) {
    return response.data;
  }
  return undefined;
};

const catchErrorCodes = (
  options: ApiRequestOptions,
  result: ApiResult
): void => {
  const errors: Record<number, string> = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable",
    ...options.errors,
  };

  const error = errors[result.status];
  if (error) {
    throw new ApiError(options, result, error);
  }

  if (!result.ok) {
    throw new ApiError(options, result, "Generic Error");
  }
};

/**
 * Request method
 * @param config The OpenAPI configuration object
 * @param options The request options from the service
 * @returns CancelablePromise<T>
 * @throws ApiError
 */
export const request = <T>(
  config: OpenAPIConfig,
  options: ApiRequestOptions
): CancelablePromise<T> => {
  return new CancelablePromise(async (resolve, reject, onCancel) => {
    try {
      const url = getUrl(config, options);

      const body = getRequestBody(options);

      if (!onCancel.isCancelled) {
        const response = await sendRequest<T>(
          config,
          options,
          url,
          body,
          onCancel
        );
        const responseBody = getResponseBody(response);
        const responseHeader = getResponseHeader(
          response,
          options.responseHeader
        );

        const result: ApiResult = {
          url,
          ok: isSuccess(response.status),
          status: response.status,
          statusText: response.statusText,
          body: responseHeader ?? responseBody,
        };

        catchErrorCodes(options, result);

        resolve(result.body);
      }
    } catch (error) {
      reject(error);
    }
  });
};
