import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useCustomers } from "../context/CustomerContext";

export default function LoanLineChart() {
  const { loans } = useCustomers();

  // Group loans by issueDate and sum the amounts
  const groupedData = loans.reduce((acc, loan) => {
    const date = loan.issueDate;
    if (!acc[date]) {
      acc[date] = { issueDate: date, totalAmount: 0 };
    }
    acc[date].totalAmount += loan.amount;
    return acc;
  }, {});

  const chartData = Object.values(groupedData).sort((a, b) =>
    a.issueDate.localeCompare(b.issueDate)
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Loan Amount Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <Line type="monotone" dataKey="totalAmount" stroke="#8884d8" strokeWidth={2} />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="issueDate" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
