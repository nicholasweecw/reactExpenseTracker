import "./App.css";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import History from "./components/History";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [balance, setBalance] = useState(0.0);
  const [income, setIncome] = useState(0.0);
  const [expense, setExpense] = useState(0.0);
  const [transList, setTransList] = useState([]);

  useEffect(() => {});

  const handleClick = (text, strAmt) => {
    const amt = parseFloat(strAmt);

    const newTrans = {
      id: nanoid(),
      text: text,
      amt: amt,
    };

    setTransList([...transList, newTrans]);

    if (amt > 0) {
      setIncome(income + amt);
      setBalance(parseFloat((balance + amt).toFixed(2)));
    } else if (amt < 0) {
      setExpense(expense - amt);
      setBalance(parseFloat((balance + amt).toFixed(2)));
    }
    if (typeof balance === "string" || balance instanceof String) {
      console.log("Str", balance);
    } else {
      console.log("Not str", balance);
    }
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Balance balance={balance} />
      <IncomeExpense income={income} expense={expense} />
      <History transList={transList} />
      <Form handleClick={handleClick} />
    </div>
  );
}

export default App;
