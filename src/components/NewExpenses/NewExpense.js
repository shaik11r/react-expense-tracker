import './NewExpense.css';
import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
const NewExpense=(props)=>{
    const [isEditing,setIsEditing]=useState(false); 
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);//we are sending expensedata to app.js

        //this function defined in the new expense component will be executed 
        //in the from data now we are expecting a props because we send this function;
        //that is onsaveExpensedata
    }
    const startEditingHandler=()=>{
        setIsEditing(true);
    }
    const stopEditingHandler=()=>{
        setIsEditing(false);
    }
return (
<div className="new-expense">
    {!isEditing&&<button onClick={startEditingHandler}>Add New Expense</button>}
    {isEditing&&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
</div>
)
};
export default NewExpense;