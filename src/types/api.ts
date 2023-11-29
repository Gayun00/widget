interface GetUsersResponseHeader {
  idx: number;
  key: string;
  label: string;
  description: string;
  property_type: string;
  value_type: string;
}

export interface GetUsersResponse {
  data: {
    headers: GetUsersResponseHeader[];
    rows: string[][];
  };
  result: boolean;
  message: string;
  version: string;
  last_compile_time: string;
}
