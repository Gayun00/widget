import { GetUsersResponse } from "../types/api";
import { request } from "../utils/xhrRequest";

export const getUsers = () => {
  return request.get<null, GetUsersResponse>({
    path: "/event_1.json",
  });
};
