import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../providers/authProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
  const { user, loading } = useContext(AuthContext);
  // const token = localStorage.getItem('access-token');

  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: cart = [0] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    //     queryFn: async () => {
    //       const response = await fetch(
    //         `http://localhost:5000/carts?email=${user?.email}`, {headers: {
    //           authorization: `bearer ${token}`
    //         }}
    //       );
    // return response.json();
    //       // const data = await response.json();
    //       // // console.log(data);
    //       // return data;
    //     },
    queryFn: async () => {
      const response = await axiosSecure(`/carts?email=${user?.email}`);
      return response.data;
      // const data = await response.json();
      // // console.log(data);
      // return data;
    },
  });
  return [cart, refetch];
};
export default useCart;
