import { useEffect, useState } from "react";
import EditView from "./editList.jsx";
import * as z from "zod";
import "./page.css";

export default function Page() {
  const [existingLists, setExistingLists] = useState([]);

  useEffect(() => {
    const savedLists = localStorage.getItem("lists");
    if (savedLists) {
      setExistingLists(JSON.parse(savedLists));
      // existingLists
    } else {
      console.log("No data in localstorage");
    }
  }, []);

  const formSchema = z.object({
    id: z.number(),
    title: z
      .string()
      .max(12, "Title cannot be more than 12 Characters!")
      .nonempty("Title is required!"),
    tasks: z
      .array(
        z.object({
          task: z.string().nonempty("Task body cannot be empty!"),
          completed: z.boolean().default(false),
        })
      )
      .min(1, "Tasks cannot be empty!"),
  });
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([
    {
      task: "",
      completed: false,
    },
  ]);
  const [tasksVisibility, setTasksVisibility] = useState(false);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [formVisibility, setFormVisibility] = useState(false);
  const [titleError, setTitleError] = useState("");
  const [tasksError, setTasksError] = useState("");
  const [firstbtn, setFirstBtn] = useState(true);
  const [editListVisibility, setEditListVisibility] = useState(false);
  const [listTobeEdited, setListTobeEdited] = useState({
    id: 0,
    title: "",
    tasks: [],
    date: "",
    time: "",
  });

  function handleChange(e, index) {
    if (e.target.name === "title") {
      // console.log(e.target.value);
      setTitle(e.target.value);
      // console.log(title)
    } else if (e.target.name === "task") {
      // console.log(task);
      const newTasks = [...tasks];
      newTasks[index] = { task: e.target.value, completed: false };
      setTasks(newTasks);
    } else {
      console.log("Some error occurred");
    }
  }

  function addFirstTask(e) {
    e.preventDefault();
    setTasksVisibility(true);
    setFirstBtn(false);
    // setTasksVisibility(true)
  }

  function addTask(e) {
    e.preventDefault();
    console.log("Adding Task!");
    setTasks([...tasks, { task: "", completed: false }]);
  }

  function handleAddNewList(e) {
    e.preventDefault();
    setFormVisibility(true);

    let getTime = () => {
      const currentTime = new Date(Date.now());
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const ampm = hours > 12 ? "pm" : "am";
      const formattedHours = hours % 12;
      const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
      return `${formattedHours}:${formattedMinutes}${ampm} `;
    };

    let getDate = () => {
      const currentDate = new Date(Date.now());
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      const formattedDay = day < 10 ? "0" + day : day;
      const formattedMonth = month < 10 ? "0" + month : month;
      return `${formattedDay}/${formattedMonth}/${year}`;
    };

    setDate(getDate());
    setTime(getTime());
  }

  function validate() {
    const result = formSchema.safeParse({ id, title, tasks });
    if (result.success) {
      console.log("Validation Successful!");
      return true;
    } else {
      const errors = result.error.format();
      // console.log(errors);
      setTitleError(errors.title?._errors[0]);
      if (errors.tasks) {
        setTasksError("No Task can be empty!");
      }
      return false;
    }
  }

  function cancelAdd(e) {
    e.preventDefault();
    setTitle("");
    setTasks([""]);
    setTitleError("");
    setTasksError("");
    setTasksVisibility(false);
    setFormVisibility(false);
    setFirstBtn(true);
    setDate(null);
    setTime(null);

    console.log("cancel");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("confirm");
    setId(existingLists.length + 1);
    const isValid = validate();
    if (isValid) {
      setTitleError("");
      setTasksError("");
      const newList = {
        id: id,
        title: title,
        tasks: tasks,
        date: date,
        time: time,
      };
      const lists = [...existingLists, newList];
      localStorage.setItem("lists", JSON.stringify(lists));
      setTitle("");
      setTasks([""]);
      setTitleError("");
      setTasksError("");
      setTasksVisibility(false);
      setFormVisibility(false);
      setFirstBtn(true);
      setDate(null);
      setTime(null);
      console.log("Submission Successful!");
    } else {
      console.log("Submission not successful!");
    }
  }

  function editList(e, index) {
    e.preventDefault();
    console.log("edit list");
    setEditListVisibility(true);
    // console.log(existingLists[index]);
    setListTobeEdited({ ...existingLists[index] });
    // console.log(listTobeEdited);
  }

  function deleteList(e, index) {
    e.preventDefault();
    console.log(index);
    const updatedLists = existingLists.filter(
      (item, indexToCompare) => indexToCompare !== index
    );
    console.log(updatedLists);
    localStorage.setItem("lists", JSON.stringify(updatedLists));
    setExistingLists(updatedLists);
    console.log("delete list");
  }

  return (
    <div className="page-container">
      <h1>To-Do List</h1>
      <EditView tasksVisibility={tasksVisibility} setEditListVisibility={setEditListVisibility} editListVisibility={editListVisibility} listTobeEdited={listTobeEdited} existingLists={existingLists} setListTobeEdited={setListTobeEdited} setExistingLists={setExistingLists}/>
      {/* <EditView tasksVisibility setEditListVisibility editListVisibility listTobeEdited setListTobeEdited /> */}
      {existingLists.length > 0 ? (
        <div className="existingLists">
          <hr />
          <p>My Lists</p>
          {existingLists.map((list, index) => (
            <div key={index} className="list">
              <hr />
              <h2>{list.title}</h2>
              <p>
                {list.date} {list.time}
              </p>
              <ol>
                {Array.isArray(list.tasks) &&
                  list.tasks.map((task, index) => (
                    <li
                      key={index}
                      style={{
                        textDecoration: task.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {task.task}
                    </li>
                  ))}
              </ol>
              <button type="button" onClick={(e) => editList(e, index)}>
                Edit list
              </button>
              <button type="button" onClick={(e) => deleteList(e, index)}>
                Delete list
              </button>
            </div>
          ))}
          <hr />
          <button onClick={handleAddNewList}>Add list</button>
        </div>
      ) : (
        <div className="new">
          <span>Press the + button below to add a new List !</span>
          <br />
          <button onClick={handleAddNewList}>+</button>
        </div>
      )}
      <div>
        {formVisibility && (
          <div className="form-container">
            <form>
              <div>
                {titleError && <span className="error">{titleError}</span>}
                <br />
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  placeholder="Enter title"
                />
                <br />
              </div>
              {firstbtn && (
                <button type="button" onClick={addFirstTask}>
                  Add Task
                </button>
              )}
              <br />
              {tasksError && <span className="error">{tasksError}</span>}
              <br />
              {tasksVisibility &&
                tasks.map((task, index) => (
                  <div key={index}>
                    <label>Task</label>
                    <input
                      type="text"
                      name="task"
                      value={task.task}
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Enter tasks"
                    />
                  </div>
                ))}
              <br />
              {tasksVisibility && (
                <button type="button" onClick={addTask}>
                  Add Task
                </button>
              )}
              <br />
              <button type="cancel" onClick={cancelAdd}>
                Cancel
              </button>
              <button type="submit" onClick={handleSubmit}>
                Confirm
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
