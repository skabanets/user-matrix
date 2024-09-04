import { User } from "../../types/User";

interface TableItemProps {
  user: User;
  number: number;
}
export const TableItem = ({ user, number }: TableItemProps) => {
  return (
    <tr className="h-[64px] font-roboto-regular">
      <td>{number}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
    </tr>
  );
};
