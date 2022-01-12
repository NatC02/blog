---
title: React Hooks, a simplistic overview
date: "2022-01-09"
description: "How do React Hooks work?" 
---

Within the past few months I've started to understand the react eco-system more.

And found myself using React Hooks. I was inspired to write this blog post when I used a ``useState`` hook to detect browser width and conditionally render a ui component some time ago.

So I thought to myself, "What I cannot create [&& explain], I do not understand."

 React Hooks are completely optional to use, so developers can choose what should be refactored to use them. 

I think that React Hooks can "abstract away" how React classes work (along with the ```this``` keyword in Javascript). It's similar to [this](https://youtu.be/0_AQZbvxH2s?t=368 "Youtuber explaining part of my idea of this abstracting away") (6:08 - 6:23) perspective. But at the end of the day, its an alternative way to build dynamic components and complex logic in React. 

I'm only going to cover the most commonly used hooks. Enjoy!

These are:
- __useState()__
- __useEffect()__
- __useContext()__
- __useReducer()__

## ```useState()```

With the ```useState()``` hook, you can take a functional component and update it's state without converting it to a class.

``` js
function App() {
  const [pigeons, setPigeons] = useState(12);
  const handleClick = () => setPigeons(pigeons + 1)

  return 
      <div> 
          I have {pigeons} in my backyard. 
        <div> 
        <button onClick={handleClick}>Give me more pigeons!</button>
      </div>
   </div>
}
```

The first variable of the ```useState()``` hook starts with an initial state, in this case it's called ```pigeons``` and it's being returned on the first render. The second variable acts as a function that updates the first variable, thus updating the state of the component. 

In the example above, when the button is clicked, the state of the pigeons will be updated by +1.

<hr/>

## ```useEffect()```

Like the ```useState()``` hook, we start by setting our initial state. In this instance the, ```useEffect()``` hook will fire off and update ON the first render. 

``` js
import React, {useState, useEffect} from 'react';
function App() {
    // Define State
    const [name, setName] = useState({firstName: 'name', surname: 'surname'});
    const [title, setTitle] = useState('BIO');
   
    // Call the use effect hook
    useEffect(() => {
      setName({FirstName: 'Shedrack', surname: 'Akintayo'})
    }, []) // pass in an empty array as a second argument
    
    return(
        <div>
            <h1>Title: {title}</h1>
            <h3>Name: {name.firstName}</h3>
            <h3>Surname: {name.surname}</h3>
        </div>
    );
};
export default App
```

We have some jsx props inside the initial variables of the hook because once the ```useEffect()``` hook is called  it's going to update the state to use the jsx props. Passing the empty array for ```useEffect()``` will only run it once without re-rendering on every change within the tree. 

<hr/>

## ```useContext()```

This hook accepts a context object, what it returns is the result of React.createContext (the context value). 
The purpose behind ```useContext()``` is to share data throughout the app without using props and passing those down throughout the application.

__Below we are using the Context API, NOT the ```useContext()``` hook.__

``` js
import React from "react";
import ReactDOM from "react-dom";

const NumberContext = React.createContext();
function App() {
  return (
    <NumberContext.Provider value={45}>
      <div>
        <Display />
      </div>
    </NumberContext.Provider>
  );
}
function Display() {
  return (
    <NumberContext.Consumer>
      {value => <div>The answer to the question is {value}.</div>}
    </NumberContext.Consumer>
  );
}
ReactDOM.render(<App />, document.querySelector("#root"));
```

``NumberContext`` is the context object and within this object we have access to two values that are returned. These are the consumer and the provider. The provider is the value that is being passed down to the children. The consumer is the value that is being passed down to the parent. 

The provider is then passed a value of 45. The consumer is then passed the value of the provider.


__Below we are using the ```useContext()``` hook.__

``` js
import React, { useContext } from 'react';

// old code from before goes here

function Display() {
  const value = useContext(NumberContext);
  return <div>The answer is {value}.</div>;
}
```

Here the ```useContext()``` hook is called and then passes the context object created and then the value from it is rendered.

<hr/>

## ```useReducer()```

The ```useReducer()``` hook is a combination of ```useState()``` and ```useEffect()``` that allows you to manage state in a functional component.

It takes in a reducer function and an initial state. Then it returns a state and a dispatch function by using array destructuring.

``` js
const [state, dispatch] = useReducer(reducer, initialArg, init);
```
<br/>

<hr/>


Hope you enjoyed reading how the most common React Hooks work!

Below you can find my inspiration and more information about React Hooks, highly suggest them!

## Resources:
- [React Docs](https://reactjs.org/docs/hooks-reference.html#useeffect)
- [Getting started with the React Hooks API](https://www.smashingmagazine.com/2020/04/react-hooks-api-guide/#useReducer)
- [What are React Hooks](https://www.robinwieruch.de/react-hooks/)
- [React Hooks Documentation](https://blog.ohansemmanuel.com/react-hooks-documentation-easy-to-read/#useState)