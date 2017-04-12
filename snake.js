var config = {
		xField : 600,
		yField : 600,
		size : 20
};

class Snake{
	constructor(){
		this.x=300;
		this.y=300;
		this.xSpeed=1;
		this.ySpeed=0;
		this.xField = config.xField;
		this.yField = config.yField;
		this.size = config.size;
		this.tail=[[280,300],[260,300]];
		this.grow=false;
	}

	turn(){
		if (this.x <= 0 && this.xSpeed < 0)
			this.gameOver();
		else if (this.x >= this.xField-this.size && this.xSpeed > 0)
			this.gameOver();
		if(this.y <= 0 && this.ySpeed < 0)
			this.gameOver();
		else if (this.y >= this.yField-this.size && this.ySpeed > 0)
			this.gameOver();

		if(this.grow === true){
			this.grow=false; this.tail.unshift([this.x,this.y]);} 
		else if(this.tail)
			{this.tail.unshift([this.x,this.y]);
			this.tail.pop();}


		this.x+=this.xSpeed * this.size;
		this.y+=this.ySpeed * this.size;

		for (var i = 0; i < this.tail.length; i++) {
			console.log(this.tail[i][0], this.tail[i][1]);
			if(this.x  == this.tail[i][0] && this.y  == this.tail[i][1])
			 {this.gameOver(); break;}
		};
	}

	show(){
		fill(255);
		rect(this.x,this.y,this.size,this.size);
		fill(200);
		for (var i = 0; i < this.tail.length; i++) {
			rect(this.tail[i][0],this.tail[i][1],this.size,this.size);
		}
		//console.log(this.tail);
	}
	keyPressed(){

		var direction = [this.xSpeed,this.ySpeed];

		if(keyCode === UP_ARROW){
			this.xSpeed = 0; this.ySpeed = -1;}
		else if(keyCode === DOWN_ARROW){
			this.xSpeed = 0; this.ySpeed = 1;}
		else if(keyCode === LEFT_ARROW){
			this.xSpeed = -1; this.ySpeed = 0;}				
		else if(keyCode === RIGHT_ARROW){
			this.xSpeed = 1; this.ySpeed = 0;}

		if ((this.xSpeed * this.size + this.x) == this.tail[0][0] && (this.ySpeed * this.size + this.y) == this.tail[0][1]){
			this.xSpeed = direction[0];
			this.ySpeed = direction[1];
		} 
	}
	snakeEat(food){
		if (this.x==food.x*this.size && this.y==food.y*this.size){
			this.checkFood(food);
			this.grow = true;
		}
	}
	checkFood (food){
		function check(food){
	 	if (this.x==food.x && this.y==food.y) return true;
	 	for (var i = 0; i < this.tail.length; i++) {
	 		if(this.tail[i][0] == food.x && this.tail[i][1] == food.y)
	 			return true; 
	 	}
	 	return false;}
		do{food.newFood();} while (check.call(this,food));
	}
	rest(){
		this.x=300;
		this.y=300;
		this.xSpeed=1;
		this.ySpeed=0;
		this.xField = config.xField;
		this.yField = config.yField;
		this.size = config.size;
		this.tail=[[280,300],[260,300]];
		this.grow=false;
		keyCode=RIGHT_ARROW;
	}// задебажить rest is not a function
	gameOver(){
		console.log('fuck u asshole');
		textSize(40);
		textAlign(CENTER);
		text("GAME OVER \n click to try again",200 , 200, 255);
		console.log("stop");
		noLoop();
		this.waitForPress();
		this.rest();
	}
	waitForPress(){
		console.log(mouseIsPressed, " " ,this.x);
		if (!mouseIsPressed){
			return setTimeout(this.waitForPress.bind(this),20);}
		else{
			return loop();
		}
	}

}

class Food{
	constructor(){
		this.x = Math.floor(Math.random()*(config.xField/config.size));
		this.y = Math.floor(Math.random()*(config.yField/config.size));  
	}

	show (){
		fill (220,100,100);
		rect(this.x * config.size,this.y * config.size, config.size, config.size);
	}
	newFood(){
			this.x = Math.floor(Math.random()*(config.xField/config.size));
			this.y = Math.floor(Math.random()*(config.yField/config.size)); 
	}
}