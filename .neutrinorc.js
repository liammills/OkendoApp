const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const styles = require('@neutrinojs/style-loader');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnb(),
    react({
      html: {
        title: 'ratings-spa'
      },
      style: {
        test: /\.(css|sass|scss)$/,
        loaders: [
        {
          loader: 'sass-loader',
          useId: 'sass'
        },
      ]
      }
    }),
  ],
};
