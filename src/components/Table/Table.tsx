import { TableRow } from "../TableRow/TableRow";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { setFilter } from "../../users/userSlice";

export const Table = () => {
  const filterBy = useAppSelector((state) => state.usersState.filterBy);
  const dispatch = useAppDispatch();
  console.log("render table");
  return (
    <>
      <table>
        <thead>
          <tr>
            <th
              className={filterBy === "name" ? "selected" : ""}
              onClick={() => {
                dispatch(setFilter("name"));
              }}
            >
              Name
            </th>
            <th
              className={filterBy === "username" ? "selected" : ""}
              onClick={() => {
                dispatch(setFilter("username"));
              }}
            >
              Username
            </th>
            <th
              className={filterBy === "email" ? "selected" : ""}
              onClick={() => {
                dispatch(setFilter("email"));
              }}
            >
              Email
            </th>
            <th
              className={filterBy === "phone" ? "selected" : ""}
              onClick={() => {
                dispatch(setFilter("phone"));
              }}
            >
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </table>
    </>
  );
};
