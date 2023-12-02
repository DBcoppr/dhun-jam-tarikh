import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./screens/dashboard/Dashboard";
import Login from "./screens/login/Login";
import { DashboardProvider } from "./screens/dashboardContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <DashboardProvider>
                <Login />
              </DashboardProvider>
            }
          />
          <Route
            path="/dashboard"
            element={
              <DashboardProvider>
                <Dashboard />
              </DashboardProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
