import { useEffect, useState } from "react";
import EditList from "./list-logic/editList.jsx";
import AddList from "./list-logic/addList.jsx";
import ViewList from "./list-logic/viewList.jsx";
import formSchema from "./schemas/formSchema.jsx";

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

  const [tasksVisibility, setTasksVisibility] = useState(false);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [formVisibility, setFormVisibility] = useState(false);
  const [titleError, setTitleError] = useState("");
  const [tasksError, setTasksError] = useState("");
  const [editListVisibility, setEditListVisibility] = useState(false);
  const [listTobeEdited, setListTobeEdited] = useState({
    id: 0,
    title: "",
    tasks: [],
    date: "",
    time: "",
  });

  return (
    <div className="page-container">
      <h1>To-Do List</h1>
      <EditList
        tasksVisibility={tasksVisibility}
        setEditListVisibility={setEditListVisibility}
        editListVisibility={editListVisibility}
        listTobeEdited={listTobeEdited}
        existingLists={existingLists}
        setListTobeEdited={setListTobeEdited}
        setExistingLists={setExistingLists}
      />
      {/* <EditView tasksVisibility setEditListVisibility editListVisibility listTobeEdited setListTobeEdited /> */}
      <ViewList
        existingLists={existingLists}
        setExistingLists={setExistingLists}
        setDate={setDate}
        setTime={setTime}
        setFormVisibility={setFormVisibility}
        setEditListVisibility={setEditListVisibility}
        setListTobeEdited={setListTobeEdited}
      />
      <AddList
        formVisibility={formVisibility}
        setFormVisibility={setFormVisibility}
        titleError={titleError}
        tasksError={tasksError}
        tasksVisibility={tasksVisibility}
        setTasksVisibility={setTasksVisibility}
        setTitleError={setTitleError}
        setTasksError={setTasksError}
        existingLists={existingLists}
        date={date}
        time={time}
        setDate={setDate}
        setTime={setTime}
        formSchema={formSchema}
      />
    </div>
  );
}
