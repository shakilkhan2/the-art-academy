import { useContext } from "react";
import { AuthContext } from "../../providers/authProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: isUser = {} } = useQuery({
    queryKey: ["isUser", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res.data;
    },
  });
  // console.log(isUser);
  const checkUser = isUser.role;
  return [checkUser];
};

export default useUser;
