import { message } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { users, user, updateUser, removeUser } from "../service";

const useUserQuery = () => {
  const queryClient = useQueryClient();

  const fetchUsers = useQuery({
    queryKey: ["users"],
    queryFn: users,
  });

  const getUser = (userId) =>
    useQuery({
      queryKey: ["users", userId],
      queryFn: user,
    });

  const createUser = () =>
    useMutation({
      mutationFn: storeUser,
      onSuccess: () => {
        message.success("User saved successfully");
        queryClient.invalidateQueries(["users"]);
      },
      onError: () => {
        message.error("Failed to save user");
      },
    });

  const editUser = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {},
    onError: () => {},
  });
  const deleteUser = useMutation({
    mutationFn: removeUser,
    onSuccess: () => {},
    onError: () => {},
  });

  return { fetchUsers, getUser, editUser, deleteUser };
};

export default useUserQuery;
