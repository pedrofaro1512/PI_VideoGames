import { NavLink } from 'react-router-dom';
import style from "./Landing.module.css";
import videoBackground from "./Video/Spacecraft_Sound.mp4"

const Landing = () => {
  
  return (
    <div className={style.landingContainer}>

    <div className={style.landing}>
      <video className={style.videoBackground} autoPlay loop>
        <source src={videoBackground} type="video/mp4" />
      </video>
    </div>

    <div>
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
    </div>

    <div className={style.btn}>
      <NavLink to="/home" className={style.playButton}>
        <span className={style.playIcon}></span>
      </NavLink>
    </div>

    </div>
  )
}

export default Landing;
