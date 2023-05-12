import React from 'react';
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={style.card}>
        <Link to={`/detail/${props.id}`}>
            <h1>Name: {props.name}</h1>
        </Link>
            <p>Image: {props.image}</p>
            {/* <p>Platforms: {props.platforms.join(', ')}</p> */}
            {/* <p>Released: {props.released}</p>
            <p>Rating: {props.rating}</p> */}
            <p>Genres: {props.genres.join(', ')}</p>
            {/* <p>Created: {props.created}</p> */}
    </div>
  )
}

export default Card;