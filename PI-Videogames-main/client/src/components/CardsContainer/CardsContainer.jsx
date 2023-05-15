import React from 'react';
import Card from '../Card/Card';
import style from "./CardsContainer.module.css";
import { useSelector } from 'react-redux';

const CardsContainer = () => {

  const videogames = useSelector(state=>state.videogames)
    
  return (
    <div className={style.container}>
        {videogames.map(game => {
            return <Card
                key={game.id}
                id={game.id}
                name={game.name}
                platforms={game.platforms}
                image={game.image}
                released={game.released}
                rating={game.rating}
                genres={game.genres}
                created={game.created}
            />
        })}      
    </div>
  )
}

export default CardsContainer;
	