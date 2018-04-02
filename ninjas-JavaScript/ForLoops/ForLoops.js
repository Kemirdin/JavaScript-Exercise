/*for (age = 5; age < 10; age++) {
  console.log ('Your age is less than 10');
}
document.write ('you are now over 10');*/

var links = document.getElementsByTagName ('#');
for (i = 1; i < links.length; i++) {
  console.log ('this is link number' + i);
}
document.write ('all links are now looped');
