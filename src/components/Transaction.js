import React from "react";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const amount = Math.abs(transaction.amount);
  const className = transaction.amount < 0 ? "minus" : "plus";

  return (
    <li className={className}>
      {transaction.text}
      <span>
        {sign}${amount}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};
