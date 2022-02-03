const canvasSketch = require('canvas-sketch');

const settings = {
 dimensions: [ 1200, 1200 ]
};

//Example 1 - using loops and squares

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const w = 100;
    const h = 100; 
    const gap = 80;
    let x, y;

    for (let i = 0; i < 5; i++) {
      for(let j = 0; j < 5; j++) {
        x = 175 + (w + gap) * i;
        y = 175 + (h + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.strokeStyle = 'black';
        context.lineWidth = 5;
        context.stroke();

//Draw another square inside the other squares
/*
        if (Math.random() > 0.5) {
        context.beginPath();
        context.rect(x + 25, y + 25, w - 50, h - 50);
        context.stroke();
        }
*/
      }
    } 

  };
};




//Example 2 - drawing a circle
//https://www.w3schools.com/tags/canvas_arc.asp


//Challenge: Create bubbles - random x,y positions and random radius so circles are different sizes.


// const sketch = () => {
//   return ({ context, width, height }) => {
//     context.fillStyle = 'white';
//     context.fillRect(0, 0, width, height);
    
//         context.save();
//         context.beginPath();
//         context.arc(300,300, 100, 0, Math.PI * 2);  
//         context.strokeStyle = 'blue';
//         context.lineWidth = 5;
//         context.stroke();
//         context.restore();  

//         context.save();
//         context.beginPath();
//         context.arc(800,800, 200, 0, Math.PI * 2);  
//         context.strokeStyle = 'black';
//         context.lineWidth = 10;
//         context.stroke();
//         context.restore();

      
      
//     }
    


//Let's sketch something together here:


// const sketch = () => {
//   return ({ context, width, height }) => {
//     context.fillStyle = 'white';
//     context.fillRect(0, 0, width, height);
//   };
// };

  

canvasSketch(sketch, settings);
