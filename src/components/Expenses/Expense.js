import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFiter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("2019");

  const filterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter select={filterYear} onChangeFilter={filterHandler} />
      <ExpensesChart expenses={filterExpenses} />
      <ExpensesList items={filterExpenses} />
      {/*
      .......Alternative way........
      {filterExpenses.length === 0 && (
        <p style={{ color: `white` }}>No expenses found.</p>
      )}
      {filterExpenses.length > 0 &&
        filterExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
      {/* ......alternative...... 
       {filterExpenses.length === 0 ? (
        <p>No expenses found. </p>
      ) : (
        filterExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}
    </Card>
  );
};

export default Expense;
