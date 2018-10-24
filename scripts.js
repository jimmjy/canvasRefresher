//defaults
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

//width height adjustments
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// context.fillStyle = "rgba(255, 0, 0, .5)";
// context.fillRect(100, 100, 100, 100);
// context.fillStyle = "rgba(0, 255, 0, .5)"
// context.fillRect(400, 100, 100, 100);
// context.fillStyle = "rgba(0, 0, 255, .5)"
// context.fillRect(300, 300, 100, 100);

// // canvas objects:
// // 1. Rectangles
// // 2. Lines
// // 3. Arcs/Circles
// // 4. Bezier Curves
// // 5. Images
// // 6. Text

// // Lines

// context.beginPath();
// context.strokeStyle = '#fa34a3';
// context.moveTo(50, 300);
// context.lineTo(300, 100);
// context.lineTo(400, 300);
// context.stroke();

// //arc / circle
// // context.arc(x,y,radius,startAngle (radians 0 just means 3 o'clock position),endAngle (radians 2 * Math.PI is 360 degrees),anticlockwise (boolean)
// // );

// for (i = 0; i < 30; i++) {
//     context.beginPath();
//     context.arc((Math.random() * window.innerWidth) + 30, Math.random() * window.innerHeight, 30, 0, Math.PI * 2, false);
//     context.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
//     context.stroke();
// }

// context.beginPath();
// context.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
// context.arc(200, 200, 30, 0, 2*Math.PI, false);
// context.stroke();

// let x = 30;
// let y = 30;
// let dy = 5;
// let dx = 5;
// let radius = 30;

// //Math.floor(Math.random() * (max - min)) + (min)
// // -4 / 10 Math.random() * 

// //recursive function
// function animate() {
//     requestAnimationFrame(animate);
//     context.beginPath();
//     context.clearRect(0, 0, innerWidth, innerHeight); // clears the whole canvas
//     context.strokeStyle = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
//     context.arc(x, y, radius, 0, 2 * Math.PI, false);
//     context.stroke();
//     x+=dx;
//     y+=dy;

//     if (x >= innerWidth - radius || x < radius) {
//         dx = -dx;
//     }

//     if (y >= innerHeight - radius || y < radius) {
//         dy = -dy;
//     }
// };

// animate();

function circle (x = 200, y = 200, radius = 30, dx = 3, dy = 3) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
};

circle.prototype.draw = function () {
    context.beginPath();
    context.clearRect(0, 0, innerWidth, innerHeight);
    context.strokeStyle = 'red';
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.stroke();
};

circle.prototype.animate = function () {    
    requestAnimationFrame(this.animate.bind(this));
    if (this.x < 0 + this.radius || this.x + this.radius > innerWidth) {
        this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
        this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
};

const newCircle = new circle ();
newCircle.animate()

