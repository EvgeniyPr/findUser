import "./App.css";
import { Table } from "./components/Table/Table";
import { SearchBar } from "./components/SearchBar/searchBar";
import { SETTINGS } from "./settings";
import { fetchUsers } from "./users/usersApi";
import { useAppDispatch } from "./redux/hooks/hooks";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers(SETTINGS.GET_USER_URL));
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
