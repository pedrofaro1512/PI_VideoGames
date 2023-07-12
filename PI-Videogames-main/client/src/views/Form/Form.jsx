import { useEffect, useState } from "react";
import axios from "axios";
import { getGenres, getPlatforms } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from './Form.module.css';
import image1 from '../Assets/01.jpg';
import image2 from '../Assets/02.jpg';
import image3 from '../Assets/03.jpg';
import image4 from '../Assets/04.jpg';
import image5 from '../Assets/05.jpg';
import image6 from '../Assets/06.jpg';
import image7 from '../Assets/07.jpg';

const Form = () => {
  const dispatch = useDispatch();
  
  // Estados locales
  const genres = useSelector(state => state.genres);
  const platforms = useSelector(state => state.platforms);

  useEffect(() => {
    dispatch(getGenres())
    dispatch(getPlatforms())
  },[dispatch])

  // Estados locales
  const initialState = {
    name:"",
    image:"",
    description:"",
    platforms:[],
    released:"",
    rating:"",
    genres:[],
  };

  const initialErrors = {
    name:" * Required name",
    image:" * Required image",
    description:" * Required description",
    platforms:" * Required platforms",
    released:" * Required released ",
    rating:" * Required rating",
    genres:" * Required genres"
  };

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);

  // Disable boton submit
  const disable = () => {
    let disabled = true;
    for (let error in errors) {
      if (errors[error] === "") disabled = false;
      else {
        disabled = true;
        break;
      }
    }
    return disabled;
  }

  // Validaciones
  const validate = (input, name) => {
    if (name==="name") {
      if(input.name !== "") setErrors({ ...errors, name:""})
      else setErrors({ ...errors, name:" The name must have at least one character"})
      return;
    }
    if (name==="image") {
      if(input.image !== "") setErrors({ ...errors, image:""})
      else setErrors({ ...errors, image:" You must upload an URL image"})
      return;
    }
    if (name==="description") {
      if(input.description !== "") setErrors({ ...errors, description:""})
      else setErrors({ ...errors, description:" You must write a description"})
      return;
    }
    if (name === "platforms") {
      if (input.platforms.length > 0) {
        setErrors({ ...errors, platforms: "" });
      } else {
        setErrors({ ...errors, platforms: " You must load at least one platform" });
      }
      return;
    }
    if (name==="released") {
      const regex = /^\d{4}-\d{2}-\d{2}$/
      if(input.released !== "") setErrors({ ...errors, released:""})
      else setErrors({ ...errors, released:" You must upload the launch date"})
      if(regex.test(input.released)) setErrors({ ...errors, released:""})
      else setErrors({ ...errors, released:" You must enter the date in YY-MM-DD format."})
      return;
    }
    if (name==="rating") {
      if(input.rating !== "") setErrors({ ...errors, rating:""})
      else setErrors({ ...errors, rating:" You must load a rating value"})
      if(input.rating < 0 || input.rating > 5) setErrors({ ...errors, rating:" You must enter a value from 0 to 5"})
      return;
    }
    if (name==="genres") {
      if(input.genres !== "") setErrors({ ...errors, genres:""})
      else setErrors({ ...errors, genres:" You must upload at least one gender"})
      return;
    }
  }

  const changeHandle = (event) => {
    const property = event.target.name
    const value = event.target.value

    setForm({ ...form, [property]:value})
    validate({ ...form, [property]:value}, property)
  };

  // Cargar imagen desde el pc
  // const handleDrop = (event) => {
  //   event.preventDefault();
  //   const file = event.dataTransfer.files[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     setForm({
  //       ...form,
  //       image: imageUrl
  //     });
  //   }
  // };

  // const handleDragOver = (event) => {
  //   event.preventDefault();
  // };

  //Handler para seleccionar generos
  
  const handleSelectGenre = (event) => {
    
    if(event.target.value !== "genres" && !form.genres.includes(event.target.value)) {
      setForm({
        ...form,
        genres: [ ...form.genres, event.target.value]
      })
      validate({ ...form, [event.target.name]:event.target.value}, event.target.name)
    }
  };
  const handleSelectPlatform = (event) => {
    const selectedPlatform = event.target.value;

  if (selectedPlatform && !form.platforms.includes(selectedPlatform)) {
    setForm({
      ...form,
      platforms: [...form.platforms, selectedPlatform]
    });
    validate({ ...form, platforms: [...form.platforms, selectedPlatform] }, "platforms");
    }
  };

  // Submit para crear video juego
  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/videogames", form);
      alert("Successfully created video game");
      resetForm(initialState);
    } catch (error) {
      alert("The name of the game already exists");
    }

    // axios.post("http://localhost:3001/videogames",data)
    // .then(res=>{alert("Successfully created video game");
    // resetForm(initialState);
    // })
    // .catch(err=>alert(err))
  };

  const resetForm = (initialState) => {
    setForm(initialState);
    setErrors(initialErrors);
  };

  // Formulario
  return (
  <div>
    <div className={style.containerForm}>
      <form onSubmit={submitHandler} className={style.form}>
        <div>
          <label htmlFor="name">Name: </label>
          <input 
          type="text"
          id="name"
          value={form.name}
          name="name"
          onChange={changeHandle}/>
          {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
            <label htmlFor="image">Image: </label>
            <input
            placeholder="URL"
            id="image"
            type="text"
            value={form.image}
            name="image"
            onChange={changeHandle}/>
            {errors.image && <span>{errors.image}</span>}
        </div>

        <div>
          <label htmlFor="description">Description: </label>
          <input 
          type="text"
          id="description"
          value={form.description}
          name="description"
          onChange={changeHandle}/>
          {errors.description && <span>{errors.description}</span>}
        </div>

        <div>
          <label>Platforms: </label>
          <select name="Platforms" onChange={handleSelectPlatform}>
            <option value="Platforms"></option>
            {platforms?.map((platform, i) => {return(<option key={i}>{platform.name}</option>)})}
          </select>
          {errors.platforms && <span>{errors.platforms}</span>}
        </div>

        <div>
          <label htmlFor="released">Released: </label>
          <input 
          type="text"
          id="released"
          value={form.released}
          name="released"
          onChange={changeHandle}/>
          {errors.released && <span>{errors.released}</span>}
        </div>

        <div>
          <label htmlFor="rating">Rating: </label>
          <input 
          type="text"
          id="raiting"
          value={form.rating}
          name="rating"
          onChange={changeHandle}/>
          {errors.rating && <span>{errors.rating}</span>}
        </div>

        <div>
          <label>Genres: </label>
          <select name="genres" onChange={handleSelectGenre}>
            <option value="genres"></option>
            {genres?.map((genre, i) => {return(<option key={i}>{genre.name}</option>)})}
          </select>
          {errors.genres && <span>{errors.genres}</span>}
        </div>

        <button className={style.submitBtn} disabled={disable()} type="submit">SUBMIT</button>
      </form>
    </div>

    <div className={style.galery}>
      <div style={{ backgroundImage: `url(${image1})` }}></div>
      <div style={{ backgroundImage: `url(${image2})` }}></div>
      <div style={{ backgroundImage: `url(${image3})` }}></div>
      <div style={{ backgroundImage: `url(${image4})` }}></div>
      <div style={{ backgroundImage: `url(${image5})` }}></div>
      <div style={{ backgroundImage: `url(${image6})` }}></div>
      <div style={{ backgroundImage: `url(${image7})` }}></div>
    </div>
</div>
  )
}

export default Form;
