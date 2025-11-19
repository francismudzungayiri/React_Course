const Card = ({ data }) => {
  return (
    <main className="grid">
      {data.length > 0 ? (
        data.map((coin) => {
          return (
            <div className="coin-card" id={coin.id}>
              <div className="coin-header">
                <img src={coin.image} alt={coin.name} className="coin-image" />
                <div>
                  <h2>({coin.symbol.toUpperCase()})</h2>
                  <p className="symbol">{coin.name} </p>
                </div>
              </div>
              <p>Price: ${coin.current_price.toLocaleString()}</p>
              <p
                className={
                  coin.price_change_percentage_24h >= 0
                    ? "positive"
                    : "negative"
                }
              >
                24h Change: {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
              <p style={{ color: "#E9E9E9" }}>
                Market Cap: ${coin.market_cap.toLocaleString()}
              </p>
            </div>
          );
        })
      ) : (
        <p style={{ color: "red" }}>No coins match your filter criteria.</p>
      )}
    </main>
  );
};

export default Card;
