import "./App.css";
import SearchBoard from "./board/SearchBoard";
import logo from "../src/board/logoImg.svg";
import title from "../src/board/title.svg";

function App() {
  return (
    <>
      <div className="titleBlock">
        <img src={logo} style={{ width: "80px", height: "80px", position: "relative" }} />
        <img src={title} style={{ width: "200px", height: "100px", position: "relative" }} />
      </div>
      <div className="App">사용자 단어 추천</div>

      <SearchBoard />
    </>
  );
}

export default App;
