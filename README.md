# Shop.ly - a dynamic product page for an online shopping platform.
## Overview
Shop.ly is an e-commerce front-end for viewing over a million products. Users can see product information, see related products, post reviews, and ask/answer questions. Available for every product is a selection of various styles, product shots (images), and feature lists.

### Table of Contents
[Description](#Description)

[Installation](#Installation)

[Usage](#Usage) 

[License](#License)

## Description
Shop.ly is an ecommerce front-end for viewing over a million products. It display information in regards to the Product Overview, Related Products, Reviews, and Questions and Answers (Q&A) modules.

Shop.ly was built with React.js & Redux, Node, and Express. 

### Product Overview
Credit: Alec Champaign

The Product Overview module was responsible for displaying in-depth information regarding the currently selected product.
Within the product overview module is:
1. An image gallery displaying product shots
2. A slogan and description for the product
3. An average "star" rating (one through five)
4. A selection of available "styles" for each product
5. A mock checkout interface

#### A look at the options selector

![Options](/options.gif)

#### A look at the gallery interface

![Gallery](/gallery.gif)

#### P.S. Shop.ly also sports a dark mode ;)
![Darkmode](/darkmode.gif)

### Related Products
Credit: Ian Robinson

The Related Products module consist of a carousel of related product cards which update depending on the currently selected product. A user can click on any of the cards to change the currently selected product. This re-renders the page, but does not reload it. Users may also add the product they're currently viewing to an outfit, which will persist on their machine, via localStorage.

### Reviews
Credit: Justin Haddock

### Questions and Answers (Q&A)
Credit: Joey Liu

## Installation
While in the project's root directory, run the following to install all dependencies:
```
npm install
```
Next, run either
```
npm run build-dev
```
or 
```
npm run build-prod
```
depending on whether you want webpack to build the application in development (former) or production (latter) mode.

Lastly, run
``` npm run server```
to start the application, then navigate to `localhost:7000/product_details/1` to view the webpage in your browser. You can change the query parameter number (`1` in the aforementioned example case) to anything between `1 - 1000011` to render a page for a different product. 

You can also change the port Shop.ly runs on from `7000` by editing the `npm run server` script in the `package.json`.

## Usage

## License
Copyright (c) Alec Champaign, Joey Liu, Justin Haddock, and Ian Robinson.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
