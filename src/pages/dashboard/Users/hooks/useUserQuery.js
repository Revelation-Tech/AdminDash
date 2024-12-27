import { message } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { users, user, updateUser, removeUser } from "../service";
import useTableStore from "@store/useTableStore";
import { columns, transactionPreviewColumns } from "../data";

const useUserQuery = () => {
  const queryClient = useQueryClient();

  const fetchUsers = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await users();
      // useTableStore.setState({ columns });
      return res;
    },
  });

  const getUser = (userId) =>
    useQuery({
      queryKey: ["users", userId],
      queryFn: async () => {
        const res = await user(userId);

        const transactions = res?.wallet?.transactions;

        useTableStore.setState({
          data: transactions,
          columns: transactionPreviewColumns,
        });

        return res;
      },
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
    onSuccess: () => {
      message.success("User updated successfully");
      queryClient.invalidateQueries(["users"]);
    },
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
