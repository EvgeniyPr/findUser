import { FC, memo } from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import { User } from "../../users/models/UserModels";

export const TableRow: FC = memo(() => {
  const users = useAppSelector((state) => state.usersState.filteredUsers);
  return (
    <>
      {users.length > 0 ? (
        users.map((user: User) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td style={{ textAlign: "center", width: "100%" }} colSpan={4}>
            No matches
          </td>
        </tr>
      )}
    </>
  );
});
