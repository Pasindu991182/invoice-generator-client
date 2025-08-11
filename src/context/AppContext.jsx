import React, { createContext, useState } from 'react'

// Context creation
export const AppContext = createContext();

// Context Provider component
const AppContextProvider = ({ children }) => {
  const [invoiceTitle, setInvoiceTitle] = useState("new invoice");

  const contextValue = {
    invoiceTitle,
    setInvoiceTitle
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
