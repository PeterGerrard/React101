# 05 - Compilation and Packaging

Currently we are using babel at runtime to convert jsx files into files that can be understood by a browser. This won't scale into a production environment so we want to transpile before we send to the browser. To do this we will use babel cli rather than babel runtime scripts.

## Task - Adding the babcel cli and plugins

Install the following tools into your `package.json`:

```sh
npm install --save-dev @babel/core @babel/cli @babel/preset-react
```

And then we want to set up babel to use the react present by adding `.babelrc` next to the package file

```json
{
  "presets": ["@babel/preset-react"]
}
```

And now we can run:

```sh
npx babel src/*.jsx --out-dir src/  
```

We now have the transpiled js files in the `src` directory. If you look at them they'll look like the files we wrote back in exercise 1.

## Task - Update index.html to use the transpiled files

Update `index.html` to reference the js files rather than jsx. And then remove the reference to the babel script.

In your terminal run: `npm start` in the `exercises/05` folder.
Open [http://localhost:1234](http://localhost:1234) in your browser

Nothing will seem different but you should be able to see the same app as before.

## Task - Add a script to make it easier to run in future

In `package.json` add a new section to run the script:

```json
"scripts": {
  "build": "babel src/*.jsx --out-dir src/"
}
```

## Task - Auto recompiling

Babel allows us to watch the files we've written and auto recompile as necessary.

In a one terminal run `npm run build --watch`, and in another run `npm start`.
Open [http://localhost:1234](http://localhost:1234) in your browser

Modify any of the `jsx` files with a change of your choice

Refresh the browser to see the change
