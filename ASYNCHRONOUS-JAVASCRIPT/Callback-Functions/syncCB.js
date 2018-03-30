window.onload = function () {
  function callBack (val) {
    console.log (val);
  }
  var fruits = ['banana', 'apple', 'pear'];
  fruits.forEach (callBack);
  console.log ('done');
};
