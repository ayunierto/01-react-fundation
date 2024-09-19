import axios from "axios";
import { useEffect } from "react";

export const UsersPage = () => {
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => console.log(res.data));
    // fetch("https://reqres.in/api/users?page=2")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  });

  return (
    <>
      <h3>Users</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>avatar</td>
            <td>name</td>
            <td>email</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
