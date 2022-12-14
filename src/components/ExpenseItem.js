//how it is written in react;
//its just a javascript function;
//reuseablaity
//we can use parameters for dynamic
//insted of attribute we have props
//insted of all parameter we will get only one parameter;
import React,{useState} from 'react';
import './ExpenseItem.css';
import './ExpenseDate';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {
    // const expenseDate=new Date(2021,2,28);
    // const expenseTitle='Car Insurance';
    // const expenseAmount=294.67;
    //now we created code but how to use in following return function?
    //{}we can run javascript code;
    // const datex=props.date.toDateString();
    //regular vars doesnt trigger any revaluation
    //so we use state;
    const [title,setTitle]=useState(props.title);
    //inside a component function it also call a function cant use array destrucuting
    const clickHandler=()=>{
      setTitle('updated');//new value is assigned here sets props.title 
      //we need to use state if the variable gonna change in future
      //only that state is beging updated
      
      console.log(title);
    };
  return (
    <Card className="expense-item">
       <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}
//to use this component we have to export it
export default ExpenseItem;
