const Balance = ({ balance }) => {
  return (
    <div>
      <h1>Balance</h1>
      <div>
        {balance > 0 ? (
          <h2>${balance}</h2>
        ) : balance == 0 ? (
          <h2>$0.00</h2>
        ) : (
          <h2>-${-balance}</h2>
        )}
      </div>
    </div>
  );
};

export default Balance;
