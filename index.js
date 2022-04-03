
// frame rate : number of rerenderings by second.

// const context = createCanvas();


// const canvas = document.createElement('canvas');
// canvas.getContext

// setup phase - first render
// let xPosition = 0, yPosition = 0;
// createTriangle(context, xPosition, yPosition);
// createCircle(context, context.canvas.width / 2, context.canvas.height / 2, 50);
// createDisk(context, 20, 20, 20, '#ff0000')
// second render
// setTimeout(() => {
//     context.fillRect(0, 0, context.canvas.width, context.canvas.height);
//     createTriangle(context, 20, 20);
// }, 1000);


// third render
// setTimeout(() => {
//     context.fillRect(0, 0, context.canvas.width, context.canvas.height);
//     createTriangle(context, 40, 40);
// }, 2000);


// draw phase
// let frame = 0;
// setInterval(() => {
//     clearCanvas(context);
//     const red = (frame * 254) % 255;
//     const green = (frame * 2 * 253) % 255;
//     const blue = (frame * 3 * 252) % 255;
//     debugger;
//     const style = `rgb(${red}, ${green}, ${blue})`
//     createDisk(context, 20, 20, 20, style)
//     frame++;
// }, 16);



// 1s -> 1000ms;
// 60 frames per second ->  frame rerender each 16ms -> delta time;
