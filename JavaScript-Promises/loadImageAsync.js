const Promise = require ('bluebird');

function loadImageAsync (url) {
  return new Promise (function (resolve, reject) {
   const image = new Image ();

    image.onload = function () {
      resolve (image);
    };

    image.onerror = function () {
      reject (new Error ('Could not load image at ' + url));
    };

    image.src = url;
  });
}
const Promise = require ('bluebird');
const loadImage = require ('img');
const loadImageAsync = Promise.promisify (loadImage);
