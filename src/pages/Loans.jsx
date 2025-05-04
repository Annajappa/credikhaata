import React from "react";
import { useCustomers } from "../context/CustomerContext";

export default function Loans() {
  const { loans } = useCustomers();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Loans</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="py-2 px-4">Loan ID</th>
              <th className="py-2 px-4">Customer</th>
              <th className="py-2 px-4">Amount ($)</th>
              <th className="py-2 px-4">Issue Date</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan, index) => (
              <tr key={index} className="hover:bg-gray-50 border-b">
                <td className="py-2 px-4">{loan.id}</td>
                <td className="py-2 px-4">{loan.customer}</td>
                <td className="py-2 px-4">{loan.amount.toFixed(2)}</td>
                <td className="py-2 px-4">{loan.issueDate}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium ${
                      loan.status === "Approved"
                        ? "bg-green-100 text-green-600"
                        : loan.status === "Rejected"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {loan.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
