import Link from "next/link";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  }); // Disable caching

  //   const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  //     next: { revalidate: 10 },
  //   }); // Refresh after a certain period of time

  const users: User[] = await res.json();

  const sortedUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default UserTable;