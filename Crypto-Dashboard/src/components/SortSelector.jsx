const SortSelector = ({ sortBy, onSortByChange }) => {
  const orderOptions = [
    "market_cap_asc",
    "market_cap_desc",
    "trust_score_desc",
    "trust_score_asc",
    "volume_desc",
    "volume_asc",
    "base_target",
  ];

  return (
    <div className="controls">
      <label>Sort By:</label>
      <select
        value={sortBy}
        id="sort"
        onChange={(e) => {
          onSortByChange(e.target.value);
        }}
      >
        {orderOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortSelector;
