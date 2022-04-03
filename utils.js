
// --------------------------- UTILITIES -----------------------------------
/**
 * @return {CanvasRenderingContext2D}
 */
function createCanvas() {
    const canvas = document.getElementById("render-screen");
    return canvas.getContext("2d");
}

/**
 * @param {CanvasRenderingContext2D} context
 */
function createTriangle(context, x, y) {
    context.fillStyle = "#fff";
    context.strokeStyle = "#ff5400";
    context.beginPath();
    context.moveTo(x, y);
    // context.moveTo(400, 0);
    context.lineTo(x + 100, y + 100);
    context.lineTo(x + 200, y);
    context.closePath();
    context.fill();
    context.stroke();
}

/**
 * @param {CanvasRenderingContext2D} context
 */
function createCircle(context, x, y, r) {
    context.strokeStyle = "#ff5400";
    context.moveTo(x, y);
    context.beginPath();
    // context.moveTo(400, 0);
    context.arc(x, y, r, 0, Math.PI * 2, true);
    context.closePath();
    context.stroke();
}

/**
 * @param {CanvasRenderingContext2D} context
 */
function createDisk(context, x, y, r, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, true);
    context.fill();
}

/**
 * @param {CanvasRenderingContext2D} context
 */
function clearCanvas(context) {
    context.fillStyle = '#fff';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.fill();
} 