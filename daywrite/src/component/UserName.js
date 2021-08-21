function UserName({ name }) {
  //여기서 왜 {name} 으로 해야 오류가 안나는지???
  return <p>hello, {name}</p>;
}
export default UserName;
