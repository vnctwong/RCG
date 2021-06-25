import './ExpenseItem.css';

function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-us', { month: 'long' });
  return (
    <div className="expense-item">
      <div>
        <div>{}</div>
        <div>{}</div>
        <div>{}</div>
      </div>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;