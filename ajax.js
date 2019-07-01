/* #################################################################
Using XHR
################################################################# */

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/vserpa");
xhr.send(null);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
};

/* #################################################################
Using XHR
################################################################# */

var myPromise = function() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/vserpa");
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Request error");
        }
      }
    };
  });
};

var result = myPromise()
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });
