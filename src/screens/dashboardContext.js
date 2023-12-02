import React, { createContext, useContext, useState } from "react";
const DashboardDetail = createContext("");

const DashboardProvider = ({ children }) => {
  const [adminData, setAdminData] = useState(null);

  const updateAdminData = (value) => {
    setAdminData(value);
  };
  return (
    <DashboardDetail.Provider value={{ adminData, updateAdminData }}>
      {children}
    </DashboardDetail.Provider>
  );
};

const useDashboardContext = () => {
  return useContext(DashboardDetail);
};

export { DashboardProvider, useDashboardContext };
