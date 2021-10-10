import "./App.css";
import SearchBoard from "./board/SearchBoard";
import logo from "../src/board/logoImg.svg";
function App() {
  return (
    <>
      <img src={logo} style={{ width: "50px", height: "50px" }} />
      <div className="App">사용자 단어 추천</div>

      <SearchBoard />
    </>
  );
}

export default App;
