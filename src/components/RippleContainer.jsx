import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RippleContainer = ({ children }) => {
  const [ripples, setRipples] = useState([]);
  const containerRef = useRef(null);

  const lastMouseMoveRippleTime = useRef(0);
  const mouseMoveThrottleDelay = 5;

  const createRipple = useCallback((x, y, isMouseMove = false) => {
    const now = Date.now();

    if (isMouseMove) {
      if (now - lastMouseMoveRippleTime.current < mouseMoveThrottleDelay) {
        return;
      }
      lastMouseMoveRippleTime.current = now;
    }

    const newRipple = { id: now, x: x, y: y };
    setRipples((prevRipples) => [...prevRipples, newRipple]); 

    const rippleDuration = 1200;

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.filter((r) => r.id !== newRipple.id));
    }, rippleDuration);
  }, []);

  const handleClick = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      console.log('Click:', { clientX: e.clientX, clientY: e.clientY, rectLeft: rect.left, rectTop: rect.top, calculatedX: x, calculatedY: y });
      createRipple(x, y, false);
    }
  };

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      createRipple(x, y, true);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full h-full"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
    >
      {children}
      
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute h-64 w-64 rounded-full pointer-events-none z-50" 
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)',
              background: 'radial-gradient(circle, rgba(119, 73, 222, 0.1) 0%, rgba(119, 73, 222, 0.03) 50%, rgba(119, 73, 222, 0) 100%)',
            }}
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 0, scale: 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.1, 0.8, 0.2, 1] }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RippleContainer;