import style from './Pagination.module.css';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    const pageNumbers = Array.from(Array(totalPages).keys()).map((num) => num + 1);
  
    return (
      <div className={style.pag}>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={currentPage === pageNumber ? "active" : ""}
            style={currentPage === pageNumber ? { fontWeight: "bolder", color: "rgb(1, 247, 255)" } : null}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;