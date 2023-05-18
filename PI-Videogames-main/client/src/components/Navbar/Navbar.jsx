import React from 'react';
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

//Barra de navegación
const Navbar = () => {
  return (
    <div className={style.mainContainer}>
       
        <Link to="/"> <img src="https://falabella.scene7.com/is/image/FalabellaCO/2970013_1?wid=800&hei=800&qlt=70" alt="control" /></Link>
        <Link to="/home">HOME</Link>
        <Link to="/create">FORM</Link>
      
    </div>
  )
};

// Barra de busqueda
const SearchBar = ({changeHandler, submitHandler}) => {
  return (
      <div className={style.buscarNombre}>
          <form onChange={changeHandler}>
              <input type="search" placeholder="Busqueda en catálogo" />
              <button type='submit' onClick={submitHandler}>Buscar</button>
          </form>
      </div>
  )
}; 

export default { Navbar, SearchBar };