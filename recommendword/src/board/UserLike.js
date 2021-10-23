import { React, useState } from "react";

const UserLike = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <form>
        <input onChange={(e) => setValue(e.currentTarget.value)} />
      </form>
    </>
  );
};
export default UserLike;
