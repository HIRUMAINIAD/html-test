const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const blkSize = 30;

//　各ブロックの種類、色を定義する
let shapeA = [[1,1,1,0],[0,1,0,0]];
let shapeB = [[1,1,1,1],[0,0,0,0]];
let shapeC = [[1,1,1,0],[0,0,1,0]];
let shapeD = [[1,1,1,0],[1,0,0,0]];
let shapeE = [[1,1,0,0],[1,1,0,0]];
let shapeF = [[1,1,0,0],[0,1,1,0]];

let colorA = "#00FFFF";
let colorB = "#FF00FF";
let colorC = "#FFFF00";
let colorD = "#FF0000";
let colorE = "#00FF00";
let colorF = "#0000FF";

// キーボード操作
document.body.onkeydown = function( e ) {
    const keys = {
        37: 'left',
        39: 'right',
        40: 'down',
        38: 'rotate',
        32: 'drop'
    };
    if ( typeof keys[ e.keyCode ] != 'undefined' ) {
        keyPress( keys[ e.keyCode ] );
    }
};





// 各ブロックを描画する
function drawBlock(shape,color,blkSize,offsetX, offsetY){
    for(let i=0; i<shape.length; i++){
        for(let j=0; j<shape[i].length; j++){
            if(shape[i][j]===1){
                ctx.beginPath();
                ctx.rect(offsetX+blkSize*j, offsetY+blkSize*i, blkSize,blkSize);
                ctx.strokeRect(offsetX+blkSize*j, offsetY+blkSize*i, blkSize,blkSize);
                ctx.fillStyle = color;
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

let blkX = canvas.width / 2;
let blkY = 0;
let dx = 8;
let dy = 2;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBlock(shapeB,colorB,blkSize,blkX,blkY);

    blkY += dy;
    if((blkY+dy + blkSize*2) > canvas.height){
        dy = 0;
    } 
}
function keyPress( key ) {
    switch( key ){
        case "left":
            console.log("pushed left");
            if(blkX-dx >= 0){
                blkX -= dx;
            }
            break;
        case "right":
            console.log("pushed right");
            blkX += dx;

    }
}

const drawIntervalKey = setInterval(draw, 20);
  