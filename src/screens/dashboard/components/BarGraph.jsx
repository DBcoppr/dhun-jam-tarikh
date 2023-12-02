import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "./styles.css";
import rupee from "../../../assets/rupee.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  barThickness: 30,
  scales: {
    x: {
      border: {
        color: "white",
      },
      title: {
        display: false,
      },

      ticks: {
        beginAtZero: true,
        color: "#FFFFFF",
      },
      gridLines: {
        display: false,
      },
    },
    y: {
      title: {
        display: true,
        text: "Rupess",
      },
      grid: {
        tickColor: "white",
      },
      border: {
        color: "white",
      },
      gridLines: {
        display: false,
      },
      ticks: {
        color: "#FFFFFF", // Y-axis tick color
      },
      grid: {
        tickColor: "white",
      },
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function BarGraph({ customAmount }) {
  console.log(customAmount);
  const data = {
    labels: ["Custom", "Category 1", "Category 2", "Category 3", "Category 4"],
    datasets: [
      {
        data: Object.values(customAmount),
        backgroundColor: "#F0C3F1",
        borderColor: "#F0C3F1",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="dashboard-graph">
      <img src={rupee} alt="rupee" />
      <Bar options={options} data={data} className="barGraph" />
    </div>
  );
}
