
//var submitButton;

var snake = new Snake();
var food = new Food();
var frameCount = 0;
function setup() {
 canvas = createCanvas(600,600);
 frameRate(60);
 //submitButton = createButton('submit');

/*
 var config = {
    apiKey: "AIzaSyD-2v3rljOwZxQKLoB_0Adz62OolMWBRFE",
    authDomain: "nicksucksatjscoding.firebaseapp.com",
    databaseURL: "https://nicksucksatjscoding.firebaseio.com",
    storageBucket: "nicksucksatjscoding.appspot.com",
    messagingSenderId: "109045988051"
  };

  firebase.initializeApp(config);
  
  var database = firebase.database();
  var snakeOne = database.ref('snake/snake1');
  var snakeTwo = database.ref('snake/snake2');
  */
}

function draw() {
//  ellipse(50, 50, 80, 80);
 frameCount++;
 snake.keyPressed();
 if(frameCount%40==0){
 background(0);
 food.show();
 snake.show();
 snake.snakeEat(food);
 snake.turn();
 }
}
