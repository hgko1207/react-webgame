import React from "react";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import NumberBaseball from "../3.숫자야구/NumberBaseball";
import RSP from "../5.가위바위보/RSP";
import Lotto from "../6.로또/Lotto";

const Games = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/number-baseball" component={NumberBaseball}></Route>
        <Route path="/rock-scissors-paper" component={RSP}></Route>
        <Route path="/lotto-generator" component={Lotto}></Route>
      </div>
    </BrowserRouter>
  );
};

export default Games;
