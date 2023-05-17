import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getByName, getVideogames, getGenres } from '../../redux/actions';
import Navbar from '../../components/Navbar/Navbar';
import Filters from '../../components/Filters/Filters';
import Pagination from '../../components/Pagination/Pagination';

const Home = () => {

  const dispatch = useDispatch();
  const videogames = useSelector(state=>state.videogames);

  const [ searchString, setSearchString ] = useState("");
  const [ currentPage, setCurrentPage ] = useState(1);
  const itemsPerPage = 15;

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

  const changeHandler = (event) => {
    setSearchString(event.target.value);
  };

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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const videoGamesToShow = videogames.slice(startIndex, endIndex);
  const totalPages = Math.ceil(videogames.length / itemsPerPage);

  return (
    <div>
      <Filters/>
      <br></br>
      <Navbar.SearchBar changeHandler={changeHandler} submitHandler={submitHandler} />
      <CardsContainer videoGames={videoGamesToShow} />

      <button onClick={goToPreviousPage}>Página anterior</button>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={handleChangePage}
      />
      <button onClick={goToNextPage}>Página siguiente</button>
      
    </div>
  )
}

export default Home;
