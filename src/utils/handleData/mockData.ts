import { GetUsersResponse } from "../../types/api";

export const user_events: GetUsersResponse = {
  data: {
    headers: [
      {
        idx: 0,
        key: "daily",
        label: "Daily",
        description: "1일 단위 리포트",
        property_type: "segment",
        value_type: "text",
      },
      {
        idx: 1,
        key: "unique_view",
        label: "Unique Event Count",
        description:
          "- 선택된 이벤트를 발생시킨 고유 디바이스 수(유니크 수) 입니다.\n- 분석할 이벤트는 Conditions 탭의 Analytics Conditions에서 'Event name'을 이용하여 선택합니다.\n- 예시) 하나의 디바이스에서 3번의 장바구기 담기가 발생했다면, abx:add to cart 이벤트의 Unique Event Count는 '1' 입니다.",
        property_type: "metric",
        value_type: "long",
      },
      {
        idx: 2,
        key: "page_view",
        label: "Total Event Count",
        description:
          "- 분석 대상으로 선택된 이벤트가 실행된 전체 횟수를 의미합니다.\n- 분석할 이벤트는 Conditions 탭의 Analytics Conditions에서 'Event name'을 이용하여 선택합니다.\n- 예시) 하나의 디바이스에서 3번의 장바구니 담기가 발생했다면, abx:add to cart 이벤트의 Total Event Count는 '3' 입니다.",
        property_type: "metric",
        value_type: "long",
      },
    ],
    rows: [
      ["2022-05-29", "142", "894"],
      ["2022-04-02", "249", "1851"],
      ["2022-03-23", "1", "10"],
      ["2022-03-23", "2", "10"],
      ["2022-03-08", "561", "12203"],
      ["2022-05-18", "560", "11821"],
      ["2022-03-25", "490", "8804"],
      ["2022-05-25", "551", "10965"],
      ["2022-05-24", "575", "13916"],
      ["2022-03-19", "246", "2146"],
      ["2022-03-11", "499", "10663"],
    ],
  },
  result: true,
  message: "ok",
  version: "1.18.11.32254",
  last_compile_time: "2022-05-26T08:55:12+00:00",
};
