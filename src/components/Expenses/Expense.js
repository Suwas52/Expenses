import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFiter";
const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("2019");

  const filterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        select={filterYear}
        onChangeFilter={filterHandler}
      ></ExpensesFilter>


      {props.items.map((expense)=>(
        <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
      ))};

    </Card>
  );
};

export default Expense;
