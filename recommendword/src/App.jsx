import "./App.css";
import SearchBoard from "./board/SearchBoard";
import logo from "../src/board/logoImg.svg";
import title from "../src/board/title.svg";
import posts from "../src/board/posts.svg";
import search from "../src/board/search.svg";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import UserLike from "./board/UserLike";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">
        <div className="titleBlock">
          <img src={logo} style={{ width: "80px", height: "80px", position: "relative" }} />
          <img src={title} style={{ width: "200px", height: "100px", position: "relative" }} />
        </div>
      </Link>
      <hr></hr>
      <Switch>
        <Route exact path="/">
          <Link to="/post">
            <img src={posts} />
          </Link>
          <Link to="/search">
            <img src={search} />
          </Link>
        </Route>

        <Route exact path="/search">
          <div className="App">사용자 단어 추천</div>
          <SearchBoard />
        </Route>
        <Route exact path="/post">
          <UserLike />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
