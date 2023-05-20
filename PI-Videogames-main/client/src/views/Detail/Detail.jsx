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

            <div className={style.nameId}>
              <div>
                <h1>Name: {videogame.name}</h1>
              </div>
              <div>
                <h1>ID: {videogame.id}</h1>
              </div>
            </div>
            <hr></hr>
              <div className={style.img}>
                <img src={videogame.image} alt={videogame.name} />
              </div>
            <hr></hr>
            <div>
              <div>
                <h1>Platforms: {videogame.platforms.join(', ')}</h1>
                <h1>Genres: {videogame.genres.join(', ')}</h1>
              </div>
            </div>
            <hr></hr>
            <div className={style.description}>
              <h1>Description:</h1>
              <h2 dangerouslySetInnerHTML={{ __html: videogame.description }} />
            </div>
            <hr></hr>           
            <div>
              <div className={style.rr}>
                <h1>Released: {videogame.released}</h1>
                <h1>Rating: {videogame.rating}</h1>
              </div>
            </div>
            
          </div>
        </>
      ) : (
        <div className={style.dots}>
          <h1>Loading     </h1>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
        </div>
      )}
    </div>
  )
}

export default Detail;
