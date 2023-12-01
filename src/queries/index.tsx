import { useQuery } from "@tanstack/react-query";
import { getTopReferral, getUsers, getTopReferralArea } from "../api";

export const useUsersQuery = () => {
  return useQuery({ queryKey: ["userEvents"], queryFn: getUsers });
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
