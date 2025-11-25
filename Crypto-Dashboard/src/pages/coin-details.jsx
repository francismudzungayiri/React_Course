import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import Spinner from "../components/Spinner";

const API_COIN_URL = import.meta.env.VITE_API_COIN_URL;

const CoinDetailPage = () => {
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(`${API_COIN_URL}/${id}`);
        if (!response.ok) {
          throw new Error("FAILED TO FETCH COIN DATA");
        }
        const data = await response.json();
        console.log(data);
        setCoin(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCoinData();
  }, [id]);

  return (
    <div className="coin-details-container">
      <Link to="/">&#8592; Back to Home</Link>
      <h1 className="coin-details-title">
        {coin ? `${coin.name} (${coin.symbol})` : "Coin Details"}
      </h1>

      {loading && <Spinner />}
      {error && <div className="error">{error}</div>}
      {!loading && !error && (
        <>
          <img
            src={coin.image.large}
            alt={coin.name}
            className="coin-details-image"
          />
          <p>{coin.description.en.split(". ")[0] + ["."]}</p>
          <div className="coint-details-info"></div>
        </>
      )}
    </div>
  );
};
export default CoinDetailPage;
