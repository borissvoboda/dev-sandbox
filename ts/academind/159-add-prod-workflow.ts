/* We want a diff. output */
// webpack.config.prod.js
// webpeck would not look for this file by default! Must be added to webpack!!!

/*

webpack.config.prod.js

mode: production

output -> path -> path.resolve(__dirname, 'dist');

devtool: none
//// 
we add more:
-----

plugins for entire project

// automatically delete everything in the dist folder before new files are added
// npm install --save-dev clean-webpack-plugin
// import CleanPlugin from require('clean-webpack-plugin');

plugins: [
    new CleanPlugin.CleanWebpackPlugin()
]
*/

// //////////////////////////////////////////////////////////
// package.json
// build: "webpack --config wwebpack.config.prod.js"
