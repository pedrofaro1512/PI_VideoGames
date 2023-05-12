import { NavLink } from 'react-router-dom';
import style from "./Landing.module.css"

const Landing = () => {
  
  return (
    <div className={style.landing}>
      <h1>MASTER GAMES</h1>

      <p>
      Bienvenido a MASTER GAMES, la plataforma en línea que te permite disfrutar de una amplia variedad de videojuegos y crear tus propios juegos personalizados. Nuestro sitio web presenta información detallada sobre los juegos, incluyendo el nombre del juego, una imagen, una descripción y el género, lo que te ayuda a encontrar fácilmente los juegos que se adapten a tus gustos y preferencias.
      </p>

      <p>
      ¿Buscas un juego de aventuras? ¿O prefieres un juego de estrategia? Con nuestro sistema de búsqueda y filtrado, puedes encontrar rápidamente los juegos que te interesan. Pero eso no es todo, también puedes crear tus propios juegos utilizando nuestras características personalizables, lo que te permite disfrutar de una experiencia de juego única y a medida.
      </p>

      <p>
      Además, nuestro sitio web está diseñado para ser intuitivo y fácil de usar, lo que te permite navegar por los juegos y las características de forma rápida y sencilla. Ya seas un jugador experimentado o un principiante, nuestra plataforma es perfecta para ti.
      </p>

      <p>
      ¡Únete a MASTER GAMES hoy mismo y comienza a explorar y crear tus propios juegos personalizados!
      </p>


      <NavLink to="/home">
        <button className={style.btn}>Let's go play</button>
      </NavLink>
    </div>
  )
}

export default Landing;
