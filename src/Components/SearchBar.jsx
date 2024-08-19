const SearchBar = ({ setSearchTerm }) => {
    return (
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 w-full "
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    );
  };
  
  export default SearchBar;