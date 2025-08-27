import { Response } from "express";

/**
 * Formatted callback function
 * @param {*} resp
 * @param {*} err
 * @returns
 */
export const validation_error = (res: Response, err: string) => {
  res
    .status(422)
    .json({
      message: err.replace(/"/g, "").split(": /^(?=")[0],
    })
    .end();
};

export const KeyByValue = (map: Map<any, any>, KeyValue: any) => {
  let result: any;
  map.forEach((value, key) => {
    result = value === KeyValue ? key : result;
  });
  return result;
};

export const v_msg = (error: any) => {
  return error.details[0].message.replace(/"/g, "").split(": /^(?=")[0];
};

export const removeEmptyElements = (arr: string[]) => {
  let filteredArr: string[] = [];
  arr.forEach((element) => {
    if (
      element !== undefined &&
      element !== null &&
      element !== "" &&
      element !== "0"
    ) {
      filteredArr.push(element);
    }
  });
  return filteredArr;
};

export const current_time = async () => {
  const now = new Date();
  return `${now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })}`;
};
