import React, { useEffect, useRef } from 'react';

// 1. Define the shape of our data
interface Point3D {
  x: number;
  y: number;
  z: number;
}

const Projects: React.FC = () => {
  // 2. Type the ref to hold an HTMLCanvasElement (initially null)
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // 3. Safety check: TS warns that canvas might be null here
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return; // Safety check for context


    // Configuration
    const width = 400;
    const height = 400;
    const cubeSize = 100;
    const dotDensity = 0.15; 
    
    // Handle High-DPI (Retina) displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
    
    // CSS styling for display size
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // --- PRE-CALCULATE POINTS ---
    // 4. Type the array to hold Point3D objects
    const points: Point3D[] = [];
    const numStars = 300; // How many stars?

    const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;

    for (let i = 0; i < numStars; i++) {
    points.push({
        x: randomRange(-cubeSize, cubeSize),
        y: randomRange(-cubeSize, cubeSize),
        z: randomRange(-cubeSize, cubeSize)
    });
    }

    // Animation State
    let animationFrameId: number;
    let rotationX = 0;
    let rotationY = 0;

    // --- THE RENDER LOOP ---
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);

      ctx.fillStyle = '#ffc508ff'; 
      
      points.forEach(point => {
        // Rotation X
        let y = point.y * cosX - point.z * sinX;
        let z = point.y * sinX + point.z * cosX;
        
        // Rotation Y
        let x = point.x * cosY + z * sinY;
        z = -point.x * sinY + z * cosY;

        // Projection
        const fov = 300; 
        const zOffset = 400; 
        const scale = fov / (z + zOffset);
        
        const x2d = x * scale + width / 2;
        const y2d = y * scale + height / 2;

        const size = Math.max(0.5, 2 * scale); 

        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        ctx.fill();
      });

      rotationX += 0.01;
      rotationY += 0.015;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div style={{
      background: 'black',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Projects;