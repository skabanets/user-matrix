export const TableHeader = () => {
  return (
    <thead className="bg-tableHeaderBgColor text-tableHeaderTextColor font-montserrat-bold h-12">
      <tr>
        <th className="number-column">№</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
    </thead>
  );
};
