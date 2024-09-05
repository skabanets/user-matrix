import { SearchField } from "../SearchField/SearchField";

export const TableHeader = () => {
  return (
    <thead className="font-montserrat-bold bg-tableHeaderBgColor text-tableHeaderTextColor">
      <tr>
        <th className="number-column w-[40px]">№</th>
        <th>
          <p>Name</p>
          <SearchField field="name" />
        </th>

        <th>
          <p>Username</p>
          <SearchField field="username" />
        </th>
        <th>
          <p>Email</p>
          <SearchField field="email" />
        </th>
        <th>
          <p>Phone</p>
          <SearchField field="phone" />
        </th>
      </tr>
    </thead>
  );
};
