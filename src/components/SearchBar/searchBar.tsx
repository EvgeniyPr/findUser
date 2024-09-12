import { ChangeEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { filterUsers, setFilterValue } from "../../users/userSlice";

export const SearchBar: FC = () => {
  const filterBy = useAppSelector((state) => state.usersState.filterBy);
  const filterValue = useAppSelector((state) => state.usersState.filterValue);
  const dispatch = useAppDispatch();

  const filter = (e: ChangeEvent<HTMLInputElement>) => {
    sessionStorage.setItem("currentFilter", e.target.value);
    dispatch(setFilterValue(e.target.value));
    dispatch(filterUsers(e.target.value));
  };
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        backgroundColor: "#f8f9fa",
      }}
    >
      <label
        style={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "400px",
          width: "100%",
          gap: "10px",
          fontFamily: "'Helvetica Neue', sans-serif",
          color: "#333",
        }}
      >
        <p
          style={{
            maxWidth: "fit-content",
            margin: "0 auto",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {`Search user by ${filterBy}:`}
        </p>
        <input
          value={filterValue}
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            width: "100%",
            boxSizing: "border-box",
          }}
          placeholder={`Enter ${filterBy}...`}
          onChange={(e) => {
            filter(e);
          }}
        ></input>
      </label>
    </div>
  );
};
