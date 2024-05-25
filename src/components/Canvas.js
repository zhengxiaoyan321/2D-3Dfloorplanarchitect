import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas('floor-plan-canvas');
    canvasRef.current = canvas;

    // Initialize canvas settings and add event listeners here

    return () => {
      canvas.dispose();
    };
  }, []);

  return <canvas id="floor-plan-canvas" width="800" height="600"></canvas>;
};

export default Canvas;
