import { useState } from "react";

export default function AddList({
  existingLists,
  formVisibility,
  setFormVisibility,
  tasksVisibility,
  setTasksVisibility,
  date,
  setDate,
  time,
  setTime,
  titleError,
  setTitleError,
  tasksError,
  setTasksError,
  formSchema,
}) {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([
    {
      task: "",
      completed: false,
    },
  ]);
  const [firstbtn,setFirstBtn] = useState(true);

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

  return (
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
  );
}
