function Particle() {
    this.x = 100;
    this.y = 99;
    //this.show = function () {
    //    point(this.x, this.y);
    //}
}
Particle.prototype.show = function () {
    point(this.x, this.y);
}
var p;
function setup() {
    createCanvas(600.300);
 }