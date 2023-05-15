import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { cleanDetail, getVideogameDetail } from '../../redux/actions';
import style from "./Detail.module.css";

const Detail = () => {

  const dispatch = useDispatch();
  const videogame = useSelector(state => state.videogameDetail)

  const { id } = useParams();

  useEffect(() => {
    dispatch(getVideogameDetail(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  return (
    <div>
      {videogame.name ? (
        <>
          <div className={style.containerDetail}>
            <h1>Name:</h1>
            <h2>{videogame.name}</h2>
            <h1>ID:</h1>
            <h2>{videogame.id}</h2>
            <img src={videogame.image} alt={videogame.name} />
            <h1>Platforms:</h1>
            <h2>{videogame.platforms.join(', ')}</h2>
            <h1>Description:</h1>
            <h2 dangerouslySetInnerHTML={{ __html: videogame.description }} />
            <h1>Released:</h1>
            <h2>{videogame.released}</h2>
            <h1>Rating:</h1>
            <h2>{videogame.rating}</h2>
            <h1>Genres:</h1>
            <h2>{videogame.genres.join(', ')}</h2>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Detail;
