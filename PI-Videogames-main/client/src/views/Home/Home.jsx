import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getByName, getVideogames, getGenres } from '../../redux/actions';
import Navbar from '../../components/Navbar/Navbar';
import Filters from '../../components/Filters/Filters';
import Pagination from '../../components/Pagination/Pagination';
import style from './Home.module.css';

const Home = () => {

  const dispatch = useDispatch();
  const videogames = useSelector(state=>state.videogames);
  const [ searchString, setSearchString ] = useState("");
  const [ noResults, setNoResults ] = useState(false);
  
  // Paginación
  const [ currentPage, setCurrentPage ] = useState(1);
  const itemsPerPage = 15;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const videoGamesToShow = videogames.slice(startIndex, endIndex);
  const totalPages = Math.ceil(videogames.length / itemsPerPage);

  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const goToNextPage = () => {
    const totalPages = Math.ceil(videogames.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handler de busqueda
  const changeHandler = (event) => {
    setSearchString(event.target.value);
  };

  // Submit
  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(getByName(searchString))
  };

  useEffect(() => {
    dispatch(getVideogames())
  },[dispatch])

  useEffect(() => {
    dispatch(getGenres())
  },[dispatch])

  useEffect(() => {
    setNoResults(false);
    if (videogames.length === 0 && searchString.trim() !=="") {
      setNoResults(true)
      alert('No se encontraron coincidencias.')
    }
  },[videogames, searchString]);

  return (
    <div className={style.containerHome}>
      <div>
        <Filters/>
      </div>

      <div>
        <Navbar.SearchBar changeHandler={changeHandler} submitHandler={submitHandler} />
      </div>
      <div className={style.paginado}>
        <button onClick={goToPreviousPage}>&lt;&lt; Previous</button>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={handleChangePage}
        />
        <button onClick={goToNextPage}>Next &gt;&gt;</button>
      </div>

      <div>
      <CardsContainer videoGames={videoGamesToShow} />
        
      </div>
    </div>
  )
}

export default Home;
