import Transaction from "./Transaction";

const History = ({ transList }) => {
  return (
    <div>
      <h1>History</h1>
      <div>
        {transList.map((trans) => (
          <Transaction key={trans.id} text={trans.text} amt={trans.amt} />
        ))}
      </div>
    </div>
  );
};

export default History;
