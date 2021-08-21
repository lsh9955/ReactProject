import { useState } from "react";
import UserName from "./UserName";
export default function Hello(props) {
  const [name, setName] = useState("mike");
  const [age, setAge] = useState(props.age);

  function changeName() {
    const newName = name === "mike" ? "jane" : "mike";
    setName(newName);
    setAge(age + 1);
  }
  return (
    <div>
      <h1>hello</h1>
      <h2>
        {name},{age}
      </h2>
      <UserName name={name} />
      <button onClick={changeName}>change</button>
    </div>
  );
}
