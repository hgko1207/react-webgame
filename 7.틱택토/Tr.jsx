import React, { memo } from "react";
import Td from "./Td";

const Tr = memo(({ rowData, rowIndex, dispatch }) => {
  return (
    <tr>
      {/* {Array.from({ length: rowData.length }, td => (
        <Td>{}</Td>
      ))} */}
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td
            key={i}saaaaa
            rowIndex={rowIndex}
            cellIndex={i}
            cellData={rowData[i]}
            dispatch={dispatch}
          ></Td>
        ))}
    </tr>
  );
});

export default Tr;
