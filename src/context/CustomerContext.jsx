import React, { createContext, useContext, useEffect, useState } from "react";

// Create context
const CustomerContext = createContext();

// Custom hook
export const useCustomers = () => useContext(CustomerContext);

// Helper functions for localStorage
const loadFromLocalStorage = (key, fallback) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
};

const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Provider
export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState(() =>
    loadFromLocalStorage("customers", [
      { name: "Meghana", balance: 1200.5, dueDate: "2025-05-01", status: "Paid" },
      { name: "Rajesh", balance: 450.75, dueDate: "2025-05-10", status: "Overdue" },
      { name: "Kamala", balance: 780.0, dueDate: "2025-05-15", status: "Pending" },
    ])
  );

  const [loans, setLoans] = useState(() =>
    loadFromLocalStorage("loans", [
      { id: "LN1001", customer: "Meghana", amount: 1000, status: "Approved", issueDate: "2024-01-01" },
      { id: "LN1002", customer: "Rajesh", amount: 500, status: "Pending", issueDate: "2025-01-15" },
      { id: "LN1003", customer: "Kamala", amount: 1200, status: "Rejected", issueDate: "2025-03-10" },
      { id: "LN1004", customer: "Kiran", amount: 700, status: "Approved", issueDate: "2025-04-20" },
    ])
  );

  // Sync to localStorage when state changes
  useEffect(() => {
    saveToLocalStorage("customers", customers);
  }, [customers]);

  useEffect(() => {
    saveToLocalStorage("loans", loans);
  }, [loans]);

  // Add customer + loan
  const addCustomer = (newCustomer) => {
    const newLoan = {
      id: `LN${Date.now()}`,
      customer: newCustomer.name,
      amount: newCustomer.balance,
      status: "Pending",
      issueDate: new Date().toISOString().split("T")[0], // today's date
    };

    setCustomers((prev) => [...prev, newCustomer]);
    setLoans((prev) => [...prev, newLoan]);
  };

  return (
    <CustomerContext.Provider value={{ customers, setCustomers, addCustomer, loans }}>
      {children}
    </CustomerContext.Provider>
  );
};
