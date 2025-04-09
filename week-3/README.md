# Game-Hub

***Requirements:***
-main landing page for user
-user can browse through the available movie cards
-user can search for a movie
-user can rate a movie
-user can bookmark a movie
-user can view their saved movies

Learnings in this project!

# ***hooks***

Hooks are simple function calls that gives us access to reacts life cycle or state system.

we can also make custom hooks that perform some specific operation like toggling between different themes.

# ***useState***

pretty straight forward.

```jsx
import {useState} from react;

const [user,setUser] = useState("");

function onChange(e){
	setUser(e.target.value)
}
```

# **useContext**

it is simply a global state.

it works with other functions like createContext and context.Provider.

```jsx
const UserContext = createContext();
```

this will create a new Context

```jsx
const user;
<UserContext.Provider value={user}>
	<other-component/>
</UserContext.Provider>
```

this will give the context to the components that it is wrapping. For example, i want to use the UserContext in other components like dashboard and navbar. So I can wrap those components in the UserContext.Provider tag and use the context in those components as well.

and this is how the context will be used in other components.

```jsx
component(){
	const user = useContext(UerContext);
	return(
		<>
			<p>Hello ${user}</p>
		</>
	)
}
```

# ***useRef***

useRef is a hook that will persist a state even after re-rendering.

```jsx
const count = useRef(0);
function handClick(){
	count = count + 10;
}
```

let’s assume that the component re-renders after the value updates.
the value stored will persist and will not be discarded.

Similar functionality can be achieved using simple states.
But the states will make the page re-render and their value can be lost if side Effect function is being used.
so useRef comes in handy!

# ***useEffect***

this function is called each time the page renders!

for example some state changed and the page has to be rendered. this function will be called.

we can also set some conditions like which determine if the page needs to be rendered again or not.

Basic Syntax

```jsx
useEffect(function,condition)
```

the second argument is an optional parameter which controls when the useEffect is triggered.

for example

```jsx
useEffect(()=>{
	console.log("This will be rendered every second!")
},1000)
```

and if we pass it an empty array as the second argument, then it will only be called on the initial first render.

```jsx
useEffect(()=>{
	console.log("Now this will be only rendered the first time! ")
},[]);
```

it isn’t limited to that, it can also be rendered when a state changes or a specific event happens.

for example, when the form is submitted it should call the useEffect.

```jsx
useEffect(()⇒{
	"This will be called upon the form submission! "
}, submitForm);
```

and let’s suppose that we need to cleanup something after the useEffect is called.

after the useEffect, we can return a function that will cleanup the code.

```jsx
useEffect(()=>{
	count += count;
	return () => count = 0;
},[])
```

using a lot of useEffects will cause unexpected behavior!

# ***callback***

these are nothing more than arguments being passed in the parameters

example

```jsx
function sum(a,b,mycallback){
	sum = a + b;
	mycallback(sum)
}

sum(5,6,mycallbackfunction)
```

that’s it
