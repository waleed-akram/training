export default function EditList({
  setEditListVisibility,
  editListVisibility,
  listTobeEdited,
  setListTobeEdited,
  existingLists,
  setExistingLists,
}) {
  function addTaskEdit(e) {
    e.preventDefault();
    console.log("Adding Task!");
    const updatedTasks = [...listTobeEdited.tasks];
    updatedTasks.push({ task: "", completed: false });
    setListTobeEdited((prev) => ({
      ...prev,
      tasks: updatedTasks,
    }));
    console.log("Task Added!");
  }

  function removeTask(e, index) {
    e.preventDefault();
    console.log("Removing Task!");
    const updatedTasks = [...listTobeEdited.tasks];
    updatedTasks.splice(index, 1);
    setListTobeEdited((prev) => ({
      ...prev,
      tasks: updatedTasks,
    }));
  }

  function cancelEdit(e) {
    e.preventDefault();
    setEditListVisibility(false);
    setListTobeEdited({});
  }

  function changeTask(e, index) {
    const updatedTasks = [...listTobeEdited.tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      task: e.target.value,
    };

    setListTobeEdited((prev) => ({
      ...prev,
      tasks: updatedTasks,
    }));

    console.log("Task changed!");
  }

  function changeTitle(e) {
    e.preventDefault();
    setListTobeEdited((prev) => ({
      ...prev,
      title: e.target.value,
    }));
    console.log("Title changed!");
  }

  function confirmChange(e) {
    e.preventDefault();
    const index = existingLists.findIndex(
      (list) => list.id === listTobeEdited.id
    );
    const updatedLists = [...existingLists];
    updatedLists[index] = listTobeEdited;
    localStorage.setItem("lists", JSON.stringify(updatedLists));
    setExistingLists(updatedLists);
    setEditListVisibility(false);
    setListTobeEdited({});
  }

  function handleCheck(e, index) {
    e.preventDefault();
    const newTasks = [...listTobeEdited.tasks];
    newTasks[index].completed = !newTasks[index].completed;

    setListTobeEdited((prev) => ({
      ...prev,
      tasks: newTasks,
    }));
  }

  return (
    <>
      {editListVisibility && (
        <div className="list">
          <hr />
          <h2>Title</h2>
          <input
            type="text"
            value={listTobeEdited.title}
            onChange={changeTitle}
          />
          <p>
            {listTobeEdited.date} {listTobeEdited.time}
          </p>
          <h3>Tasks</h3>
          <ol>
            {Array.isArray(listTobeEdited.tasks) &&
              listTobeEdited.tasks.map((task, index) => (
                <div key={index} className="task">
                  <li key={index}>
                    <input
                      style={{
                        textDecoration: task.completed
                          ? "line-through"
                          : "none",
                      }}
                      type="text"
                      onChange={(e) => changeTask(e, index)}
                      value={task.task}
                    />
                  </li>
                  {/* <input
                  type="checkbox"
                  value={task.completed}
                  // checked={task.completed}
                  onClick={(e)=>handleCheck(e,index)}
                /> */}
                  <button className="btn-yes" type="button" onClick={(e) => handleCheck(e, index)}>
                    Check Task
                  </button>
                  <button className="btn-no" type="button" onClick={(e) => removeTask(e, index)}>
                    Remove task
                  </button>
                  <br />
                </div>
              ))}
          </ol>
          <br />
          <button className="btn-yes" type="button" onClick={addTaskEdit}>
            Add Task
          </button>
          <br />
          <button className="btn-no" type="button" onClick={cancelEdit}>
            Cancel
          </button>
          <button className="btn-yes" type="button" onClick={confirmChange}>
            Confirm
          </button>
        </div>
      )}
    </>
  );
}

/*-----------------------------------------------------------------------*/

// export function changeTask(e, list, index) {
//   e.preventDefault();
//   // console.log(list);
//   const editedTask = e.target.value;
//   const newList = {...list};
//   // console.log(newList);
//   newList.tasks[index] = { task: editedTask, completed: false };
//   console.log(newList);
//   setListTobeEdited((prev) => ({
//     ...prev,
//     tasks: newList,
//   }));
//   console.log(listTobeEdited);
// }

// export function handleCheck(e, list, index) {
//   e.preventDefault();
//   const checkedTask = list.tasks[index];
//   console.log(checkedTask);
//   const newTasks = [...listTobeEdited.tasks];
//   newTasks[index].completed = !checkedTask.completed;
//   setListTobeEdited((prev) => ({
//     ...prev,
//     tasks: newTasks,
//   }));
// }
