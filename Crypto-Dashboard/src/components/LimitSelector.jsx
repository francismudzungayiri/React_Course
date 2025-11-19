const LimitSelector = ({ limit, setlimit }) => {
  return (
    <div className="controls">
      <label>Show:</label>
      <select
        value={limit}
        id="limit"
        onChange={(e) => {
          setlimit(Number(e.target.value));
        }}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};

export default LimitSelector;
