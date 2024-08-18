

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
      <h2 className="text-xl font-bold mb-4 dark:text-white">Filter by Categories</h2>
      <div className="mb-4">
      <button
  onClick={() => setCategory('')}
  className="my-1 w-10/12 h-12 bg-white rounded-md border border-transparent text-lg font-semibold text-dark shadow-1 hover:bg-gray-400 disabled:border-gray-300 disabled:bg-gray-300 disabled:text-dark-500 dark:bg-gray-200 dark:shadow-box-dark dark:hover:bg-dark-300"
>
  All
</button>
<button
  onClick={() => setCategory('electronics')}
  className="my-1 w-10/12 h-12 bg-white rounded-md border border-transparent text-lg font-semibold text-dark shadow-1 hover:bg-gray-400 disabled:border-gray-300 disabled:bg-gray-300 disabled:text-dark-500 dark:bg-gray-200 dark:shadow-box-dark dark:hover:bg-dark-300"
>
  Electronics
</button>
<button
  onClick={() => setCategory('jewelery')}
  className="my-1 w-10/12 h-12 bg-white rounded-md border border-transparent text-lg font-semibold text-dark shadow-1 hover:bg-gray-400 disabled:border-gray-300 disabled:bg-gray-300 disabled:text-dark-500 dark:bg-gray-200 dark:shadow-box-dark dark:hover:bg-dark-300"
>
  Jewelery
</button>
<button
  onClick={() => setCategory("men's clothing")}
  className="my-1 w-10/12 h-12 bg-white rounded-md border border-transparent text-lg font-semibold text-dark shadow-1 hover:bg-gray-400 disabled:border-gray-300 disabled:bg-gray-300 disabled:text-dark-500 dark:bg-gray-200 dark:shadow-box-dark dark:hover:bg-dark-300"
>
  Men's Clothing
</button>
<button
  onClick={() => setCategory("women's clothing")}
  className="my-1 w-10/12 h-12 bg-white rounded-md border border-transparent text-lg font-semibold text-dark shadow-1 hover:bg-gray-400 disabled:border-gray-300 disabled:bg-gray-300 disabled:text-dark-500 dark:bg-gray-200 dark:shadow-box-dark dark:hover:bg-dark-300"
>
  Women's Clothing
</button>
</div>

      <h2 className="text-xl font-bold mb-4 dark:text-white">Filter by Price</h2>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Min Price"
          value={priceRange.min === 0 ? '' : priceRange.min}
          onChange={handleMinPriceChange}
          className="w-10/12 p-2 mb-2 dark:bg-gray-200 border rounded dark:text-black"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={priceRange.max === Infinity ? '' : priceRange.max}
          onChange={handleMaxPriceChange}
          className="w-10/12 p-2 mb-4 border dark:bg-gray-200 rounded dark:text-black"
        />
      </div>

      <h2 className="text-xl font-bold mb-4 dark:text-white">Availability</h2>
      <div className="mb-4">
        <label className="flex items-center  dark:text-white">
          <input
            type="checkbox"
            onChange={(e) => setInStock(e.target.checked)}
            className="mr-2 dark:text-white"
          />
          In Stock
        </label>
      </div>
    </div>
  );
};

export default FilterPanel;
