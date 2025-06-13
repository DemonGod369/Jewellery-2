import useRegisterNewUser from "../../api_services/mutation/useRegisterNewUser";
import useGetRegisterUserList from "../../api_services/query/useGetRegisterUserList";

export default function useUser() {
  const { registeredUserList, isFetchingRegisteredUserList } =
    useGetRegisterUserList();
  const { registerNewUser, isNewUserBeingRegistered } = useRegisterNewUser();

  const handleRegisterNewUser = async () => {
    await registerNewUser();
  };

  return {
    handleRegisterNewUser,
    registeredUserList,
    isFetchingRegisteredUserList,
    isNewUserBeingRegistered,
  };
}
