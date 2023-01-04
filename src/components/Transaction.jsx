const Transaction = ({ text, amt }) => {
  return (
    <div>
      <p>
        {text}: {amt}
      </p>
    </div>
  );
};

export default Transaction;
