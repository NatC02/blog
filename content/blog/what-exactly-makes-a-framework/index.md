---
title: What exactly makes a framework?
date: "2022-01-23"
description: "A framework is made up of a TON of different tools. It's good to be aware of them and how they work within the bigger picture."
---

4 months ago on my daily morning commute to University, I was reading about how-to create your own Javascript framework. I read the entirety of this [this repository](https://github.com/verekia/js-stack-from-scratch) on Github. Some of the information is outdated within the scope of the current react eco-system (as in bootstrapping a ``create-react-app``). Sprinkled in, are some standalone configurations for some sections. I also finished the Dan Abramov [Just Javascript](https://justjavascript.com/) course. Dan Abramov is best known for being a member of the React team, co-author of Redux, and Create React App.

I want this post to serve as a reference point and to reinforce what I have read. It's a summary that stays at the high level only. It doesn't make much sense to deep-dive because the repo itself does that excellently.

Enjoy!

<hr>

### `Node, Yarn, and package.json`

#### [Node](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#introducing_node) 

is a JavaScript runtime environment that allows developers to make server-side tools and applications. 

It's intended to be used outside the scope of a browser. That is why the environment uses the Operating System's APIs like HTTP and file system. It can also be used for scripting. 

### Node in Front End:

__Linting__
    - [Linters](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/) check through your code and highlight any errors that are present, what is the type of error, and what code lines they are present on. They can also report any violations of a specified style guide that a development has agreed on. 

__Testing__
    - [Testing](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/) falls into the catergory of linting but testing is more in-depth. A good example of this would be unit tests which makes sure during runtime your code behaves like it should.

__Assembling Files__
    - [Assembling Files](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/) via Webpack to automatically remove dead code (tree-shaking) and bundling multiple Javascript files into single files. Usually this step is for preparing code that is ready to ship like having an organized structure and shrinking the file size.

#### [Yarn](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management#what_exactly_is_a_package_manager)

~~is faster than npm~~ 

I don't even know. The gap has been closing with the most recent version of npm, not drastically but it is catching up. Since I've only used npm I might be having dependency bias, so I'll try out Yarn in the future.

#### [package.json](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management#what_exactly_is_a_package_manager)

Contains meta information about the project and its dependencies. Some of the information it contains are project name, version, contributors, license, etc, configuration options for tools used, and a scripts section.

<hr>









### `Babel, ES6, ESLint, Flow, Jest, and Husky`

### Dev Environment Configuration:

Before diving in, there are a few prerequisites to know. [ECMAScript 2015 (ES6)](https://www.w3schools.com/Js/js_es6.asp) is the latest javascript revision. ES6 syntax isn't understood by all browsers and dev environments. So we use babel to fix this problem. An alternative to Babel is [Speedy Web Compiler (swc)](https://github.com/swc-project/swc). It is indeed faster, but not all babel features are supported.

#### [Babel](https://babeljs.io/docs/en/)

Babel is a [compiler](https://developer.mozilla.org/en-US/docs/Glossary/Compile) that transforms ES6+ code (since React JSX is based on ES6 then this would be included as well) to ES5. The modularity of Babel and its inclusion of alot of features is what makes it widely adopted and preferred.

#### [ES6](https://www.w3schools.com/Js/js_es6.asp)

ES6 is the latest Javascript revision. The most commonly used features are: [class](https://www.w3schools.com/Js/js_es6.asp#mark_class), [const](https://www.w3schools.com/Js/js_es6.asp#mark_const), [let](https://www.w3schools.com/Js/js_es6.asp#mark_let), and [promises](https://www.w3schools.com/Js/js_es6.asp#mark_promise).

```js

// Sample promise

const myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("Text here"); }, 2000);
});

myPromise.then(function(value) {
  document.getElementById("demo").innerHTML = value;
});

```

__Note: At the time of writing this post a new trend has begun. This is your daily reminder that for any future prediction, when in doubt, javascript. Always bet on javascript__


#### [ESLint](https://eslint.org/)

EsLint is the standard to use with ES6. A linter helps you catch errors, follow specific code formats in a project, and encourages consistency. Airbnb has a set of popular [rules](https://www.npmjs.com/package/eslint-config-airbnb) for their own lint config and it's become the standard.

<!-- ESlint is a linter. Thats all there is to know. I'm sorry but it's just the way it is. -->




#### [Flow](https://github.com/facebook/flow/tree/v0.169.0)

Flow is a static type checker from Facebook. Flow checks for errors in your code before run-time. The "type-checking" part means that if you were to place a string where a number should be, an error would be returned because it's type is wrong.


### __Does TypeScript make Flow obselete?__


[~~No.~~](https://www.youtube.com/watch?v=qQ6wSei-NJU&t=69s). I scattered the internet and Typescript has catched up with Flow's features. [TypeScript](https://github.com/Microsoft/TypeScript) has alot of npm modules support. It's also [ranked #10 on the index of Popularity of Programming Language](https://pypl.github.io/PYPL.html) at the time of writing. 

#### [Jest](https://jestjs.io/)



Jest is a testing framework made by Meta. It can test React Components and works with Typescript and Babel.

```js
// Jest non-component test sample
function sum(a, b) {
  return a + b;
}
module.exports = sum;

////////////////////////

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

#### [Husky](https://github.com/typicode/husky)

Husky is used with [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) which are scripts that can automate tasks before certain actions occur. For example, we can use Git Hooks to run a test before commiting to check if our code follows formating rules.

<hr>








### `Express, Nodemon, and PM2`

This section is about the server side configuration.

### Node in Back End:

#### [Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#introducing_express)

Express is a web framework for Node.js. At the very basic level, it's what gives you access to starting a server and making requests. Express is important because it's arguably the foundation of the Node.js ecosystem. 

```js
// Route parameters sample

/**
 * Module dependencies.
 */

var express = require('../../');
var app = module.exports = express();

// Faux database

var users = [
  { name: 'tj' }
  , { name: 'tobi' }
  , { name: 'loki' }
  , { name: 'jane' }
  , { name: 'bandit' }
];

// Create HTTP error

function createError(status, message) {
  var err = new Error(message);
  err.status = status;
  return err;
}

// Convert :to and :from to integers

app.param(['to', 'from'], function(req, res, next, num, name){
  req.params[name] = parseInt(num, 10);
  if( isNaN(req.params[name]) ){
    next(createError(400, 'failed to parseInt '+num));
  } else {
    next();
  }
});

// Load user by id

app.param('user', function(req, res, next, id){
  if (req.user = users[id]) {
    next();
  } else {
    next(createError(404, 'failed to find user'));
  }
});

/**
 * GET index.
 */

app.get('/', function(req, res){
  res.send('Visit /user/0 or /users/0-2');
});

/**
 * GET :user.
 */

app.get('/user/:user', function(req, res, next){
  res.send('user ' + req.user.name);
});

/**
 * GET users :from - :to.
 */

app.get('/users/:from-:to', function(req, res, next){
  var from = req.params.from;
  var to = req.params.to;
  var names = users.map(function(user){ return user.name; });
  res.send('users ' + names.slice(from, to + 1).join(', '));
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
```

#### [Nodemon](https://www.npmjs.com/package/nodemon)

Nodemon is a monitor that watches your code in development. It will automatically restart your backend server if a change is made within the directory.

#### [PM2](https://www.npmjs.com/package/pm2)

PM2 is a daemon (fancy word for background process) that runs in the background in production. It's used to manage multiple processes and is a great way to scale your application.

<hr>








### `Webpack, React, and Hot Module Replacement`

#### [Webpack](https://webpack.js.org/)

Webpack is a transform tool that bundles Javascript files so that your client can execute a single for your application. Webpack is made up of [Loaders](https://webpack.js.org/awesome-webpack/#loaders), [Integration Libraries](https://webpack.js.org/awesome-webpack/#integration-libraries), and [Plugins](https://webpack.js.org/awesome-webpack/#webpack-plugins).

```js
// Webpack sample config

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './foo.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js',
  },
};
```

#### [React](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)

React is a library made by Meta that allows you to build user interfaces. It uses [JSX](https://reactjs.org/docs/jsx-in-depth.html) syntax to represent HTML elements in Javascript. 
  
#### [Webpack Hot Module Replacement](https://www.youtube.com/watch?v=PthDwpgrhmQ)

Just like how we can use nodemon to reload our backend when we do changes, we have to do the same at the webpack module level. But this time prevent an entire page reload. This is where Hot Module Replacement comes into play.

<hr>








### `ImmutableJS, Redux, Immutable, and Fetch`

### Application State Configuration (and beyond):

#### [ImmutableJS](https://immutable-js.com/)

ImmutableJs is a library that allows you to create immutable objects. It lets us return a new object without mutating our original object.

Instead of creating a Javascript object with an object literal and changing (mutating) the object, 

<!-- <br/> -->

```js
const obj = { a: 1 }
obj.a = 2 // Mutates `obj`
```

<br/>

we use ImmutableJs to prevent state mutation (modifying the object) and instead return a new object.

 ```js
const obj = Immutable.Map({ a: 1 })
obj.set('a', 2) // Returns a new object without mutating `obj`
```


#### [Redux](https://redux.js.org/introduction/getting-started)

Redux is a library that allows us to create a global application state. A brief explanation: it works using ``actions`` (objects that describe what happened), ``reducers`` (functions that trigger before updating state based on `previous state` + `an action`), and ``store`` (starts after an action is  `dispatched`, then runs the root reducer) to synchronize state. 


#### [React-Redux](https://react-redux.js.org/introduction/getting-started)

React-Redux is a library that allows us to connect React components to Redux so when the Redux ``store`` changes, React components can update. There is ALOT to cover so again, I will just swiftly link the repository.

#### [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

Fetch is an API that uses the fetch() method and allows us to access data. We have access to thigns like HTTP headers and status codes to make sure we are getting the data we want.

<hr>








### `React Router, Server-Side Rendering, and Helmet`

#### [React Router](https://reactrouter.com/docs/en/v6)

It allows you to configure your web application to read and update the browsers location to render certain user interfaces (aka client-side routing). This is what React Router does but it's used server-side to navigate between pages in React app as well.

#### [Server-Side Rendering](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction)

With server side rendering you could render at the initial load of the page. Wherein in the alternative is to have Javascript render it in the client's browser.

#### [Helmet](https://github.com/nfl/react-helmet)

With React Helmet, your able to inject content into the ```head``` of the document and exposes that data do the server.

```js
// Sample react-helmet

import React from "react";
import {Helmet} from "react-helmet";
 
class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            ...
        </div>
    );
  }
};

```

<hr>








### `Socket.IO`

[Socket.IO](https://socket.io/) is a library to implement [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) and locally would require configuration server side and client side. A use case is holding a communication session between a user's browser session and server. You could send messages to a server and receive event-driven responses without having to poll the server for a reply. 

<hr>








### `Bootstrap and JSS`

#### [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

Boostrap is a UI library. It can be integrated using the official release of Bootstrap or with a third party library like React-Bootstrap and Reactstrap.

#### [JSS](https://cssinjs.org/?v=v10.9.0)

JSS is a library for CSS-in-JS to write styles in Javascript and then inject them into your application.

<hr>








### `Travis, Coveralls, and Heroku`

### Preparing for deployment:

#### [Travis CI](https://travis-ci.org/)

Travis is a platform for continuous integration (free for open source).

#### [Coveralls](https://docs.coveralls.io/)

Coveralls gives you history and statistics of test coverage.

#### [Heroku](https://docs.coveralls.io/)

[Heroku](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment#why_heroku) is a Platform as a Service (PaaS) that configures infastructure details for you. It gives you 
time to focus on development and takes away some of the behind the scenes configuration.

<hr>


This is a huge onion of information! Several of the tools / services / modules mentioned could have their own dedicated post. There are gaps in my knowledge for some of these tools but writing a post helped me clarify my thinking to understand the fullstack eco-system better.

Whereares before I started with a fully bootstraped project, not having to worry about the fundamental building of the features offered. Now I have a better understanding of what the current services / tools / npm modules have accomplished before frameworks matured to the point of where they are now. Although some of the packages are not as popular, I found it helped me understand more about the fullstack eco-system. 

Hope you enjoyed reading through my post!


 
