const SearchBar = ({ setSearchTerm }) => {
    return (
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 w-full md:w-1/3"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    );
  };
  
  export default SearchBar;