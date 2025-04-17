# To-Do List

***Requirements***

-Add Task: A user can add a new task (just a simple description).
-Mark as Completed: A user can mark a task as completed (using a button or checkbox).
-Delete Task: A user can delete a task.
-State Persistence: Use localStorage to save tasks so that they persist even when the page is refreshed.(Self idea,but can also be removed for simplicity)

***Learnings***

# ***JSON***

JSON is a  way of storing data in string form to save space and to make it easier to handle the data. It follows the JS object syntax.
for example if we want to save a string in the JSON format it would be like so

```jsx
{
	"string-name" : "string-data",
}
```

now it appears to be quite simple thinking that the JSON format can be used as is cause it uses the JS object syntax.

But it isn’t how it works because it saves the data in **STRING** type!.

and to convert the JSON form to code usable data we have to parse the data.

```jsx
const response = JSON.parse(data);
```

and to convert any data into JSON form we can achieve it so

```jsx
const JSONFormat = JSON.stringify(data);
```

most APIs return data in JSON format. because of it’s lightweight nature .
and depending upon the API and the structure of data, the data can be handled easily after 

# ***Saving/Storing data locally***

The data is saved and share through the local storage.

it’s one of the many ways of storing data.

Local storage will save the data in the browser. For example if we store the user’s name in the local storage then it will be stored in the browsers storage.
And even if the browser is refreshed or closed the local storage data will still persist and will not be removed!

The data is also stored in key value pairs. Just like objects in JS.
This is how data can be saved in the local storage:

```jsx
LocalStorage.setItem("key","value");
```

Now imagine that the value is an object or an array or something else, other than a string.
then we have to stringify it.

```jsx
LocalStorage.setItem("key",JSON.stringify(value));
```

and the process of getting the data is same too!

```jsx
LocalStorage.getItem("key");
```

it also saves the data in JSON format so the data has to be parsed for it to be understood by JS and strigified in order to be saved in the Local Storage.

# ***Sharing States***

React allows us to make re-usable components. But if we want to link the components together then some properties like states need to be shared in order for them to be working properly!
One method is:

lifting the state up. It basically means that we give the states to some parent function and whichever component needs to use that state can use it through props. Props are simply parameters being passed, just a fancy way of saying arguments!
