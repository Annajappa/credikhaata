import React from "react";
import { useCustomers } from "../context/CustomerContext";

export default function Customers() {
  const { customers } = useCustomers();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Customers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {customers.map((customer, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="text-lg font-medium mb-1">{customer.name}</h3>
            <p className="text-sm text-gray-600">Balance: ${customer.balance.toFixed(2)}</p>
            <p className="text-sm text-gray-600">Due: {customer.dueDate}</p>
            <span
              className={`inline-block mt-2 px-2 py-1 rounded text-sm ${
                customer.status === "Paid"
                  ? "bg-green-100 text-green-600"
                  : customer.status === "Overdue"
                  ? "bg-red-100 text-red-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {customer.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
