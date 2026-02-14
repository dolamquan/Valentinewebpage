import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Stars } from 'lucide-react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; delay: number; size: number }>>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * (30 - 15) + 15,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '110vh', x: `${heart.x}vw`, opacity: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 0.8, 0],
            rotate: [0, 45, -45, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear"
          }}
          className="absolute"
          style={{ width: heart.size, height: heart.size }}
        >
          <Heart 
            fill="currentColor" 
            className="text-pink-300/40 w-full h-full" 
          />
        </motion.div>
      ))}
    </div>
  );
};

export const FloatingHeartsDecor = FloatingHearts;
