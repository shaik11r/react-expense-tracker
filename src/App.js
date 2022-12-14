import React,{useState} from "react";
import NewExpense from "./components/NewExpenses/NewExpense";
import Expenses from "./components/Expenses";
//import expense item from "./componets/expenseitem"
const IntialExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App=()=> {
  
  const [expenses,setExpenses]= useState(IntialExpenses);

const addExpenseHandler=(expense)=>{
  console.log(expense);
  setExpenses((prevExpense)=>{
    return [expense,...prevExpense];
  })
};
//here add expense is an function pointer
//sending data upwards to newexpense and form newexpense we will send to expressform.js
//when we submit the data we will add it using a onaddexpense andexpensehandler as a pointer
//to the function 
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
       <Expenses items={expenses}/>
       
    </div>
  );
}

export default App;
