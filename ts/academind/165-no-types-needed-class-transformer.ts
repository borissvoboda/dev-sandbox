/*

I have data model.
I have a class in there.

Product with title and price, with constructor.

Also I have a function getIntormation returning title and price with dollar sign.

In app.ts I import Product from product.model.ts file.

In bigger apps I may download data from server. I get list of products.

These are Js objects, but are not instances of class product.
These products do not have getIntormation method.

But we can:
*/
const loadedProducts = products.map((prod) => {
  return new Product(prod.title, prod.price);
});

// But doing this manually is cumbersome!

// here class-transformer package comes!
/* it makes it simple

... convert data  in the right model

npm install class-transformer --save
and then
npm install reflect-metadata --save

import "reflect-metadata"

now we can import plainToClass from class-transformer

The main method.



*/

// You use classes, basically instead of types.
// And classes are NOT TS specific.
