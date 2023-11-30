import { Response } from "../types/api";
import { request } from "../utils/xhrRequest";

export const getUsers = () => {
  return request.get<null, Response>({
    path: "/event_1.json",
  });
};

export const getTopReferral = () => {
  return request.get<null, Response>({
    path: "/event_3.json",
  });
};
