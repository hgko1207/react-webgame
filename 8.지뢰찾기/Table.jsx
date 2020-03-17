import React from "react";
import Tr from "./Tr";
import { useTableContext } from "./MineSearch";

const Table = () => {
  const { tableData } = useTableContext();
  return (
    <table>
      <tbody>
        {Array(tableData.length)
          .fill()
          .map((tr, i) => (
            <Tr key={i} rowIndex={i} />
          ))}
      </tbody>
    </table>
  );
};

export default Table;
