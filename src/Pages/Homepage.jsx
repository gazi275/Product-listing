
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import FilterPanel from '../Components/FilterPanel';
import SortPanel from '../Components/SortPanel';
import ProductLists from '../Components/ProductLists';
import Pagination from '../Components/Pagination';
import ThemeToggle from '../Components/ThemeToggle';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6); // Number of products per page
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [inStock, setInStock] = useState(false);                           

  // Fetch products from API
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('API Error:', error));
  }, []);

  // Filter and sort products based on search, category, and sort options
  useEffect(() => {
    let updatedProducts = [...products]; // Clone the products array to avoid mutating state directly

    // Search Filter
    if (searchTerm) {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category Filter
    if (category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === category
      );
    }


    updatedProducts = updatedProducts.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    // Apply Availability Filter
    if (inStock) {
      updatedProducts = updatedProducts.filter(product => product.rating.count > 0);
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
  }, [searchTerm, category, sortOption, products, priceRange, inStock]);

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center">
        <Header />
        <ThemeToggle />
      </div>
      <div className="flex flex-col md:flex-row justify-between my-4">
        <SearchBar setSearchTerm={setSearchTerm} />
      </div>
      <div className="flex">
        <div className="w-1/4 mr-2">
          <FilterPanel 
             setCategory={setCategory}
             priceRange={priceRange}
             setPriceRange={setPriceRange}
             setInStock={setInStock}
          />
          <SortPanel setSortOption={setSortOption} />
        </div>
        <ProductLists products={currentProducts} />
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
