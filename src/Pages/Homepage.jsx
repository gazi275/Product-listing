

import FilterPanel from '../Components/FilterPanel';
import SortPanel from '../Components/SortPanel';
import ProductLists from '../Components/ProductLists';
import Pagination from '../Components/Pagination';

import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { FaTh, FaBars } from 'react-icons/fa';
import { SearchContext } from '../Hook/SearchContext';


const Homepage = () => {
  const {SearchTerm}=useContext(SearchContext)
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const [category, setCategory] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6); // Number of products per page
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [inStock, setInStock] = useState(false);
  const [view, setView] = useState('grid'); // State to manage view (grid or list)

  // Fetch products from API
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('API Error:', error));
  }, []);
  console.log(products);

  // Filter and sort products based on search, category, and sort options
  useEffect(() => {
    let updatedProducts = [...products]; // Clone the products array to avoid mutating state directly

    //Search
    if (SearchTerm) {
      updatedProducts=updatedProducts.filter(product=>
        typeof SearchTerm=== 'string'&&
        product.title.toLowerCase().includes(SearchTerm.toLowerCase())
      )
    }

    // Category Filter
    if (category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }

    // Price Range Filter
    updatedProducts = updatedProducts.filter(
      (product) =>
        product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Apply Availability Filter
    if (inStock) {
      updatedProducts = updatedProducts.filter(
        (product) => product.rating.count > 0
      );
    }

    // Sorting
    if (sortOption) {
      if (sortOption === 'price-asc') {
        updatedProducts.sort((a, b) => a.price - b.price);
      } else if (sortOption === 'price-desc') {
        updatedProducts.sort((a, b) => b.price - a.price);
      } else if (sortOption === 'name-asc') {
        updatedProducts.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortOption === 'name-desc') {
        updatedProducts.sort((a, b) => b.title.localeCompare(a.title));
      } else if (sortOption === 'rating-asc') {
        updatedProducts.sort((a, b) => a.rating.rate - b.rating.rate);
      } else if (sortOption === 'rating-desc') {
        updatedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
      }
    }

    setFilteredProducts(updatedProducts);
  }, [SearchTerm, category, sortOption, products, priceRange, inStock]);

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  console.log(filteredProducts);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
     
    
      <div className="flex flex-col justify-center items-center md:gap-14 lg:gap-20 md:flex-row my-4 ">
  

  
  {/* Showing Products and View Toggle */}
  <div className="flex justify-between flex-wrap gap-4 my-2 sm:gap-10 md:justify-between items-center md:w-3/4">
    {/* Product Count */}
    <div className="">
      <p className='text-lg font-semibold dark:text-white'>Showing {filteredProducts.length} Products</p>
    </div>

    {/* View Toggle Buttons */}
    <div className="">
      <button
        onClick={() => setView('grid')}
        className={`mr-2 p-2 rounded-lg ${
          view === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
        }`}
      >
        <FaTh />
      </button>
      <button
        onClick={() => setView('list')}
        className={`p-2 rounded-lg ${
          view === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
        }`}
      >
        <FaBars />
      </button>
    </div>
  </div>
</div>

      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col items-center md:w-1/4 mr-2 mb-3 ">
          <FilterPanel 
            setCategory={setCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            setInStock={setInStock}
          />
          <SortPanel  setSortOption={setSortOption} />
        </div>
        <ProductLists products={currentProducts} view={view} />
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Homepage;