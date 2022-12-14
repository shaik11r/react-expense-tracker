import React,{useState} from "react";
import './ExpenseForm.css';

const ExpenseForm=(props)=>{
   const [enteredTitle,setEnteredTitle]=useState('');
   const [enteredAmount,setEnteredAmount]=useState('');
   const [entereddate,setEnteredDate]=useState('');
//we would pass a object
// const [userInput,setUserInput]=useState({
//     EnteredTitle:'',
//     EnteredAmount:'',
//     EnteredDate:''
// });
const titleChangeHandler=(event)=>{
    setEnteredTitle(event.target.value);

        //in react states are scehudle above works fine but in somecases we would update old snap
        //to get latest snap we use prevState this
        // setUserInput((prevState)=>{
        //     return {...prevState,EnteredTitle:event.target.value};
        // })

    };
    // const amountChangeHandler=(event)=>{
    //     setUserInput((prevState)=>{
    //         return {...prevState,EnteredAmount:event.target.value};
    //     })
    // };
    //two way binding we dont just listen we change input also after form submited we can clear the enterd data
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }

    // const dateChangeHandler=(event)=>{
    //     setUserInput((prevState)=>{
    //         return {...prevState,EnteredDate:event.target.value};})
    // }
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();//prevent reload page;
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(entereddate)
        };
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);//sending data to the new expense and in new expense we add the pointer to it and send to app.js
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    //we can we submit handler near the bottom near submit button but we can use near form 
    
    return(<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__controls">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__controls">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={entereddate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add expense</button>
        </div>
    </form>
    )
}
export default ExpenseForm;