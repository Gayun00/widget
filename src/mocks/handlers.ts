import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/ex", () => {
    return HttpResponse.json(["hurrray"]);
  }),
];
