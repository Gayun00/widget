import { useUsersQuery } from "@/queries";
import View from "./View";
import { generateDateArray, generateSumInDateRange } from "@/utils/handleData";
import { useMemo } from "react";

interface Props {
  startDate: string;
  endDate: string;
}

function DAU({ startDate, endDate }: Props) {
  // TODO: 상위 컴포넌트에서 호출하도록 변경
  const { data: userEvents, isLoading } = useUsersQuery();
  const uniqueEventCounts = useMemo(
    () =>
      generateSumInDateRange(
        userEvents?.data?.rows || [],
        startDate,
        endDate,
        1
      ),
    [userEvents, startDate, endDate]
  );

  const totalEventCounts = useMemo(
    () =>
      generateSumInDateRange(
        userEvents?.data?.rows || [],
        startDate,
        endDate,
        2
      ),
    [userEvents, startDate, endDate]
  );

  const dates = generateDateArray(startDate, endDate);
  return (
    <>
      {isLoading ? (
        // TODO: loading indicator 추가
        <p>is loading</p>
      ) : (
        <View
          dates={dates}
          column={{
            name: "Total event count",
            data: totalEventCounts,
          }}
          line={{
            name: "Unique event count",
            data: uniqueEventCounts,
          }}
        />
      )}
    </>
  );
}

export default DAU;
