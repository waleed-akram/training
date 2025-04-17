export function addTaskEdit(e){
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

export function removeTask(e, index) {
  e.preventDefault();
  console.log("Removing Task!");
  const updatedTasks = [...listTobeEdited.tasks];
  updatedTasks.splice(index, 1);
  setListTobeEdited((prev) => ({
    ...prev,
    tasks: updatedTasks,
  }));
}

export function cancelEdit(e) {
  e.preventDefault();
  setEditListVisibility(false);
  setListTobeEdited({});
}

export function changeTask(e, index) {
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

export function changeTitle(e) {
  e.preventDefault();
  setListTobeEdited((prev) => ({
    ...prev,
    title: e.target.value,
  }));
  console.log("Title changed!");
}

export function confirmChange(e) {
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

export function handleCheck(e, index) {
  e.preventDefault();
  const newTasks = [...listTobeEdited.tasks];
  newTasks[index].completed = !newTasks[index].completed;

  setListTobeEdited((prev) => ({
    ...prev,
    tasks: newTasks,
  }));
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
