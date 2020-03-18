import React from "react";
import { BrowserRouter, HashRouter, Route, Link, Switch } from "react-router-dom";

import GameMatcher from "./GameMatcher";

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/game/number-baseball">숫자야구</Link>
        &nbsp;
        <Link to="/game/rock-scissors-paper">가위바위보</Link>
        &nbsp;
        <Link to="/game/lotto-generator">로또생성기</Link>
      </div>

      <div>
        <Switch>
          <Route exact path="/" component={GameMatcher}></Route>
          <Route path="/game/:name" component={GameMatcher}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Games;
