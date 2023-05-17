import { useDispatch, useSelector } from "react-redux";
import {
  orderGames,
  filterBySource,
  filterByRating,
  filterByGenre,
  reset
} from "../../redux/actions";

const Filters = () => {

    const dispatch = useDispatch();
    const genres = useSelector(state => state.genres)

    const handlerOrder = (event) => {
      const value = event.target.value;
      if (value !== '0') {
        dispatch(orderGames(value));
      } else {
        dispatch(reset());
      }
    };

    const handlerGenres = (event) => {
      const value = event.target.value;
      if (value !== '0') {
          dispatch(filterByGenre(value))
      }
    };

    const handlerFilterSource = (event) => {
      const value = event.target.value;
      if (value !== '0') {
        dispatch(filterBySource(value))
      }
    };

    const handlerFilterRating = (event) => {
      const value = event.target.value;
      if (value !== '0') {
        dispatch(filterByRating(event.target.value))
      } else {
        dispatch(reset());
      }
    };

  return (
    <div>

      <label htmlFor="">Ordenar por: </label>
        <select  onChange={handlerOrder}>
            <option defaultChecked value="0">Reset</option>
            <option value="A">A - Z</option>
            <option value="D">Z - A</option>
        </select>

      <label htmlFor="">Genero: </label>
        <select onChange={handlerGenres}>
          <option defaultChecked value="0">-</option>
          <option value="AllVideogames">All Videogames</option>
          {genres.map(genre => (
            <option key={genre.id} value={genre.name}>{genre.name}</option>
          ))}
      </select>

      <label htmlFor="">Source: </label>
        <select onChange={handlerFilterSource}>
            <option defaultChecked value="0">-</option>
            <option value="AllSource">All Videogames</option>
            <option value="false">API</option>
            <option value="true">Base de datos</option>
        </select>

        <label htmlFor="">Rating: </label>
        <select onChange={handlerFilterRating}>
            <option defaultChecked value="0">Reset</option>
            <option value="A">Menor a mayor</option>
            <option value="D">Mayor a menor</option>
        </select>

    </div>
  )
}

export default Filters;


