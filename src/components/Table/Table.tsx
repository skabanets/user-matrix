import { Message } from "../Message/Message";
import { TableHeader } from "./TableHeader";
import { TableItem } from "./TableItem";

import type { User } from "../../types/User";
import { Filter } from "../../types";

interface TableProps {
  users: User[];
  filter: Filter;
}

export const Table = ({ users, filter }: TableProps) => {
  return (
    <>
      <table className="w-full text-center shadow-sm">
        <TableHeader />
        <tbody>
          {users.map((user, index) => (
            <TableItem key={user.id} user={user} number={index + 1} />
          ))}
        </tbody>
      </table>
      {users.length === 0 && filter && <Message text={"Nothing found"} />}
    </>
  );
};
