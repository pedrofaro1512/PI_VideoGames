import { useState } from "react";
import axios from "axios";

const Form = () => {

  const [form, setForm] = useState({
    name:"",
    image:"",
    description:"",
    platforms:"",
    released:"",
    rating:"",
    genres:""
  });

  const [errors, setErrors] = useState({
    name:" * Required name",
    image:" * Required image",
    description:" * Required description",
    platforms:" * Required platforms",
    released:" * Required released ",
    rating:" * Required rating",
    genres:" * Required genres"
  });

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

  const validate = (input, name) => {
    if (name==="name") {
      if(input.name !== "") setErrors({ ...errors, name:""})
      else setErrors({ ...errors, name:" El nombre debe tener al menos un caracter"})
      return;
    }
    if (name==="image") {
      if(input.image !== "") setErrors({ ...errors, image:""})
      else setErrors({ ...errors, image:" Debe cargar una imagen"})
      return;
    }
    if (name==="description") {
      if(input.description !== "") setErrors({ ...errors, description:""})
      else setErrors({ ...errors, description:" Debe escribir una descripción"})
      return;
    }
    if (name==="platforms") {
      if(input.platforms !== "") setErrors({ ...errors, platforms:""})
      else setErrors({ ...errors, platforms:" Debe cargar al menos una plataforma"})
      return;
    }
    if (name==="released") {
      const regex = /^\d{4}-\d{2}-\d{2}$/
      if(input.released !== "") setErrors({ ...errors, released:""})
      else setErrors({ ...errors, released:" Debe cargar la fecha de lanzamiento"})
      if(regex.test(input.released)) setErrors({ ...errors, released:""})
      else setErrors({ ...errors, released:" Debe ingresar la fecha en formato AA-MM-DD"})
      return;
    }
    if (name==="rating") {
      if(input.rating !== "") setErrors({ ...errors, rating:""})
      else setErrors({ ...errors, rating:" Debe cargar un valor de clasificación"})
      if(input.rating < 0 || input.rating > 5) setErrors({ ...errors, rating:" Debe ingresar un valor de 0 a 5"})
      return;
    }
    if (name==="genres") {
      if(input.genres !== "") setErrors({ ...errors, genres:""})
      else setErrors({ ...errors, genres:" Debe cargar al menos un genero"})
      return;
    }
  }

  const changeHandle = (event) => {
    const property = event.target.name
    const value = event.target.value

    setForm({ ...form, [property]:value})
    validate({ ...form, [property]:value},property)
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const platformsArray = form.platforms.split(",").map((platform) => platform.trim());

    const data = { ...form, platforms: platformsArray};

    axios.post("http://localhost:3001/videogames",data)
    .then(res=>alert("Video juego creado con exito"))
    .catch(err=>alert(err))
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        {console.log(form)}
        <div>
          <label>Name: </label>
          <input 
          type="text"
          value={form.name}
          name="name"
          onChange={changeHandle}/>
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Image: </label>
          <input 
          type="text"
          value={form.image}
          name="image"
          onChange={changeHandle}/>
          {errors.image && <span>{errors.image}</span>}
        </div>
        <div>
          <label>Description: </label>
          <input 
          type="text"
          value={form.description}
          name="description"
          onChange={changeHandle}/>
          {errors.description && <span>{errors.description}</span>}
        </div>
        <div>
          <label>Platforms: </label>
          <input 
          type="text"
          value={form.platforms}
          name="platforms"
          onChange={changeHandle}/>
          {errors.platforms && <span>{errors.platforms}</span>}
        </div>
        <div>
          <label>Released: </label>
          <input 
          type="text"
          value={form.released}
          name="released"
          onChange={changeHandle}/>
          {errors.released && <span>{errors.released}</span>}
        </div>
        <div>
          <label>Rating: </label>
          <input 
          type="text"
          value={form.rating}
          name="rating"
          onChange={changeHandle}/>
          {errors.rating && <span>{errors.rating}</span>}
        </div>
        <div>
          <label>Genres: </label>
          <input 
          type="text"
          value={form.genres}
          name="genres"
          onChange={changeHandle}/>
          {errors.genres && <span>{errors.genres}</span>}
        </div>
        <button disabled={disable()} type="submit">SUBMIT</button>
      </form>
    </div>
  )
}

export default Form;