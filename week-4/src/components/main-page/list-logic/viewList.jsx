export default function ViewList({
  existingLists,
  setFormVisibility,
  setDate,
  setTime,
  setExistingLists,
}) {
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
    <div>
      {existingLists.length > 0 ? (
        <div className="existingLists">
          <hr />
          <p>My Lists</p>
          {existingLists.map((list, index) => (
            <div key={index} className="list">
              <hr />
              <h2>{list.title}</h2>
              <p>
                {list.date}
                <br /> {list.time}
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
    </div>
  );
}
