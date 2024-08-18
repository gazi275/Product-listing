import { useEffect, useState } from 'react';
import Header from '../Components/Header'
import axios from 'axios';
import ThemeToggle from './../Components/ThemeToggle';
import ProductLists from '../Components/ProductLists';
import SearchBar from '../Components/SearchBar'
import SortPanel from '../Components/SortPanel'

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [sortOption, setSortOption] = useState('');

    useEffect(()=>
        {axios.get('https://fakestoreapi.com/products')
    .then(response=>setProducts(response.data))
    .catch(error=>console.error('API Error:', error))
    },[])
    useEffect(() => {
      let updatedProducts = products;
  
      if (searchTerm) {
        updatedProducts = updatedProducts.filter(product =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
  
      if (category) {
        updatedProducts = updatedProducts.filter(product => product.category === category);
      }
  
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
    }, [searchTerm, category, sortOption, products]);

    console.log(products);
    return (
      <div className="container mx-auto p-4">
      <Header />
      <ThemeToggle />
      <div className="flex flex-col md:flex-row justify-between my-4">
        <SearchBar setSearchTerm={setSearchTerm} />
        <SortPanel setSortOption={setSortOption} />
      </div>
      <div className="flex">
        <FilterPanel setCategory={setCategory} />
        <ProductLists products={filteredProducts} />
      </div>
      
    </div>
    );
};

export default Homepage;