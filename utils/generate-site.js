const fs = require("fs");
const { resolve } = require("path");

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      // reject promise and send the error to the promise's .catch() method if there's an error
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // resolve promiose and send data to .then
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      // if error, reject promise -> send the error to promises .catch() method
      if (err) {
        reject(err);
        // return out of the function so it doesn't execute the resolve() function 
        return;
      }

      // if sucessful resolve promise and send the successful data to .then() method
      resolve({
        ok: true,
        message: "File copied!",
      });
    });
  });
};

module.exports = {
  writeFile,
  copyFile,
};