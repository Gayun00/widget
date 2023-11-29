import { request } from "../utils/xhrRequest";

export const getUsers = () => {
  return request.get({
    path: "/event_1.json",
  });
};
