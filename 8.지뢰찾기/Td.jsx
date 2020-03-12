import React, { useContext, useCallback } from "react";
import { TableContext, CODE } from "./MineSearch";

const getTdStyle = code => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: "#444"
      };
    case CODE.OPENED:
      return {
        background: "white"
      };
    default:
      return {
        background: "white"
      };
  }
};

const getTdText = code => {
  switch (code) {
    case CODE.NORMAL:
      return "";
    case CODE.MINE:
      return "X";
    default:
      return "";
  }
};

const Td = ({ rowIndex, cellIndex }) => {
  const { tableData } = useContext(TableContext);

  const onClickId = useCallback(() => {}, []);

  return (
    <td style={getTdStyle(tableData[rowIndex][cellIndex])} onClick={onClickId}>
      {getTdText(tableData[rowIndex][cellIndex])}
    </td>
  );
};

export default Td;
