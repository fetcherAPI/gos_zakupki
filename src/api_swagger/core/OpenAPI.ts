/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiRequestOptions } from './ApiRequestOptions';

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type OpenAPIConfig = {
    BASE: string;
    HEADERS?: Headers | Resolver<Headers>;
};

export const OpenAPI: OpenAPIConfig = {
    BASE: 'http://localhost:8084',
    HEADERS: undefined,
};
