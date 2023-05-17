const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    const pageNumbers = Array.from(Array(totalPages).keys()).map((num) => num + 1);
  
    return (
      <div>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={currentPage === pageNumber ? "active" : ""}
            style={currentPage === pageNumber ? { fontWeight: "bold", color: "red" } : null}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;