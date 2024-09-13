import css from "./Loader.module.css";
export const Loader = () => {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>
      <div className={css.loader}></div>
    </>
  );
};
