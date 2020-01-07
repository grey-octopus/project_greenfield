# Shop.ly

Shop.ly is a dynamic product page for an online shopping platform.

## Building and running on localhost
```bash
$ npm install
$ npm run build-dev
$ npm run server
```

To create a production build:

```bash
$ npm run build-prod
```

## Running
Open http://localhost:7000/product_details/25 in a browser of your choice.
Changing the number at the end of the url will update the page with the product you're viewing.

**make sure that redux devtools are removed from store.js, or the page will only load in a browser with the devtools installed.**

To remove, navigate to ./store.js, and make these lines of code look as such:
```javascript
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  )
);
```

## About
This project is built with using React,Redux, React Router, Node.js and Jest/Enzyme for testing.

### Product Overview
The Product Overview module comprised of the image gallery, product options, and product information components. This module also required the implementation of a dark mode.

#### Demos/Screenshots
##### Image Gallery
![Image Gallery Demo](gallery.gif)
##### Product Options
![Product Options Demo](options.gif)
##### Darkmode
![Dark Mode Demo](darkmode.gif)

## Credits

Made by team grey-octopus

## License
[MIT](https://choosealicense.com/licenses/mit/)
