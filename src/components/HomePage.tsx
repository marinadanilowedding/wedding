import React from 'react';
import { Footer } from './common/Footer';
import { StarBackground } from './common/StarBackground';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
}

interface HomePageProps {
  setCurrentScreen: (screen: string) => void;
  setGameScore: (callback: (prev: number) => number) => void;
  stars: Star[];
  scrollProgress: number;
  gameScore: number;
  playerName: string;
  setPlayerName: (name: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentScreen, setGameScore, stars, scrollProgress, gameScore, playerName, setPlayerName }) => {
  const [inputName, setInputName] = React.useState(playerName);

  const handleStartGame = () => {
    if (inputName.trim()) {
      setPlayerName(inputName.trim());
      setGameScore(prev => prev + 1000);
      setCurrentScreen('menu');
    }
  };
  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-mono">
      {/* FONT RETRO GAMING IMPORTATO */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
          
          .retro-gaming-font {
            font-family: 'Orbitron', 'Courier New', monospace;
            font-weight: 900;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            text-shadow: 
              0 0 10px currentColor,
              0 0 20px currentColor,
              0 0 30px currentColor,
              2px 2px 0px rgba(0,0,0,0.8);
          }
          
          .retro-subtitle {
            font-family: 'Orbitron', 'Courier New', monospace;
            font-weight: 700;
            letter-spacing: 0.15em;
            text-transform: uppercase;
          }
        `
      }} />

      {/* SFONDO - USA IL PERCORSO PUBBLICO */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/img/homepage/sfondo.jpeg')`,
          filter: 'brightness(0.8) contrast(1.1)'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Stelle animate sopra l'immagine */}
      <StarBackground stars={stars} gradient="bg-transparent" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-4">

          <div className="mb-8 text-center">
            <div className="retro-gaming-font text-4xl sm:text-6xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 animate-pulse mb-4">
              A NERDY
            </div>
            <div className="retro-gaming-font text-3xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse">
              WEDDING STORY
            </div>
            <div className="retro-subtitle text-xl sm:text-2xl font-bold text-yellow-400 mt-4 animate-pulse">
              MARRIAGE EDITION
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-black/90 border-4 border-yellow-400 p-4 sm:p-8 relative backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-8 relative z-10">
                <div className="text-center">
                  <div className="text-3xl text-yellow-400 mb-2">P1</div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 relative overflow-hidden rounded-lg border-2 border-pink-400 bg-pink-600">
                    <img 
                      src={`${process.env.PUBLIC_URL}/img/homepage/marina.JPG`}
                      alt="Marina" 
                      className="w-full h-full object-cover"
                      style={{ imageRendering: 'pixelated' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.innerHTML = `
                            <div class="w-full h-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-black relative">
                              <div class="absolute top-2 left-3 w-2 h-2 bg-black rounded-full"></div>
                              <div class="absolute top-2 right-3 w-2 h-2 bg-black rounded-full"></div>
                              <div class="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-red-500 rounded"></div>
                              <div class="absolute top-1 left-1 right-1 h-3 bg-gradient-to-r from-pink-300 to-pink-500 rounded-t"></div>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                  <div className="text-pink-400 text-sm">MARINA</div>
                </div>

                <div className="text-4xl sm:text-6xl animate-bounce">💖</div>

                <div className="text-center">
                  <div className="text-3xl text-cyan-400 mb-2">P2</div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 relative overflow-hidden rounded-lg border-2 border-cyan-400 bg-cyan-600">
                    <img 
                      src={`${process.env.PUBLIC_URL}/img/homepage/danilo.JPG`}
                      alt="Danilo" 
                      className="w-full h-full object-cover"
                      style={{ imageRendering: 'pixelated' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.innerHTML = `
                            <div class="w-full h-full bg-gradient-to-br from-cyan-400 to-cyan-600 border-2 border-black relative">
                              <div class="absolute top-2 left-3 w-2 h-2 bg-black rounded-full"></div>
                              <div class="absolute top-2 right-3 w-2 h-2 bg-black rounded-full"></div>
                              <div class="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-red-500 rounded"></div>
                              <div class="absolute top-1 left-2 right-2 h-1 bg-black rounded"></div>
                              <div class="absolute top-1 left-1 right-1 h-3 bg-gradient-to-r from-cyan-300 to-cyan-500 rounded-t"></div>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                  <div className="text-cyan-400 text-sm">DANILO</div>
                </div>
              </div>
            </div>
          </div>

          {/* BOX INSERIMENTO NOME FAMIGLIA */}
          <div className="max-w-2xl mx-auto mb-12 p-6 bg-black/90 border-4 border-green-400 backdrop-blur-sm">
            <div className="text-green-400 text-center">
              <div className="text-yellow-400 mb-4 text-xl font-bold">*** MARRIAGE EDITION ***</div>
              <div className="text-lg mb-6 leading-relaxed">
                In un mondo dove l'amore è la più rara delle quest, due player si sono incontrati, 
                livellati insieme e hanno deciso di affrontare la missione finale: Il Matrimonio!
              </div>
              
              {!playerName ? (
                <div className="mb-6">
                  <div className="text-cyan-400 text-xl font-bold mb-4">
                    🎮 INSERISCI NOME FAMIGLIA PLAYER 🎮
                  </div>
                  <input
                    type="text"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    placeholder="Es: Famiglia Rossi"
                    className="w-full max-w-md px-4 py-3 bg-black/80 border-2 border-cyan-400 text-white text-center text-lg font-bold rounded-lg focus:border-yellow-400 focus:outline-none"
                    onKeyPress={(e) => e.key === 'Enter' && handleStartGame()}
                  />
                </div>
              ) : (
                <div className="text-cyan-400 text-xl font-bold animate-pulse mb-4">
                  Benvenuti, {playerName}! 
                  <br />Ora potete unirvi al party! 🎉
                </div>
              )}
            </div>
          </div>

          {playerName ? (
            <button
              onClick={() => {
                setGameScore(prev => prev + 1000);
                setCurrentScreen('menu');
              }}
              className="bg-red-600 border-4 border-yellow-400 px-12 py-6 hover:scale-105 active:scale-95 transition-transform duration-100 cursor-pointer select-none"
              type="button"
            >
              <div className="retro-gaming-font text-3xl text-yellow-400">INSERT COIN</div>
              <div className="text-xl text-white text-center mt-2">PRESS START</div>
            </button>
          ) : (
            <button
              onClick={handleStartGame}
              disabled={!inputName.trim()}
              className={`border-4 border-yellow-400 px-12 py-6 hover:scale-105 active:scale-95 transition-transform duration-100 cursor-pointer select-none ${
                inputName.trim() 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50'
              }`}
              type="button"
            >
              <div className="retro-gaming-font text-3xl text-yellow-400">REGISTER PLAYER</div>
              <div className="text-xl text-center mt-2">ENTER GAME</div>
            </button>
          )}

          <div className="mt-8 text-center text-yellow-400 text-sm">
            <div className="mb-2">⬅️ ➡️ ⬆️ ⬇️ MOVE</div>
            <div>🅰️ SELECT 🅱️ BACK</div>
          </div>
        </div>

        <Footer copyrightText="© 2025 MARINA & DANILO PRODUCTIONS" textColor="text-yellow-400" />
      </div>
    </div>
  );
};