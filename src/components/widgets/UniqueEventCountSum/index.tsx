import { useMemo } from "react";
import { getUniqueEventSumByDate } from "@/utils/handleData";
import StatsOverViewWidget from "@/components/widgets/StatsOverViewWidget";
import { useUserEventsQuery } from "@/queries";

interface Props {
  date: string;
}

function UniqueEventCountSum({ date }: Props) {
  const { data: userEvents } = useUserEventsQuery();

  const data: number | undefined = useMemo(() => {
    if (!userEvents) return;
    return getUniqueEventSumByDate(userEvents, date);
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
