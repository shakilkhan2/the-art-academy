import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../providers/authProvider/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem('access-token');

  const { refetch, data: cart = [0] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`, {headers: {
          autorization: `bearer ${token}`
        }}
      );

      const data = await response.json();
      // console.log(data);
      return data;
    },
  });
  return [cart, refetch];
};
export default useCart;
