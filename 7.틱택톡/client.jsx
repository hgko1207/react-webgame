import React from "react";
import ReactDom from "react-dom";
import { hot } from "./node_modules/react-hot-loader/root";

import Lotto from "./Lotto";

const Hot = hot(Lotto);

ReactDom.render(<Hot />, document.querySelector("#root"));
