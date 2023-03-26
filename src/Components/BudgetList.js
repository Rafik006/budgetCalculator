import React from "react";
// import AiFillDelete from "react-icons/Ai"

function BudgetList(props) {
  return (
    <div>
      {props.arrOfBudget.map((budget) => (
        <div key={budget.id}>
          <h3>{budget.charge}</h3>
          <h3>${budget.amount}</h3>
          <button onClick={()=>props.handleEdit(budget.id)}>edit</button>
          <button onClick={()=>props.handleDelete(budget.id)}>
            
            {/* <AiFillDelete /> */}
            Delete
          </button>
        </div>
      ))}
       {props.arrOfBudget.length!==0 &&<button onClick={props.handleClear}>Clear Expenses</button> }

    </div>
    
  );
}

export default BudgetList;
