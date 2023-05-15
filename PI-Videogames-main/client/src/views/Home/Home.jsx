import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getVideogames } from '../../redux/actions';

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  },[dispatch])

  return (
    <div>
      <CardsContainer />
    </div>
  )
}

export default Home;
