import { useDispatch } from "react-redux";
import {
  filterGenres,
  orderGames,
  filterBySource,
  filterByRating,
  reset
} from "../../redux/actions";

const Filters = () => {

    const dispatch = useDispatch();

    const handlerOrder = (event) => {
      const value = event.target.value;
      if (value !== '0') {
        dispatch(orderGames(value));
      } else {
        dispatch(reset());
      }
    };

    const handlerFilter = (event) => {
      const value = event.target.value;
      if (value !== '0') {
        dispatch(filterGenres(value))
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
        <select onChange={handlerOrder}>
            <option defaultChecked value="0">Reset</option>
            <option value="A">A - Z</option>
            <option value="D">Z - A</option>
        </select>

      <label htmlFor="">Genero: </label>
        <select onChange={handlerFilter}>
          <option defaultChecked value="0">-</option>
          <option value="AllVideogames">All Videogames</option>
          <option value="Action">Action</option>
          <option value="Indie">Indie</option>
          <option value="Adventure">Adventure</option>
          <option value="RPG">RPG</option>
          <option value="Strategy">Strategy</option>
          <option value="Shooter">Shooter</option>
          <option value="Casual">Casual</option>
          <option value="Simulation">Simulation</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Arcade">Arcade</option>
          <option value="Platformer">Platformer</option>
          <option value="Massively Multiplayer">Massively Multiplayer</option>
          <option value="Racing">Racing</option>
          <option value="Sports">Sports</option>
          <option value="Fighting">Fighting</option>
          <option value="Family">Family</option>
          <option value="Educational">Educational</option>
          <option value="Board Games">Board Games</option>
          <option value="Card">Card</option>
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
