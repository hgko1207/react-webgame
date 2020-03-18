import React, { memo } from "react";
import { useTableContext } from "./MineSearch";
import Td from "./Td";

const Tr = memo(({ rowIndex }) => {
  const { tableData } = useTableContext();
  return (
    <tr>
      {tableData[0] &&
        Array(tableData[0].length)
          .fill()
          .map((td, i) => <Td key={i} rowIndex={rowIndex} cellIndex={i} />)}
    </tr>
  );
});

export default Tr;
