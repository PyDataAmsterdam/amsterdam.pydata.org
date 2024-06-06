import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import * as React from 'react'

export default function Globe() {
    const canvasRef = useRef();
  
    useEffect(() => {
      let phi = 0;
  
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 1.2,
        theta: 0.33,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 20000,
        mapBrightness: 5,
        baseColor: [223/225, 149/225, 80/225],
        markerColor: [0.91, 0, 0],
        glowColor: [1,1,1],
        markers: [
          // longitude latitude
          { location: [52.383181, 4.920513], size: 0.1 },
        ],
        onRender: (state) => {
          // Called on every animation frame.
          // `state` will be an empty object, return updated params.
          state.phi = phi;
          phi += 0.008;
        }
      });
  
      return () => {
        globe.destroy();
      };
    }, []);
  
    return (
      <div className="Globe">
        <canvas
          ref={canvasRef}
          style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
        />
      </div>
    );
  }