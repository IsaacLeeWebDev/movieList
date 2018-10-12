const path = require('path');

module.exports = {
  entry: './client/src/index.js', //where should webpack start looking for files
  output: { //where hsould webpack put the bundle
    path: path.resolve(__dirname, 'client/dist'),  //what folder?
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, //which files should this loader run on? regular expression that means .jsx or .js 
        exclude: /(node_modules)/, //don't transpile node modules because those are our libraries
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] //preset-env translate es6 to es5
          }
        }
      }
    ]
  },//WP will put our bundle at ./dist/bundle.js
  mode: 'development' 
};
