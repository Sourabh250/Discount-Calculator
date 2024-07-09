import React, { useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState('');
  const [discount, setDiscount] = useState('');
  const [discountedAmount, setDiscountedAmount] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(null);

  const calculateDiscount = () => {
    const amountValue = parseFloat(amount);
    const discountValue = parseFloat(discount);

    if (isNaN(amountValue) || isNaN(discountValue)) {
      alert('Please enter valid numbers for amount and discount.');
      return;
    }

    const discountAmount = (amountValue * discountValue) / 100;
    const discountedAmount = amountValue - discountAmount;

    setDiscountAmount(discountAmount.toFixed(2));
    setDiscountedAmount(discountedAmount.toFixed(2));
  };

  const clearResults = () => {
    setAmount('');
    setDiscount('');
    setDiscountAmount(null);
    setDiscountedAmount(null);
  };

  return (
    <div className="calculator">
      <h1>Discount Calculator</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Amount (Rs)"
      />
      <input
        type="number"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        placeholder="Enter Discount (%)"
      />
      <button onClick={calculateDiscount}>Calculate</button>
      <button onClick={clearResults} className="clear-button">Clear</button>
      <div className="results">
        <p>{discountedAmount !== null ? `Amount after Discount: Rs ${discountedAmount}` : ' '}</p>
        <p>{discountAmount !== null ? `Discount: Rs ${discountAmount}` : ' '}</p>
      </div>
    </div>
  );
}

export default App;