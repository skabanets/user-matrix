import { useEffect } from "react";

import { Table } from "./Table/Table";
import { Loader } from "./Loader/Loader";

import { fetchUsers } from "../redux/users/usersOperations";
import { selectFilters, selectIsLoading, selectUsers } from "../redux/users/usersSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getFilteredUsers } from "../helpers/getFilteredUsers";

export const App = () => {
  const users = useAppSelector(selectUsers);
  const filter = useAppSelector(selectFilters);
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const filteredUsers = getFilteredUsers(users, filter);

  return (
    <main>
      <section className="container pt-[100px]">
        <Table users={filteredUsers} />
      </section>
    </main>
  );
};
