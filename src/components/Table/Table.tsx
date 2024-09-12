import { TableRow } from "../TableRow/TableRow";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  filterUsers,
  resetFilterValue,
  setFilter,
} from "../../users/userSlice";
import { FC } from "react";
import {
  UserStateFilterBy,
  UserStateStatus,
} from "../../users/models/UserModels";
import { Loader } from "../Loader/Loader";
import { Error } from "../Error/Error";

export const Table: FC = () => {
  const filterBy = useAppSelector((state) => state.usersState.filterBy);
  const status = useAppSelector((state) => state.usersState.status);
  const dispatch = useAppDispatch();

  const handleColumnClick = (filterType: UserStateFilterBy) => {
    if (filterBy !== filterType) {
      dispatch(resetFilterValue());
      dispatch(setFilter(filterType));
      dispatch(filterUsers(""));
    }
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th
              style={{ width: "25%" }}
              className={filterBy === UserStateFilterBy.name ? "selected" : ""}
              onClick={() => handleColumnClick(UserStateFilterBy.name)}
            >
              Name
            </th>
            <th
              style={{ width: "25%" }}
              className={
                filterBy === UserStateFilterBy.username ? "selected" : ""
              }
              onClick={() => handleColumnClick(UserStateFilterBy.username)}
            >
              Username
            </th>
            <th
              style={{ width: "25%" }}
              className={filterBy === UserStateFilterBy.email ? "selected" : ""}
              onClick={() => handleColumnClick(UserStateFilterBy.email)}
            >
              Email
            </th>
            <th
              style={{ width: "25%" }}
              className={filterBy === UserStateFilterBy.phone ? "selected" : ""}
              onClick={() => handleColumnClick(UserStateFilterBy.phone)}
            >
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {status === UserStateStatus.loading ? (
            <tr>
              <td colSpan={4}>
                <Loader />
              </td>
            </tr>
          ) : status === UserStateStatus.succeeded ? (
            <TableRow />
          ) : (
            <tr>
              <td colSpan={4}>
                <Error />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
