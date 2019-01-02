// console.log("sanity check");

const canvas = document.getElementById('canvas'); //get element from dom
// console.log(canvas);
//canvas by itself is a "something" to draw on
//in JS we need a "context", which is like a brush

let context = canvas.getContext("2d");
// .rect() takes 4 args:
// 1. upper x 
// 2. upper y 
// 3. lower x 
// 4. lower y 
// context.rect(100,100, 300, 300);
// context.stroke();

// context.moveTo(100,100);
// context.lineTo(400,400);
// context.lineTo(400,100);
// context.lineTo(100,400);
// context.lineTo(100,100);
// context.stroke();

// context.beginPath();
//1. x coord for center
//2. y coord for center
//3. radius in pix
//4. place to start(0 = 3:00)
//5. place to end (every 90 deg is a half PI)
// context.arc(400, 200, 100, 0, 1.5 * Math.PI);
// context.stroke();
// context.fillStyle = '#0044ff';
// context.fill();
// context.strokeStyle = '#ff0';
// context.lineWidth = 10;
// context.stroke();

//A contructor (code in JS for a class)
function Ball(x,y, r){
    //inside constructor, keyword is "this"
    this.x = x;
    this.y = y;
    //sr = starting radians
    this.sr = 0;
    //er = ending radians
    this.er = Math.PI * 2;
    // r = radius
    this.r = r;
    this.xDirection = 1;
    this.yDirection = 1;
    this.randX = Math.random() * 25;
    this.randY = Math.random() * 25;
}

// Ball.prototype.drawBall = function(){
//     context.beginPath();
//     context.arc(this.x, this.y, this.r, this.sr, this.er);
//     context.fillStyle = '#fff'
//     context.fill();
// }

Ball.prototype.updateBallPosition = function(){
    //clearRect takes 4 args: topx, topy, bottx, botty...wipe
    // context.clearRect(0,0,500,500);
    if(this.x >=450){
        this.xDirection = -this.xDirection;
    }else if(this.x <= 50){
        this.xDirection = -this.xDirection;
    }if(this.y >= 450){
        this.yDirection = -this.yDirection;
    }else if(this.y <= 50){
        this.yDirection = -this.yDirection;
    }
    // this.drawBall();
    this.x += this.randX * this.xDirection;
    this.y += this.randY * this.yDirection;
}

function drawBalls(){
    context.clearRect(0,0,500,500);
    bouncyBalls.forEach((ball)=>{
        context.beginPath();
        context.arc(ball.x, ball.y, ball.r, ball.sr, ball.er);
        context.fill();  
    });
}

aBall = new Ball(200,150,50);
anotherBall = new Ball(400, 400, 50);
thirdBall = new Ball(350, 250, 50);

let bouncyBalls = [aBall,anotherBall,thirdBall];

bouncyBalls.forEach((currBall)=>{
    setInterval(()=>{
        currBall.updateBallPosition();
    },33);
});

setInterval(drawBalls,33);


// aBall.drawBall();
// anotherBall.drawBall();
// thirdBall.drawBall();