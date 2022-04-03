
// frame rate : number of rerenderings by second.

const context = createCanvas();
// const canvas = document.createElement('canvas');

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

function calculateHSL(angle) {
    return `hsl(${angle}, 100%, 50%)`
}

// draw phase
let frame = 0;
setInterval(() => {
    clearCanvas(context);
    const angle = frame % 360;

    createDisk(context, 400, 20, 20, calculateHSL(frame % 360))
    // createDisk(context, 400, 20, 20, calculateHSL(frame % 360))
    // createDisk(context, 60, 20, 20, calculateHSL((frame + 15) % 360))
    // createDisk(context, 100, 20, 20, calculateHSL((frame + 30) % 360))
    frame++;
}, 20);


// 1s -> 1000ms;
// 60 frames per second ->  frame rerender each 16ms -> delta time;
