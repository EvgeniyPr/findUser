import { memo } from "react";
import { useAppSelector } from "../../redux/hooks/hooks";

export const TableRow = memo(() => {
  const users = useAppSelector((state) => state.usersState.filteredUsers);
  console.log("render TableRow");
  return (
    <>
      {users.length > 0 ? (
        users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td>No users</td>
        </tr>
      )}
    </>
  );
});
