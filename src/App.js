import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFiter";

const DummyData = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "1",
    title: "RS 200 bike",
    amount: 45000,
    date: new Date(2016, 7, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DummyData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExp) => {
      return [expense, ...prevExp];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>

      <Expense items={expenses} />
    </div>
  );
}

export default App;
