export const users = {
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
      ["2022-04-19", "578", "11699"],
      ["2022-05-19", "534", "11599"],
      ["2022-04-22", "541", "11039"],
      ["2022-04-25", "595", "12364"],
      ["2022-05-14", "246", "1870"],
      ["2022-04-09", "235", "1744"],
      ["2022-04-17", "245", "1989"],
      ["2022-05-04", "578", "13258"],
      ["2022-03-24", "533", "10417"],
      ["2022-05-21", "231", "1994"],
      ["2022-04-21", "552", "11408"],
      ["2022-04-10", "230", "1993"],
      ["2022-03-31", "534", "10792"],
      ["2022-05-01", "250", "1809"],
      ["2022-03-20", "240", "2182"],
      ["2022-04-05", "517", "11363"],
      ["2022-04-16", "246", "1788"],
      ["2022-04-02", "249", "1851"],
      ["2022-03-23", "528", "11588"],
      ["2022-03-08", "561", "12203"],
      ["2022-05-18", "560", "11821"],
      ["2022-03-25", "490", "8804"],
      ["2022-05-25", "551", "10965"],
      ["2022-04-08", "485", "9365"],
      ["2022-04-13", "522", "10646"],
      ["2022-05-02", "589", "12924"],
      ["2022-04-26", "570", "10442"],
      ["2022-05-05", "258", "1859"],
      ["2022-03-21", "567", "12058"],
      ["2022-05-11", "584", "12076"],
      ["2022-03-10", "527", "10928"],
      ["2022-05-09", "583", "15402"],
      ["2022-04-12", "548", "11575"],
      ["2022-05-23", "531", "11680"],
      ["2022-03-06", "244", "2082"],
      ["2022-05-03", "563", "11402"],
      ["2022-04-18", "585", "13071"],
      ["2022-03-14", "547", "13469"],
      ["2022-03-26", "248", "2163"],
      ["2022-05-10", "604", "12986"],
      ["2022-03-27", "237", "1874"],
      ["2022-03-18", "534", "11365"],
      ["2022-05-13", "522", "13156"],
      ["2022-03-28", "540", "10851"],
      ["2022-05-22", "233", "2031"],
      ["2022-05-15", "250", "2139"],
      ["2022-04-27", "602", "14796"],
      ["2022-04-14", "534", "10871"],
      ["2022-04-29", "562", "12113"],
      ["2022-04-28", "601", "13822"],
      ["2022-04-20", "583", "12633"],
      ["2022-04-06", "558", "12842"],
      ["2022-03-22", "579", "11855"],
      ["2022-04-03", "246", "1819"],
      ["2022-03-09", "263", "2614"],
      ["2022-03-17", "553", "11678"],
      ["2022-03-16", "545", "11046"],
      ["2022-03-30", "536", "11306"],
      ["2022-04-23", "247", "2173"],
      ["2022-05-06", "467", "11305"],
      ["2022-05-17", "570", "12934"],
      ["2022-05-20", "521", "10562"],
      ["2022-04-15", "497", "9611"],
      ["2022-03-04", "582", "12600"],
      ["2022-04-01", "543", "11160"],
      ["2022-03-12", "237", "1961"],
      ["2022-04-11", "515", "11024"],
      ["2022-04-24", "222", "1942"],
      ["2022-03-02", "610", "12307"],
      ["2022-05-16", "603", "15499"],
      ["2022-03-07", "578", "12869"],
      ["2022-05-12", "561", "13285"],
      ["2022-04-07", "516", "12444"],
      ["2022-05-27", "540", "10165"],
      ["2022-03-03", "610", "12483"],
      ["2022-03-13", "224", "1970"],
      ["2022-03-15", "548", "12277"],
      ["2022-05-26", "567", "12611"],
      ["2022-03-05", "240", "1939"],
      ["2022-05-07", "241", "2128"],
      ["2022-05-08", "229", "1737"],
      ["2022-03-29", "529", "11732"],
      ["2022-04-04", "570", "12149"],
      ["2022-03-01", "311", "2919"],
      ["2022-04-30", "255", "1748"],
      ["2022-05-28", "235", "1943"],
      ["2022-02-28", "546", "11991"],
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
