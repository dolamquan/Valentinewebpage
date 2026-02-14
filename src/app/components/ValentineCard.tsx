import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, PartyPopper } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import loopyImg from "figma:asset/a4c8124db710634f4fff530ab32a7e2b805262c9.png";

interface ValentineCardProps {
  onAccept: () => void;
}

export const ValentineCard: React.FC<ValentineCardProps> = ({ onAccept }) => {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [noCount, setNoCount] = useState(0);

  const moveButton = () => {
    const newX = (Math.random() - 0.5) * 300;
    const newY = (Math.random() - 0.5) * 300;
    setNoButtonPos({ x: newX, y: newY });
    setNoCount(prev => prev + 1);
  };

  const getNoButtonText = () => {
    const texts = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely sure?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;("
    ];
    return texts[Math.min(noCount, texts.length - 1)];
  };

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-pink-100 max-w-md w-full text-center relative z-10"
    >
      <div className="mb-6 relative inline-block">
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          <ImageWithFallback
            src={loopyImg}
            alt="Valentine Loopy"
            className="w-48 h-48 object-cover rounded-2xl shadow-lg mx-auto"
          />
          <Heart className="absolute -top-4 -right-4 text-red-500 fill-red-500 w-10 h-10 -rotate-12 drop-shadow-md" />
          <Heart className="absolute -bottom-2 -left-4 text-pink-400 fill-pink-400 w-8 h-8 rotate-12 drop-shadow-md" />
        </motion.div>
      </div>

      <h1 className="text-4xl font-bold text-pink-600 mb-2">Will you be my</h1>
      <h2 className="text-5xl font-extrabold text-red-500 mb-8 drop-shadow-sm">Valentine?</h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 min-h-[100px]">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onAccept}
          className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg transition-colors flex items-center gap-2 cursor-pointer z-20"
        >
          Yes! <Heart className="w-6 h-6 fill-white" />
        </motion.button>

        <motion.button
          animate={{ x: noButtonPos.x, y: noButtonPos.y }}
          onHoverStart={moveButton}
          onClick={moveButton}
          className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-8 py-4 rounded-full font-semibold text-lg border border-gray-200 shadow-sm transition-colors cursor-pointer z-10"
        >
          {getNoButtonText()}
        </motion.button>
      </div>
    </motion.div>
  );
};
