import React from 'react';
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

//Barra de navegación
const Navbar = () => {
  return (
    <div className={style.mainContainer}>
       
        <Link to="/"> <img src="https://panamericana.vtexassets.com/arquivos/ids/324597-800-auto?v=636946521362500000&width=800&height=auto&aspect=true" alt="control" /></Link>
        <Link to="/home" className={style.navLink}>HOME</Link>
        <Link to="/create" className={style.navLink}>FORM</Link>
      
    </div>
  )
};

// Barra de busqueda
const SearchBar = ({changeHandler, submitHandler}) => {
  return (
      <div className={style.buscarNombre}>
          <form onChange={changeHandler}>
              <input id="search" type="search" placeholder="Search in catalog" />
              <button type='submit' onClick={submitHandler}>Buscar</button>
          </form>
      </div>
  )
}; 

export default { Navbar, SearchBar };