import React, { Component } from "react";
import NumberBaseball from "../3.숫자야구/NumberBaseballClass";
import RSP from "../5.가위바위보/RSPClass";
import Lotto from "../6.로또/LottoClass";

class GameMatcher extends Component {
  render() {
    const { match } = this.props;
    if (match.params.name == "number-baseball") {
      return <NumberBaseball />;
    } else if (match.params.name == "rock-scissors-paper") {
      return <RSP />;
    } else if (match.params.name == "lotto-generator") {
      return <Lotto />;
    }
    return <div>일치하는 게임이 없습니다.</div>;
  }
}

export default GameMatcher;
