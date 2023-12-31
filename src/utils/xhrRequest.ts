import { RequestParams } from "@/types/xhrRequest";
import {  URL } from "@/constants";

const xhrRequest = <TParams, TResponse>({
  path,
  method,
  queryParams,
  params,
}: RequestParams<TParams>) => {
  return new Promise<TResponse>((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    const convertedParams = queryParams
      ? Object.entries(queryParams).reduce(
          (newObj: Record<string, string>, [key, value]) => {
            if (typeof value === "string") {
              newObj[key] = value;
            } else if (typeof value === "number") {
              newObj[key] = value.toString();
            }
            return newObj;
          },
          {}
        )
      : "";

    const searchParams = new URLSearchParams(convertedParams).toString();

    xhr.open(
      method || "get",
      `${URL.API}${path}${
        searchParams ? `?${searchParams}` : ""
      }`,
      true
    );



    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(JSON.parse(xhr.responseText) as TResponse);
      } else {
        reject(new Error(xhr.status.toString()));
      }
    };

    xhr.onerror = function () {
      reject(new Error(xhr.status.toString()));
    };

    xhr.send(JSON.stringify(params));
  });
};

const handleRequest = (option?: { isMock: true }) => {
  return {
    get<TParams, TResponse>(
      params: RequestParams<TParams>
    ): Promise<TResponse> {
      return xhrRequest<TParams, TResponse>({
        ...params,
        method: "get",
        ...option,
      });
    },

    post<TParams, TResponse>(
      params: RequestParams<TParams>
    ): Promise<TResponse> {
      return xhrRequest<TParams, TResponse>({
        ...params,
        method: "post",
        ...option,
      });
    },

    put<TParams, TResponse>(
      params: RequestParams<TParams>
    ): Promise<TResponse> {
      return xhrRequest<TParams, TResponse>({
        ...params,
        method: "put",
        ...option,
      });
    },

    delete<TParams, TResponse>(
      params: RequestParams<TParams>
    ): Promise<TResponse> {
      return xhrRequest<TParams, TResponse>({
        ...params,
        method: "delete",
        ...option,
      });
    },
  };
};

export const request = handleRequest();
export const mockedRequest = handleRequest({ isMock: true });
