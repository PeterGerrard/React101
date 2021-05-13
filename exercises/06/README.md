# 06 - Bundling

## Task - Bundling everything into a distribution file

For this we are going to use parcel v2, but there are plenty of alternatives (e.g. webpack)

To start we will need to rework our files to reference the objects.

In `MyButton.jsx` we will need to export the MyButton function so we can pull it into App.jsx

```jsx
export const MyButton = ...
```

And in `App.jsx` we need to `import { MyButton } from "./MyButton"` and export App so it can be used in index.

Then finally in `index.jsx` we need to import the App.

Now that everything is being pulled in we don't need to reference eveything from `index.html`

```html
<body>
    <div id="root"></div>
    <script
      src="https://unpkg.com/react@17/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="index.jsx" type="module"></script>
  </body>
```

(Note the change of type of the script to module)

Now we want to change the build command:

- Install parcel `npm install --save-dev parcel@next`
- Add a script into `package.json`: `parcel build ./src/index.html`
- Update the start script: `serve dist -n -l 1234`
- Run `npm run build` and `npm run start`
- Navgate to [http://localhost:1234](http://localhost:1234)

## Task - Hot reload

Parcel (and webpack) offer us simple to use hot reloading for most non parcel (webpack) config things. And we can get it just by changing the start script to:

```json
"start": "parcel serve ./src/index.html"
```

- Run `npm run start`
- Navgate to [http://localhost:1234](http://localhost:1234)
- Make a change in `MyButton` and return to the browser