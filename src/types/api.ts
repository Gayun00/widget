interface ResponseHeader {
  idx: number;
  key: string;
  label: string;
  description: string;
  property_type: string;
  value_type: string;
}

export interface Response {
  data: {
    headers: ResponseHeader[];
    rows: string[][];
  };
  result: boolean;
  message: string;
  version: string;
  last_compile_time: string;
}

export interface TopReferralTableDataResponse {
  data: {
    headers: ResponseHeader[];
    rows: TopReferralTableData[];
  };
  result: boolean;
  message: string;
  version: string;
  last_compile_time: string;
}

export interface TopReferralTableData {
  country: string;
  region: string;
  city: string;
  uniqueEventCount: number;
}
