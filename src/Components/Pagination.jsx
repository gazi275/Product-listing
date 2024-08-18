

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center my-4">
      <ul className="flex list-none">
        <li className="mx-1">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 border ${currentPage === 1 ? 'bg-gray-200 text-gray-400' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="mx-1">
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 border ${currentPage === number ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="mx-1">
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
            className={`px-4 py-2 border ${currentPage === pageNumbers.length ? 'bg-gray-200 text-gray-400' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;