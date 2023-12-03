import React, { useState } from "react";
import "./styles.css";
import "../login/styles.css";

import BarGraph from "./components/BarGraph";
import { useDashboardContext } from "../dashboardContext";
import { checkSaveCondition } from "./utils";
import { updatePrice } from "./api";

const Dashboard = () => {
  const { adminData, updateAdminData } = useDashboardContext();

  const [customAmount, setCustomAmount] = useState(adminData?.amount || null);
  const handleCustomChange = (e) => {
    const { name, value } = e.target;
    const updatedAmount = { ...customAmount };
    updatedAmount[name] = parseInt(value);
    setCustomAmount(updatedAmount);
  };

  const handleSave = async () => {
    let response = await updatePrice({ amount: customAmount });
    updateAdminData({ ...adminData, amount: response.data.data.amount });
  };

  let amountCondition = checkSaveCondition(customAmount).result;
  if (!adminData || !adminData.charge_customers) return <>Loading....</>;

  if (!adminData.charge_customers) {
    let elements = document.getElementsByClassName("dashboard-input");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#C2C2C2";
    }
  }
  return (
    <div className="layout-main">
      <div className="dashboard">
        <h1>
          {adminData.name}, {adminData.location} on Dhun Jam{" "}
        </h1>
        <div className="dashboard-settings">
          <div className="dashboard_settings_child">
            <p className="dashboard_settings_left">
              Do you want to charge your customers for requesting songs?
            </p>

            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="chargeRadio"
                  value="yes"
                  checked={adminData.charge_customers}
                  className={
                    adminData.charge_customers
                      ? `active-radio`
                      : `inactive-radio`
                  }
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="chargeRadio"
                  value="no"
                  checked={!adminData.charge_customers}
                  className={
                    !adminData.charge_customers
                      ? `active-radio`
                      : `inactive-radio`
                  }
                />
                No
              </label>
            </div>
          </div>
          <div className="dashboard_settings_child">
            <p>Custom song request amount-</p>
            <input
              type="number"
              placeholder="0"
              min={99}
              name="category_6"
              value={customAmount.category_6}
              readOnly={!adminData.charge_customers}
              onChange={handleCustomChange}
              className="dashboard-input custom_input"
            />
          </div>
          <div className="dashboard_settings_child">
            <p>Regular song request amounts from high to low</p>
            <div className="dashboard_regular_song">
              <input
                type="number"
                placeholder="0"
                min={79}
                value={customAmount.category_7}
                readOnly={!adminData.charge_customers}
                onChange={handleCustomChange}
                name="category_7"
                className="dashboard-input regular_input"
              />
              <input
                type="number"
                placeholder="0"
                min={59}
                value={customAmount.category_8}
                readOnly={!adminData.charge_customers}
                onChange={handleCustomChange}
                name="category_8"
                className="dashboard-input regular_input"
              />
              <input
                type="number"
                placeholder="0"
                min={39}
                value={customAmount.category_9}
                name="category_9"
                readOnly={!adminData.charge_customers}
                onChange={handleCustomChange}
                className="dashboard-input regular_input"
              />
              <input
                type="number"
                placeholder="0"
                min={19}
                value={customAmount.category_10}
                name="category_10"
                readOnly={!adminData.charge_customers}
                onChange={handleCustomChange}
                className="dashboard-input regular_input"
              />
            </div>
          </div>
        </div>
        {adminData?.charge_customers && (
          <BarGraph customAmount={customAmount} />
        )}
        <button
          className={
            adminData.charge_customers &&
            !amountCondition &&
            `greyed-out-button `
          }
          onClick={handleSave}
          disabled={!amountCondition}
        >
          Save
        </button>
      </div>{" "}
    </div>
  );
};
export default Dashboard;
