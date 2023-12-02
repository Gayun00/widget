import { request } from "@/utils/xhrRequest";
import { Response } from "@/types/api";

export const getUserEvents = () => {
  return request
    .get<null, Response>({
      path: "/event_1.json",
    })
    .then((data) => data.data.rows);
};

export const getTopReferral = () => {
  return request
    .get<null, Response>({
      path: "/event_3.json",
    })
    .then((data) => data.data.rows);
};

export const getTopReferralArea = () => {
  return request
    .get<null, Response>({
      path: "/event_4.json",
    })
    .then((data) => data.data.rows);
};
