import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getByName, getVideogames } from '../../redux/actions';
import Navbar from '../../components/Navbar/Navbar';
import Filters from '../../components/Filters/Filters';

const Home = () => {

  const dispatch = useDispatch();
  const videogames = useSelector(state=>state.videogames);

  const [ searchString, setSearchString ] = useState("");

  const changeHandler = (event) => {
    setSearchString(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(getByName(searchString))
  };

  useEffect(() => {
    dispatch(getVideogames());
  },[dispatch])

  return (
    <div>
      <Filters/>
      <br></br>
      <Navbar.SearchBar changeHandler={changeHandler} submitHandler={submitHandler} />
      <CardsContainer videogames={videogames} />
    </div>
  )
}

export default Home;
