import React, { useEffect, useRef } from 'react';
import * as THREE from 'three'; // Import THREE.js
import WAVES from 'vanta/dist/vanta.rings.min';
const VantaBackground = () => {
  const vantaRef = useRef(null); // Create a ref for the container div

  useEffect(() => {
    // Attach Three.js to the global window object
    window.THREE = window.THREE || THREE;

    // Initialize Vanta.js RINGS effect
    const vantaEffect = window.VANTA.NET({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
    });

    // Cleanup effect on component unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} style={{ width: '100%', height: '100vh' }} />;
};

export default VantaBackground;
