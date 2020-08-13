import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  const amount = Math.abs(transaction.amount);
  const className = transaction.amount < 0 ? "minus" : "plus";

  return (
    <li className={className}>
      {transaction.text}
      <span>
        {sign}${amount}
      </span>
      <button
        onClick={() => {
          deleteTransaction(transaction.id);
        }}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
