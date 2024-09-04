import type { User } from "../../types/User";
import { TableHeader } from "./TableHeader";
import { TableItem } from "./TableItem";

interface TableProps {
  users: User[];
}

export const Table = ({ users }: TableProps) => {
  return (
    <table className="w-full text-center shadow-sm">
      <TableHeader />
      <tbody>
        {users.map((user, index) => (
          <TableItem key={user.id} user={user} number={index + 1} />
        ))}
      </tbody>
    </table>
  );
};
