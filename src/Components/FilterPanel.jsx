

const FilterPanel = ({ setCategory, priceRange, setPriceRange, setInStock }) => {
  
  const handleMinPriceChange = (e) => {
    const minPrice = e.target.value === '' ? 0 : parseFloat(e.target.value);
    setPriceRange({ ...priceRange, min: minPrice });
  };

  const handleMaxPriceChange = (e) => {
    const maxPrice = e.target.value === '' ? Infinity : parseFloat(e.target.value);
    setPriceRange({ ...priceRange, max: maxPrice });
  };

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-bold mb-4">Filter by Categories</h2>
      <div className="mb-4">
        <button onClick={() => setCategory('')} className="block w-full text-left my-2 text-gray-600 hover:text-gray-900">All</button>
        <button onClick={() => setCategory('electronics')} className="block w-full text-left my-2 text-gray-600 hover:text-gray-900">Electronics</button>
        <button onClick={() => setCategory('jewelery')} className="block w-full text-left my-2 text-gray-600 hover:text-gray-900">Jewelery</button>
        <button onClick={() => setCategory("men's clothing")} className="block w-full text-left my-2 text-gray-600 hover:text-gray-900">Men's Clothing</button>
        <button onClick={() => setCategory("women's clothing")} className="block w-full text-left my-2 text-gray-600 hover:text-gray-900">Women's Clothing</button>
      </div>

      <h2 className="text-xl font-bold mb-4">Filter by Price</h2>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Min Price"
          value={priceRange.min === 0 ? '' : priceRange.min}
          onChange={handleMinPriceChange}
          className="w-10/12 p-2 mb-2 border rounded"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={priceRange.max === Infinity ? '' : priceRange.max}
          onChange={handleMaxPriceChange}
          className="w-10/12 p-2 mb-4 border rounded"
        />
      </div>

      <h2 className="text-xl font-bold mb-4">Availability</h2>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            onChange={(e) => setInStock(e.target.checked)}
            className="mr-2"
          />
          In Stock
        </label>
      </div>
    </div>
  );
};

export default FilterPanel;
