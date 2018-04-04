var myArray = new Array ();
myArray[0] = 8;
myArray[1] = 'hello';

var myCar = new object ();
myCar.maxSpeed = 50;
myCar.driver = 'Kaynam';
myCar.drive = function () {
  console.log ('now driving');
};
var myCar2 = {
    maxSpeed: 70,
    driver: "Tur Ninjia",
    drive: function (speed, time) {
        console.log(speed * time);
    }
};
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);
