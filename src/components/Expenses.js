import React ,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter'
import Card from "./Card";
import ExpensesChart from "./NewExpenses/ExpensesChart";
function Expenses(props){
    const [filteredYear,setFilteredYear]=useState('2020');
    const filterChangeHandler=selectedyear=>{
        console.log('expenses.js');
        setFilteredYear(selectedyear);
    }
    const filteredExpenses=props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
    })
    return (
        
        <Card className="expenses"> 
        <ExpenseFilter 
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        {
        filteredExpenses.map(
        (expense)=><ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        >
        </ExpenseItem>)
        }


             {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
          >
          </ExpenseItem>
        
          <ExpenseItem
           title={props.items[1].title} 
           amount={props.items[1].amount} 
           date={props.items[1].date}
           >
          </ExpenseItem>
          <ExpenseItem
           title={props.items[2].title} 
           amount={props.items[2].amount} 
           date={props.items[2].date}
           >
          </ExpenseItem>
          <ExpenseItem
           title={props.items[3].title} 
           amount={props.items[3].amount} 
           date={props.items[3].date}
           >
          </ExpenseItem> */}
  
        </Card>
    );
}
export default Expenses;