# Game-Hub

Learnings in this project!

# ***hooks***

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
