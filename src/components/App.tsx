import { useEffect } from "react";

import { Table } from "./Table/Table";

import { fetchUsers } from "../redux/users/usersOperations";
import { selectUsers } from "../redux/users/usersSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

export const App = () => {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <main>
      <section className="container pt-16">
        <Table users={users} />
      </section>
    </main>
  );
};
