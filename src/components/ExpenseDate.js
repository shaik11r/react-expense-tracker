function ExpenseDate(props){
    const mate=props.date.toDateString();
return (
<div>
  <div>{mate}</div>
</div>
);
}

export default ExpenseDate;