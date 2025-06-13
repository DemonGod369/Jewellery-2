import useAxiosInstance from "../../services/useAxiosInstance";
import { useMutation } from "react-query";

export default function useRegisterNewUser() {
  const { axiosInstance } = useAxiosInstance();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (payload) => {
      return axiosInstance.post(`route`, payload);
    },
    onSuccess: () => {
      console.log("show toast message");
    },
    onError: (err) => console.log("show error message", err),
  });

  return {
    registerNewUser: mutateAsync,
    isNewUserBeingRegistered: isPending,
  };
}
