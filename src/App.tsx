import React, { useState, useEffect } from 'react';

import { HomePage } from './components/HomePage';
import { MainMenu } from './components/MainMenu';
import { OurStory } from './components/OurStory';
import { Timeline } from './components/Timeline';
import Event from './components/Event';
import { GlobalHeader } from './components/GlobalHeader';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
}

const WeddingGame: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<string>('home');
  const [stars, setStars] = useState<Star[]>([]);
  const [gameScore, setGameScore] = useState<number>(0);
  const [unlockedLevels, setUnlockedLevels] = useState<number[]>([1]);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [playerName, setPlayerName] = useState<string>('');

  // Inizializzazione delle stelle
  useEffect(() => {
    const newStars: Star[] = [];
    for (let i = 0; i < 50; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.3
      });
    }
    setStars(newStars);
  }, []);

  // Animazione delle stelle
  useEffect(() => {
    const interval = setInterval(() => {
      setStars(prevStars =>
        prevStars.map(star => ({
          ...star,
          y: star.y > 100 ? -5 : star.y + star.speed
        }))
      );
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Gestione dello scroll per la progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentScreen]);

  // Resetta lo scroll e il progresso quando la schermata cambia
  useEffect(() => {
    window.scrollTo(0, 0);
    setScrollProgress(0);
  }, [currentScreen]);

  const unlockLevel = (level: number) => {
    if (!unlockedLevels.includes(level)) {
      setUnlockedLevels(prev => [...prev, level].sort((a, b) => a - b));
      setGameScore(prev => prev + 1000);
    }
  };

  const isLevelUnlocked = (level: number): boolean => {
    return unlockedLevels.includes(level);
  };

  const handleLevelClick = (level: number, screen: string) => {
    if (isLevelUnlocked(level)) {
      setGameScore(prev => prev + 500);
      setCurrentScreen(screen);

      // Sblocco immediato del livello successivo
      if (level === 1 && !isLevelUnlocked(2)) {
        unlockLevel(2);
      } else if (level === 2 && !isLevelUnlocked(3)) {
        // Il livello 3 viene sbloccato solo completando la timeline
        // Non sbloccare automaticamente qui
      }
    }
  };

  const renderCurrentScreen = () => {
    switch(currentScreen) {
      case 'home':
        return <HomePage 
          setCurrentScreen={setCurrentScreen} 
          setGameScore={setGameScore} 
          stars={stars} 
          scrollProgress={scrollProgress}
          gameScore={gameScore}
          playerName={playerName}
          setPlayerName={setPlayerName}
        />;
      case 'menu':
        return <MainMenu
          gameScore={gameScore}
          unlockedLevels={unlockedLevels}
          isLevelUnlocked={isLevelUnlocked}
          handleLevelClick={handleLevelClick}
          setCurrentScreen={setCurrentScreen}
          stars={stars}
        />;
      case 'story':
        return <OurStory 
          gameScore={gameScore}
          scrollProgress={scrollProgress}
          setCurrentScreen={setCurrentScreen}
          setGameScore={setGameScore}
          stars={stars}
        />;
      case 'timeline':
        return <Timeline 
          gameScore={gameScore} 
          scrollProgress={scrollProgress} 
          setCurrentScreen={setCurrentScreen} 
          setGameScore={setGameScore}
          unlockLevel={unlockLevel}
          stars={stars} 
        />;
      case 'event':
        return <Event 
          setGameScore={setGameScore} 
          scrollProgress={scrollProgress} 
          setCurrentScreen={setCurrentScreen} 
          playerName={playerName}
          stars={stars} 
        />;
      default:
        return <HomePage 
          setCurrentScreen={setCurrentScreen} 
          setGameScore={setGameScore} 
          stars={stars} 
          scrollProgress={scrollProgress}
          gameScore={gameScore}
          playerName={playerName}
          setPlayerName={setPlayerName}
        />;
    }
  };

  return (
    <div className="wedding-game-app">
      {/* PROGRESS BAR GLOBALE FISSA - Sempre visibile in alto */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full h-2 bg-gray-800">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-yellow-400 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
      
      {/* HEADER GLOBALE FISSO */}
      <GlobalHeader 
        currentScreen={currentScreen}
        gameScore={gameScore}
        scrollProgress={scrollProgress}
        unlockedLevels={unlockedLevels}
      />
      
      {/* CONTENUTO CON PADDING TOP per non coprire progress bar e header */}
      <div className="pt-20">
        {renderCurrentScreen()}
      </div>
    </div>
  );
};

export default WeddingGame;