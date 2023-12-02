import { useMemo } from "react";
import StatsOverViewWidget from "../StatsOverViewWidget";
import { useUsersQuery } from "@/queries";
import { getUniqueEventSumByDate } from "@/utils/handleData";
// import dayjs from "dayjs";

function UniqueEventCountSum() {
  const { data: userEvents } = useUsersQuery();

  // TODO: 날짜 선택 기능 추가 후 교체. 현재는 데이터 처리 가능한 날짜로 임시 지정
  // const date = dayjs().format("YYYY-MM-DD");
  const date = "2022-03-23";
  const data: number | undefined = useMemo(() => {
    if (!userEvents) return;
    return getUniqueEventSumByDate(userEvents.data.rows, date);
  }, [userEvents, date]);

  return (
    <>
      {data && (
        <StatsOverViewWidget
          title="접속유저"
          type="SUM"
          property="Unique Event Count"
          data={data}
          changeRate={93}
        />
      )}
    </>
  );
}

export default UniqueEventCountSum;