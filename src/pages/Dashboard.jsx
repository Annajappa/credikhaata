import React from "react";
import { useCustomers } from "../context/CustomerContext";
import { useState } from "react";
import AddCustomerModel from "../components/AddCustomerModel";
import LoanLineChart from "../components/LineGraphOfData";


export default function Dashboard() {
  const { customers } = useCustomers();
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Balance ($)</th>
              <th className="py-2 px-4">Due Date</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 border-b transition duration-150"
              >
                <td className="py-2 px-4">{customer.name}</td>
                <td className="py-2 px-4">{customer.balance.toFixed(2)}</td>
                <td className="py-2 px-4">{customer.dueDate}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium ${
                      customer.status === "Paid"
                        ? "bg-green-100 text-green-600"
                        : customer.status === "Overdue"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4">
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4"
      >
        Add Customer
      </button>

      <AddCustomerModel isOpen={open} onClose={() => setOpen(false)} />
    </div>
      </div>
      <LoanLineChart />
    </div>
  );
}
