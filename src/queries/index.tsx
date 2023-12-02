import { useQuery } from "@tanstack/react-query";
import { getTopReferral, getUserEvents, getTopReferralArea } from "@/api";

export const useUserEventsQuery = () => {
  return useQuery({
    queryKey: ["userEvents"],
    queryFn: getUserEvents,
  });
};

export const useTopReferralQuery = () => {
  return useQuery({ queryKey: ["topReferral"], queryFn: getTopReferral });
};

export const useTopReferralAreaQuery = () => {
  return useQuery({
    queryKey: ["topReferralArea"],
    queryFn: getTopReferralArea,
  });
};
