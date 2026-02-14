import React, { useState } from 'react';
import { FloatingHeartsDecor } from './components/FloatingHearts';
import { ValentineCard } from './components/ValentineCard';
import { SuccessState } from './components/SuccessState';

export default function App() {
  const [accepted, setAccepted] = useState(false);

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-pink-50 via-red-50 to-pink-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background elements */}
      <FloatingHeartsDecor />
      
      {/* Abstract background blobs for extra simple beauty */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-red-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content */}
      {!accepted ? (
        <ValentineCard onAccept={() => setAccepted(true)} />
      ) : (
        <SuccessState />
      )}

      {/* Footer / Subtle Text */}
      <div className="absolute bottom-6 left-0 right-0 text-center z-10">
        <p className="text-pink-400 text-sm font-medium tracking-widest uppercase">
          Made with Love • 2026
        </p>
      </div>
    </main>
  );
}
