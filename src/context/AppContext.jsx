import React, { createContext, useState } from 'react'

// Context creation
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const initialInvoiceData ={
    title:"New Invoice",
    billing:{name:"",phone:"",address:""},
    shipping:{name:"",phone:"",address:""},
    invoice:{number:"",date:"",dueDate:""},
    account:{name:"",number:"",ifsccode:""},
    company:{name:"",number:"",address:""},
    tax:0,
    notes:"",
    items:[
        {name:"",qty:"",amount:"",description:"",total:0}
    ],
    logo:""
};

// Context Provider component
const AppContextProvider = ({ children }) => {
  const [invoiceTitle, setInvoiceTitle] = useState("new invoice");
  const [invoiceData,setInvoiceData] = useState(initialInvoiceData);
  const [selectedTemplate,setSelectedTemplate] = useState("template1")

  const baseURL = "http://localhost:8080/api";

  const contextValue = {
    invoiceTitle,
    setInvoiceTitle,
    invoiceData,
    setInvoiceData,
    selectedTemplate,
    setSelectedTemplate,
    initialInvoiceData,
    baseURL
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
