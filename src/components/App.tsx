import { useEffect } from "react";

import { Table } from "./Table/Table";
import { Loader } from "./Loader/Loader";

import { fetchUsers } from "../redux/users/usersOperations";
import { selectIsLoading, selectUsers } from "../redux/users/usersSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

export const App = () => {
  const users = useAppSelector(selectUsers);
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main>
      <section className="container pt-16">
        <Table users={users} />
      </section>
    </main>
  );
};
