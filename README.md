# Shop.ly

Shop.ly is a dynamic product page for an online shopping platform.

## Building and running on localhost

```bash
npm install
npm run build-dev
npm run server
```

To create a production build:

```bash
npm run build-prod
```

## Running

open http://localhost:3000//product_details/25 in a browser of your choice.
changing the number at the end of the url will change the product you are viewing.

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

This project is built with using React, React Router, React-Redux, Node.js and Jest for testing.
React-Items-Carousel and React-Modal were used. 

## Credits

Made by team grey-octopus

## License
[MIT](https://choosealicense.com/licenses/mit/)
