//defaults
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

//width height adjustments
canvas.width = innerWidth;
canvas.height = innerHeight;

//making rectangles
// context.fillStyle = "rgba(255, 0, 0, .5)";
// context.fillRect(100, 100, 100, 100);
// context.fillStyle = "rgba(0, 255, 0, .5)"
// context.fillRect(400, 100, 100, 100);
// context.fillStyle = "rgba(0, 0, 255, .5)"
// context.fillRect(300, 300, 100, 100);

// canvas objects:
// 1. Rectangles
// 2. Lines
// 3. Arcs/Circles
// 4. Bezier Curves
// 5. Images
// 6. Text

// Lines

// context.beginPath();
// context.strokeStyle = '#fa34a3';
// context.moveTo(50, 300);
// context.lineTo(300, 100);
// context.lineTo(400, 300);
// context.stroke();

//arc / circle
// context.arc(x,y,radius,startAngle (radians 0 just means 3 o'clock position),endAngle (radians 2 * Math.PI is 360 degrees),anticlockwise (boolean)
// );


//mouse object
const mouse = {
    x: undefined,
    y: undefined
}

//cirlce object
function circle (x = 200, y = 200, radius = 30, dx = Math.random() * 4, dy = Math.random() * 4) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
};

circle.prototype.draw = function () {
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.fill();
};

circle.prototype.update = function () {
    //make sure balls don't bounce outside of edges on left and right
    if (this.x - this.radius < 0 || this.x + this.radius > innerWidth) {
        this.dx = -this.dx;
    }

    //make sure balls don't bounce out top and bottom
    if (this.y - this.radius < 0 || this.y + this.radius > innerHeight) {
        this.dy = -this.dy;
    }

    //change the x and y directions when edge is hit
    this.x += this.dx;
    this.y += this.dy;

    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50 && this.radius < 40) {
        this.radius += 1;
    } else if (this.radius > 10) {
        this.radius -= 1;
    }

    //draws the circle
    this.draw();
}

//create array for many circles
const circleArray = [];

//push new instances of circles to array
for (i = 0; i < 200; i++) {
    circleArray.push(new circle(Math.floor(Math.random() * (innerWidth - 30 * 2)) + 30, Math.floor(Math.random() * (innerHeight - 30 * 2)) + 30));
}

//create repeated animate function
function animate() {
    requestAnimationFrame(this.animate.bind(this));
    context.clearRect(0, 0, innerWidth, innerHeight);
    circleArray.forEach((circle) => {
        circle.update();
    });
};

//start animation!!!
animate();





window.addEventListener('mousemove', (e) => {
    console.log(mouse);
    mouse.x = e.x;
    mouse.y = e.y;
});




