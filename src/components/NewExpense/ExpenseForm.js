import React, { useState } from "react";
import "./ExpenseForm.css";
import ExpenseDate from "./../Expenses/ExpenseDate";
const ExpenseForm = (props) => {
  //Multiple State is more convenient than single state

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Single State Use
  // const [userInput,setUserInput] = useState({
  //     enteredTitle : '',
  //     enteredAmount : '',
  //     enteredDate : '',
  // })

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle : event.target.value,
    // });
    // setUserInput((prevState) =>{
    //    return { ...prevState,
    //     enteredTitle : event.target.value
    //    }
    // });
  };

  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount : event.target.value,
    // });
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate : event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //This is calling this function of child component
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleHandler}
            placeholder="Enter the title name"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountHandler}
            min="0.01"
            step="0.01"
            placeholder="Enter amount "
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateHandler}
            min="2019-01-01"
            max="2023-12-29"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
