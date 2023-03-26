import "./App.css";
import Form from "./Components/Form";
import React, { useState } from "react";
import BudgetList from "./Components/BudgetList";
function App() {
  const [arrOfBudget, setArrOfBudget] = useState([]);
  const [total, setTotal] = useState(0);
  const [Edit, setEdit] = useState({
    id: null,
    amount: "",
    charge: "",
    name: "updated form",
  });

  const handleDelete = (target) => {
    const updatedArr = arrOfBudget.filter((budget) => budget.id !== target);
    setArrOfBudget(updatedArr);
    const Amount = Number(
      arrOfBudget.filter((budget) => budget.id === target)[0].amount
    );
    setTotal((prev) => prev - Amount);
  };
  const handleClear = () => {
    setArrOfBudget([]);
    setTotal(0);
  };
  const handleEdit = (target) => {
    const arr = arrOfBudget.map((budget) =>
      budget.id === target ? budget : null
    )[0];
    console.log(arr.value);

    setEdit({
      ...Edit,
      id: arr.id,
      amount: arr.amount,
      charge: arr.charge,
    });
    console.log(Edit);
    // console.log(arr);
    console.log(Array.isArray(arr));
  };
  return Edit.id ? (
    <div className="App">
      <h2>Budget Calculator</h2>
      <Form Edit={Edit} setTotal={setTotal} setArrOfBudget={setArrOfBudget} />
      <BudgetList
        handleEdit={handleEdit}
        handleClear={handleClear}
        handleDelete={handleDelete}
        arrOfBudget={arrOfBudget}
      />
      <h2>Total spending : ${total} </h2>
    </div>
  ) : (
    <div className="App">
      <h2>Budget Calculator</h2>
      <Form setTotal={setTotal} setArrOfBudget={setArrOfBudget} />
      <BudgetList
        handleEdit={handleEdit}
        handleClear={handleClear}
        handleDelete={handleDelete}
        arrOfBudget={arrOfBudget}
      />
      <h2>Total spending : ${total} </h2>
    </div>
  );
}

export default App;
