import React from "react";
import Td from "./Td";

const Tr = ({ rowData, rowIndex, dispatch }) => {
  return (
    <tr>
      {/* {Array.from({ length: rowData.length }, td => (
        <Td>{}</Td>
      ))} */}
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]} dispatch={dispatch}>
            {""}
          </Td>
        ))}
    </tr>
  );
};

export default Tr;
