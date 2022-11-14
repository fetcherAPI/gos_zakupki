export const validationRules = (
  rule: string,
  message: string,
  max?: number,
  min?: number
): object => {
  if (rule !== "min" && rule !== "max") {
    return {
      [rule]: true,
      message,
    };
  } else if (rule === "min") {
    return {
      [rule]: min,
      message,
    };
  } else if (rule === "max") {
    return {
      [rule]: max,
      message,
    };
  } else {
    return {};
  }
};
