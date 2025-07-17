import React from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
}

interface StarBackgroundProps {
  stars: Star[];
  color?: string; // Colore base delle stelle, se varia
  gradient?: string; // Sfondo gradiente, se varia per schermata
}

export const StarBackground: React.FC<StarBackgroundProps> = ({ stars, color = 'bg-white', gradient }) => {
  return (
    <div className={`absolute inset-0 ${gradient || 'bg-gradient-to-b from-purple-900 via-blue-900 to-black'}`}>
      {stars.map(star => ( // 
        <div
          key={star.id}
          className={`absolute ${color} rounded-full animate-pulse`} // 
          style={{
            left: `${star.x}%`, // 
            top: `${star.y}%`, // 
            width: `${star.size}px`, // 
            height: `${star.size}px` // 
          }}
        />
      ))}
    </div>
  );
};