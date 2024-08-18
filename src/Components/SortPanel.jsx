

const SortPanel = ({ setSortOption }) => {
    return (
      <select
        onChange={(e) => setSortOption(e.target.value)}
        className="border p-2"
      >
        <option value="">Sort By</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A-Z</option>
        <option value="name-desc">Name: Z-A</option>
        <option value="rating-asc">Rating: Low to High</option>
        <option value="rating-desc">Rating: High to Low</option>
      </select>
    );
  };
  
  export default SortPanel;