import "./App.css";
import { Table } from "./components/Table/Table";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { SETTINGS } from "./settings";
import { fetchUsers } from "./users/usersApi";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  const filterValue = useAppSelector((state) => state.usersState.filterValue);

  useEffect(() => {
    if (!filterValue) dispatch(fetchUsers(SETTINGS.GET_USER_URL));
  }, [dispatch]);

  return (
    <>
      <h1>Users</h1>
      <SearchBar></SearchBar>
      <Table></Table>
    </>
  );
}

export default App;
