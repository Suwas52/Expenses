import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import userEvent from "@testing-library/user-event";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const [isEditing, setIsEditing] = useState(false);

  const addExpensesHandler = () => {
    setIsEditing(true);
  };

  const cancelHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={addExpensesHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
