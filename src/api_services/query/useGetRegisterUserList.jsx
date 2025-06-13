import useAxiosInstance from "../../services/useAxiosInstance";

export const USE_GET_REGISTERED_USER_LIST = "use-get-registered-list";
export default function useGetRegisterUserList() {
  const { axiosInstance } = useAxiosInstance();
  const { data, isLoading, isError } = useQuery({
    queryKey: [USE_GET_REGISTERED_USER_LIST],
    queryFn: () => {
      return axiosInstance.get(`route`);
    },
  });
  return {
    registeredUserList: data?.data,
    isFetchingRegisteredUserList: isLoading,
    isErrorFetchingRegisteredUserList: isError,
  };
}
