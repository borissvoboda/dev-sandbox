/*
Adding TS support with the ts-loader Package

Module is just a file.

Tell webpack how to work with files.




*/

// webpack.config.js
//adding rules

// webpack.config.js;

const path = require('path');

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [

        // multiple rules can be added here see webpack docs.
        { test: }
    ],
  },
};


// a loader is a pckg that tells webpack how to deal with cert. files
/*


ts loader tells how to work with ts files

test property - test that webpack will perform on any file it finds,
if the rule applies.

// regex

test: /\.ts$/,
use: 'ts-loader',
exclude: /node_modules/


after the module config:

resolve // which file extentions webpeck add to imports.

in general it will look for js files, we want ts files:


resolve: {
extensions: ['.ts', '.js']
}
*/
// this bundles them together...


// //////////////////////////

// tsconfig.json
// set sourceMap to true
// this helps to debug the code

// webpack.config.js
// in module.exports root:
// devtool: 'inline-source-map'
// this tells wp there will be generated source maps and wp should extract and add to bundle

// --------------------------
// when to use webpack?

// package.json
// scripts > build > "webpack"

// npm run build
// dist file -> bundle.js
// minification
// optimized code
// index.html =>  use bundle.

// in devtools in browser. sources / webpack dir 
// sourcemap helps; we have optimize code, but we can debug our code!

// we have 2 workflows - prod and dev





