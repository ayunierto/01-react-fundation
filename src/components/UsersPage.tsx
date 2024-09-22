import { useUser } from "../hooks";
import { UserRow } from ".";

export const UsersPage = () => {
  const { nextPage, prevPage, users } = useUser();
  return (
    <>
      <h3>Users</h3>
      <table>
        <thead>
          <tr>
            <th>avatar</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  );
};
