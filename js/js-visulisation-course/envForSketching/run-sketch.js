const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [2048, 2048],
  suffix: Date.now(), // To ensure unique output files
  exportFolder: './output', // Specify the export folder
  exportPixelRatio: 2, // Export at higher resolution if desired
  export: true, // Enable export
  file: {
    extension: 'js', // File extension for the output
  },
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';
    context.font = '200px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('Hello', width / 2, height / 2);
  };
};

canvasSketch(sketch, settings);
