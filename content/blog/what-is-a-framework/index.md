---
title: What exactly makes a framework?
date: "2022-01-16"
description: "A framework is made up of a TON of different tools. It's good to be aware of them and how they work within the bigger picture."
---

4 months ago on my daily morning commute to University, I was reading about how-to create your own Javascript framework. I read the entirety of this [this repository](https://github.com/verekia/js-stack-from-scratch) on Github. Some of the information is outdated within the scope of the current react eco-system (as in bootstrapping a ``create-react-app``). I also finished the Dan Abramov [Just Javascript](https://justjavascript.com/) course. Dan Abromov is best known for being a member of the React team, co-author of Redux, and Create React App.

I want this post to serve as a reference point and to reinforce what I have read. It's a summary that stays at the high level. It doesn't make much sense to deep-dive because the repo itself does that excellently.

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

Before diving into what all that is above, there are a few prerequisites to know. [ECMAScript 2015 (ES6)](https://www.w3schools.com/Js/js_es6.asp) is the latest javascript revision. ES6 syntax isn't understood by all browsers and dev environments. So we use babel to fix this problem. An alternative to Babel is [Speedy Web Compiler (swc)](https://github.com/swc-project/swc). It is indeed faster, but not all babel features are supported.

#### [Babel](https://babeljs.io/docs/en/)

Babel is a [compiler](https://developer.mozilla.org/en-US/docs/Glossary/Compile) that transforms ES6+ code (since React JSX is based on ES6 then this would be included as well) to ES5. The modularity of Babel and its inclusion of alot of features is what makes it widely adopted and preferred.

#### [ES6](https://www.w3schools.com/Js/js_es6.asp)

ES6 is the latest Javascript revision. The most commonly used features are: [class](https://www.w3schools.com/Js/js_es6.asp#mark_class), [const](https://www.w3schools.com/Js/js_es6.asp#mark_const), [let](https://www.w3schools.com/Js/js_es6.asp#mark_let), and [promises](https://www.w3schools.com/Js/js_es6.asp#mark_promise).

__Note: At the time of writing this post a new trend has begun. This is your daily reminder that for any future prediction, when in doubt, learn more javascript.__

#### [ESLint](https://eslint.org/)

EsLint is the standard to use with ES6. A linter helps you catch errors, follow specific code formats in a project, and encourages consistency. Airbnb has a set of popular [rules](https://www.npmjs.com/package/eslint-config-airbnb) for their own lint config and it's become the standard.

<!-- ESlint is a linter. Thats all there is to know. I'm sorry but it's just the way it is. -->

#### [Flow](https://github.com/facebook/flow/tree/v0.169.0)

Flow is a static type checker from Facebook. Flow checks for errors in your code before run-time. The "type-checking" part means that if you were to place a string where a number should be, an error would be returned because it's type is wrong.


### __Does TypeScript make Flow obselete?__


[~~No.~~](https://www.youtube.com/watch?v=qQ6wSei-NJU&t=69s). Typescript has catched up with Flow's features. The support [TypeScript](https://github.com/Microsoft/TypeScript) has with npm modules is unparalled. It's also [ranked #10 on the index of Popularity of Programming Language](https://pypl.github.io/PYPL.html) at the time of writing. 

#### [Jest](https://jestjs.io/)

Jest is a testing framework made by ~~Facebook~~ Meta. It can test React Components and works with Typescript and Babel.

#### [Husky](https://github.com/typicode/husky)

Husky is used with [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) which are scripts that can automate tasks before certain actions occur. For example, we can use Git Hooks to run a test before commiting to check if our code follows formating rules.

<hr>








### `Express, Nodemon, and PM2`

This section is about the server side configuration and the server side tools that are used.

### Node in Back End:

#### [Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#introducing_express)

Express is a web framework for Node.js. At the very basic level, it's what gives you access to starting a server and making requests. Express is important because it's arguably the foundation of the Node.js ecosystem. 


#### [Nodemon](https://www.npmjs.com/package/nodemon)

Nodemon is a monitor that watches your code in development. It will automatically restart your backend application if a change is made within the directory.

#### [PM2](https://www.npmjs.com/package/pm2)

PM2 is a daemon (fancy word for background process) that runs in the background in production. It's used to manage multiple processes and is a great way to scale your application.

<hr>








### `Webpack, React, and Hot Module Replacement`

#### [Webpack](https://webpack.js.org/)

Webpack is a transform tool that bundles Javascript files so that your client can execute a single for your application. Webpack is made up of [Loaders](https://webpack.js.org/awesome-webpack/#loaders), [Integration Libraries](https://webpack.js.org/awesome-webpack/#integration-libraries), and [Plugins](https://webpack.js.org/awesome-webpack/#webpack-plugins).

#### [React](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)

React is a library made by Meta that allows you to build user interfaces. It uses [JSX](https://reactjs.org/docs/jsx-in-depth.html) syntax to represent HTML elements in Javascript. 

#### [Webpack Hot Module Replacement](https://www.youtube.com/watch?v=PthDwpgrhmQ)

Just like how we can use nodemon to reload our backend when we do changes, we have to do the same at the webpack module level. But this time prevent an entire page reload. This is where Hot Module Replacement comes into play.

<hr>








### `ImmutableJS, Redux, Immutable, and Fetch`

#### [Nodemon](https://www.npmjs.com/package/nodemon)

Nodemon is a monitor that watches your code in development. It will automatically restart your backend application if a change is made within the directory.




End Note: What I have walked through is very short because if I go deeper then the purpose of the article is lost. It's meant to be a surface level perspective to see how the tools interact and where they fit into this big layered onion.



git 