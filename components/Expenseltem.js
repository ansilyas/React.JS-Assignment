import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css";
// We Create a Component:
function ExpenseItem(props) {
 
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
// Know to use this component :
// Export Function:
export default ExpenseItem;
