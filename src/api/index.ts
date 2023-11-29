import { request } from "../utils/xhrRequest";

export const getUsers = () => {
  return request.get({ path: "/ex", isMock: true });
};
