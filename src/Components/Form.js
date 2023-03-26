import React, { useState } from "react";

function Form(props) {
  const [budgetData, setBudgetData] = useState({
    charge: "",
    amount: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setBudgetData((prev) => ({
      ...prev,
      [name]: value,
      id: Date.now(),
    }));
  };
  const handleEdit = (event) => {
    const { value, name } = event.target;
    setBudgetData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleClick = () => {
    if (budgetData.charge.length === 0 || budgetData.amount.length === 0)
      return;
    props.setArrOfBudget((prev) => [...prev, budgetData]);
    setBudgetData({
      charge: "",
      amount: "",
    });
    props.setTotal((prev) => prev + Number(budgetData.amount));
  };
  if (props.Edit) {
    console.log(props.Edit);
  }
  return (
    <div>
      <h1>{props.Edit ? props.Edit.name : "nothing"}</h1>
      <h4>Charge</h4>
      <input
        placeholder="e.g rent"
        value={props.Edit ? props.Edit.charge : budgetData.charge}
        name="charge"
        onChange={props.Edit ? handleEdit : handleChange}
      />
      <h4>Amount</h4>
      <input
        type="number"
        placeholder="e.g 100"
        value={props.Edit ? props.Edit.amount : budgetData.amount}
        name="amount"
        onChange={handleChange}
      />
      <input type="button" value="Submit" onClick={handleClick} />
    </div>
  );
}

export default Form;
