import LimitSelector from "../components/LimitSelector";
import FilterInput from "../components/FilterInput";
import SortSelector from "../components/SortSelector";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

const HomePage = ({
  coins,
  filter,
  setFilter,
  limit,
  setlimit,
  sortBy,
  setSortBy,
  loading,
  error,
}) => {
  const filteredCoins = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(filter.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div>
      <h1>CRYPTO DASHBOARD</h1>
      {loading && <Spinner color="white" />}

      <div className="top-controls">
        <FilterInput filter={filter} onFilterChange={setFilter} />
        <SortSelector sortBy={sortBy} onSortByChange={setSortBy} />
        <LimitSelector limit={limit} setlimit={setlimit} />
      </div>

      {error && <p className="error">{error}</p>}
      {!loading && !error && <Card data={filteredCoins} />}
    </div>
  );
};

export default HomePage;
