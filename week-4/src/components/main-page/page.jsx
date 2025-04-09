import {useState} from 'react'
import * as z from 'zod'
import './page.css'

export default function Page() {

  const formSchema = z.object({
    title: z
      .string()
      .max(12, "Title cannot be more than 12 Characters!")
      .nonempty("Title is required!"),
    description: z
      .string()
      .nonempty("Description cannot be empty!")
  })

  const [title,
    setTitle] = useState([])
  const [description,
    setDescription] = useState([])
  const [date,
    setDate] = useState([])
  const [time,
    setTime] = useState([])
  const [formVisibility,
    setFormVisibility] = useState(false);
  const [titleError,
    setTitleError] = useState("");
  const [descriptionError,
    setDescriptionError] = useState("");
  function handleChange(e) {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else if (e.target.name === 'description') {
      setDescription(e.target.value);
    } else {
      console.log("Some error occurred")
    }
  }

  function handleAdd(e) {
    e.preventDefault();
    setFormVisibility(true);

    let getTime = () => {
      const currentTime = new Date(Date.now());
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const ampm = hours > 12
        ? 'pm'
        : 'am';
      const formattedHours = hours % 12;
      const formattedMinutes = minutes < 10
        ? '0' + minutes
        : minutes;
      return `${formattedHours}:${formattedMinutes}${ampm} `
    }
    let getDate = () => {
      const currentDate = new Date(Date.now());
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      const formattedDay = day < 10
        ? '0' + day
        : day;
      const formattedMonth = month < 10
        ? '0' + month
        : month;
      return `${formattedDay}/${formattedMonth}/${year}`;
    }

    setDate(getDate());
    setTime(getTime());

  }

  function validate() {

    const resultTitle = formSchema.safeParse(title);
    if (result.success) {
      setTitle(resultTitle.data);
      // console.log(title, description, date, time);
      console.log("Succes:", resultTitle.data);
    } else if (!result.success) {
      console.log("Error: " + resultTitle.error.format())
      return false
    }
    const resultDescription = formSchema.safeParse(description);
    if (resultDescription.success) {
      setTitle(resultDescription.data);
      // console.log(title, description, date, time);
      console.log("Succes:", resultDescription.data);
    } else if (!resultDescription.success) {
      console.log("Error: " + resultDescription.error.format())
      return false
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    validate();
    setFormVisibility(false);
  }
  return (
    <div className="page-container">
      <h1>To-Do List</h1>
      <span>To get started press the + sign below!</span><br/>
      <button onClick={handleAdd}>+</button>
      <div>{formVisibility && (
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="title">Ttile:</label>
              <p className='error-message'>{titleError}</p>
              <input type="text" id="title" name='title' onChange={handleChange}/><br/>
              <label htmlFor="description">Description:</label>
              <p className='error-message'>{descriptionError}</p>
              <input type="text" id="description" name='description' onChange={handleChange}/><br/><br/>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}</div>
    </div>
  )
}
