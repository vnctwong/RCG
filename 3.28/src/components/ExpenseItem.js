import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2021, 6, 21)
  const expenseTitle = 'expense';
  const expenseAmount = '$xx.xx';

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item_description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
