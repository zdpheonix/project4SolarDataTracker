var slideLeft; //indicates loss of savings
var slideRight; //indicates gain of savings
var netResult; //starting designation of ZERO //
var pos = 25;
var timeChange = 0;

function preload(){
   loadJson("data/costData.json", costData, "jsonp");
//load data on cost of power w/ solar $$ savings (PG&E bill)
//load data on cost of power w/ grid only (difference of the above two will be the net result you need)
}

function setup() {
//sprite animations
  createCanvas(1000, 600);
  background(100, 100, 100);
//time up/down variable "timeChange"
}

function timeChange(){
  timeChange = loadJSON("data/dateData.json");
}

function solarPowerCost(){
  solarCost = loadJson("data/solarCost.json");
//import data on power cost w/ solar
//take data in units of $1K -- create by diving total $ by 1,000 and force into integer with int()
//
}

function gridPowerCost(){
  gridCost = loadJson("data/gridCost.json");
//import *calculated data* on power cost w/ grid-only power
//take data in units of 1000-kWh -- create by dividing total calculated cost by 1000 and force into integer
}

function draw() {
 //move forward in time if mouse scrolls up
 //move backward in time if mouse scrolls down

function mouseWheel(mouseScroll){
  pos += mouseScroll.delta;
  pos -= mouseScroll.delta
}


 //add some kind of option to turn off solar representation to show impact of not using solar (not dependent on time)
}
