import { useState } from "react";

const Form = ({ handleClick }) => {
  const [text, setText] = useState("");
  const [amt, setAmt] = useState("0.00");

  const handleOnClick = () => {
    handleClick(text, amt);
  };

  return (
    <div>
      <h1>Add New Transaction</h1>
      <form>
        <label>Transaction</label>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <label>Amount </label>
        <label>(expense: -amount)</label>
        <input value={amt} onChange={(e) => setAmt(e.target.value)}></input>
      </form>
      <button onClick={handleOnClick}>Add Transaction</button>
    </div>
  );
};

export default Form;
