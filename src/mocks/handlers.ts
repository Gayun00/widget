import { http, HttpResponse } from "msw";
import { users } from "./data/users";

export const handlers = [
  http.get("/ex", () => {
    return HttpResponse.json(users);
  }),
];
