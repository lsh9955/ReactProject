import { React, useState } from "react";

const UserLike = () => {
  const [value, setValue] = useState("");

  function clickPlace() {
    console.log("hell");
    return <div></div>;
  }
  function clickDay() {}
  function clickBudget() {}
  function clickBudgetOrder() {}
  return (
    <>
      <div>나는 {<span onClick={clickPlace}>_____</span>}을(를) 가려고 해</div>
      <div>기간은 {<span onClick={clickDay}>__</span>}일이야</div>
      <div>예산은 {<span onClick={clickBudget}>____</span>} 이고</div>
      <div>{<span onClick={clickBudgetOrder}>___</span>}순으로 많이 쓸 거야</div>
    </>
  );
};
export default UserLike;
