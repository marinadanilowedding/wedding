import React from 'react';

interface GlobalHeaderProps {
  currentScreen: string;
  gameScore: number;
  scrollProgress: number;
  unlockedLevels?: number[];
}

export const GlobalHeader: React.FC<GlobalHeaderProps> = ({ 
  currentScreen, 
  gameScore, 
  scrollProgress, 
  unlockedLevels = [1] 
}) => {
  const getHeaderContent = () => {
    switch(currentScreen) {
      case 'home':
        return {
          left: `HIGH SCORE: ${gameScore.toLocaleString()}`,
          center: "CREDITS: ∞",
          right: "PLAYER: READY",
          borderColor: "border-yellow-400",
          leftColor: "text-yellow-400",
          centerColor: "text-cyan-400",
          rightColor: "text-red-400"
        };
      case 'menu':
        return {
          left: "SELECT STAGE",
          center: "LIVES: ♥♥♥",
          right: `SCORE: ${gameScore.toLocaleString()}`,
          borderColor: "border-yellow-400",
          leftColor: "text-yellow-400",
          centerColor: "text-cyan-400",
          rightColor: "text-red-400"
        };
      case 'story':
        return {
          left: "CHARACTER SELECT",
          center: `PROGRESS: ${Math.floor(scrollProgress)}%`,
          right: `SCORE: ${gameScore.toLocaleString()}`,
          borderColor: "border-green-400",
          leftColor: "text-green-400",
          centerColor: "text-cyan-400",
          rightColor: "text-yellow-400"
        };
      case 'timeline':
        return {
          left: "LOVE TIMELINE",
          center: `PROGRESS: ${Math.floor(scrollProgress)}%`,
          right: `SCORE: ${gameScore.toLocaleString()}`,
          borderColor: "border-blue-400",
          leftColor: "text-blue-400",
          centerColor: "text-cyan-400",
          rightColor: "text-yellow-400"
        };
      case 'event':
        return {
          left: "⚠️ BOSS LEVEL ⚠️",
          center: `PROGRESS: ${Math.floor(scrollProgress)}%`,
          right: "LIVES: ♥♥♥",
          borderColor: "border-red-400",
          leftColor: "text-red-400 animate-pulse",
          centerColor: "text-yellow-400",
          rightColor: "text-green-400"
        };
      default:
        return {
          left: "GAME",
          center: "READY",
          right: "START",
          borderColor: "border-white",
          leftColor: "text-white",
          centerColor: "text-white",
          rightColor: "text-white"
        };
    }
  };

  const headerData = getHeaderContent();

  return (
    <div className={`fixed top-2 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm ${headerData.borderColor} border-b-4`}>
      <div className="flex flex-col sm:flex-row justify-between items-center p-4 gap-2">
        <div className={`${headerData.leftColor} text-sm sm:text-lg font-bold`}>
          {headerData.left}
        </div>
        <div className={`${headerData.centerColor} text-sm sm:text-lg font-bold`}>
          {headerData.center}
        </div>
        <div className={`${headerData.rightColor} text-sm sm:text-lg font-bold`}>
          {headerData.right}
        </div>
      </div>
    </div>
  );
};