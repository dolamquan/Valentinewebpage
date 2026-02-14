import React from 'react';
import { motion } from 'motion/react';
import { Heart, Stars, PartyPopper } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import loopyImg from "../../assets/46708ecc647dfadd2bc5c92fd517fc50b2c56669.png";

export const SuccessState = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-pink-200 max-w-lg w-full text-center relative z-10"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="relative inline-block">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ImageWithFallback
              src={loopyImg}
              alt="Happy Loopy Celebration"
              className="w-64 h-64 object-cover rounded-full border-8 border-pink-100 shadow-xl mx-auto"
            />
          </motion.div>
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg"
          >
            <PartyPopper className="text-yellow-500 w-8 h-8" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h1 className="text-5xl font-black text-pink-600 mb-4 flex items-center justify-center gap-3">
          Yay! <Heart className="w-12 h-12 fill-red-500 text-red-500" />
        </h1>
        <p className="text-2xl text-gray-700 font-bold">
          Loopy is so happy! 💖
        </p>
        <p className="text-lg text-pink-500 mt-4 italic">
          It's a date!
        </p>
      </motion.div>

      <div className="mt-8 flex justify-center gap-4">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: i * 0.3 
            }}
          >
            <Stars className="text-yellow-400 w-6 h-6" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
