import { User } from "../interfaces";

interface UserRowProps {
  user: User;
}

export const UserRow = ({ user }: UserRowProps) => {
  return (
    <tr key={user.id}>
      <td>
        <img
          style={{ width: "50px", borderRadius: "50%" }}
          src={user.avatar}
          alt="avatar"
        />
      </td>
      <td>{user.first_name}</td>
      <td>{user.email}</td>
    </tr>
  );
};

export default UserRow;
