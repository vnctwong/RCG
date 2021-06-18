import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>day month year</div>
      <div className="expense-item_description">
        <h2>Car insurance</h2>
        <div className="expense-item__price">$xx.xx</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
