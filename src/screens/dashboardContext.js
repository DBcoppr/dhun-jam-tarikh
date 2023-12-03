import React, { createContext, useContext, useState, useEffect } from "react";

const DashboardDetail = createContext("");

const DashboardProvider = ({ children }) => {
  const [adminData, setAdminData] = useState(() => {
    const storedData = localStorage.getItem("adminData");
    return storedData ? JSON.parse(storedData) : null;
  });

  useEffect(() => {
    localStorage.setItem("adminData", JSON.stringify(adminData));
  }, [adminData]);

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
