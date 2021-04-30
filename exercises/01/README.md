# 01 - Display a React element

React works by creating a virtual element that will then be rendered into a specific location in an html file. In this exercise we will display a simple element and display it on a page.

## Render an element

In the [main html file](./src/index.html) we pull in react, react-dom and our [main javascript file](./src/index.js).

In the javascript file we want to render a react object into the the `<div id="root"></div>` section.

### Task - Render a React element

In [index.js](./src/index.js) we want to create a simple element to display. Add the following code:

```js
const element = React.createElement("div", {}, "Hello, React!");
```

We know want to render this to the screen, to do this use the followinbg code:

```js
// find the element to render inside of
const domContainer = document.querySelector("#root");
// render our element into the container
ReactDOM.render(element, domContainer);
```

In your terminal run: `npm start` in the `exercises/01` folder.
Open [http://localhost:1234](http://localhost:1234) in your browser

### Task - extracting a basic component

(TODO: describe this task)

Create a new file `src/App.js` and import in [the html file](./src/index.html):

```html
<script src="App.js"></script>
<script src="index.js"></script>
```

In [App.js](./src/App.js) we will create our first component:

```js
const App = () => {
  return React.createElement("div", {}, "Hello, React Component!");
};
```

and update [index.js](./src/index.js) to use the new component.

```js
// find the element to render inside of
const domContainer = document.querySelector("#root");
// render our element into the container
ReactDOM.render(React.createElement(App), domContainer);
```

Go back to [http://localhost:1234](http://localhost:1234) and refresh the page.
