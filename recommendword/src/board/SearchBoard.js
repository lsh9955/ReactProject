import { React, useState } from "react";
import { Link } from "react-router-dom";
import ShowWord from "./ShowWord";

const SearchBoard = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <div>
        <Link to="/"> 메인으로 이동</Link>
      </div>
      <form>
        <input onChange={(e) => setValue(e.currentTarget.value)} />
      </form>
      <ShowWord nowValue={value} />
    </>
  );
};
export default SearchBoard;
