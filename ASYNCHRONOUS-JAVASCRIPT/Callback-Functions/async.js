window.onload = function () {
  function callBack (data) {
    console.log (data);
  }
  $.get ('data/tweets.json', callBack);
  console.log ('test');
};
