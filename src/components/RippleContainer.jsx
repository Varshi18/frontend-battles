import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RippleContainer = ({ children }) => {
  const [ripples, setRipples] = useState([]);
  const containerRef = useRef(null);
  const lastRippleTime = useRef(0);
  const throttleDelay = 100;

  const createRipple = useCallback((x, y) => {
    const now = Date.now();
    if (now - lastRippleTime.current < throttleDelay) return;

    const newRipple = { id: now, x, y };
    lastRippleTime.current = now;

    setRipples((prevRipples) => [...prevRipples, newRipple]);

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.filter((r) => r.id !== newRipple.id));
    }, 800);
  }, []);

  const handleClick = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      createRipple(x, y);
    }
  };

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      createRipple(x, y);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
    >
      {children}
      
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute h-24 w-24 rounded-full pointer-events-none z-50"
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: 'translate(-50%, -50%)', // Center the ripple at the mouse position
              background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0.1) 50%, rgba(139,92,246,0) 70%)',
            }}
            initial={{ opacity: 0.8, scale: 0 }}
            animate={{ opacity: 0, scale: 3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RippleContainer;