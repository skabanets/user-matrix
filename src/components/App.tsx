import { Table } from "./Table/Table";

export const App = () => {
  const users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
    },
  ];

  return (
    <main>
      <section className="container pt-16">
        <Table users={users} />
      </section>
    </main>
  );
};
