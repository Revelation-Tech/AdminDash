import React, { createContext, useContext, useState } from "react";

const TableContext = createContext();

const TableProvider = ({ children }) => {
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateColumns = (columns) => setColumns(columns);
  const updateLoading = (loader) => setLoading(loader);

  return (
    <TableContext.Provider value={{ columns, updateLoading, updateColumns }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;

export const useTableConfig = () => useContext(TableContext);
