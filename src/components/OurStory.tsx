import React from 'react';
import { StarBackground } from './common/StarBackground';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
}

interface OurStoryProps {
  gameScore: number;
  scrollProgress: number;
  setCurrentScreen: (screen: string) => void;
  setGameScore: (callback: (prev: number) => number) => void;
  stars: Star[];
}

export const OurStory: React.FC<OurStoryProps> = ({ gameScore, scrollProgress, setCurrentScreen, setGameScore, stars }) => {
  const handleNextLevel = () => {
    setGameScore(prev => prev + 1000); // Bonus per il passaggio diretto
    setCurrentScreen('timeline');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-mono">
      {/* SFONDO - IMMAGINE LEVEL1 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/img/level1/sfondo.jpeg')`,
          filter: 'brightness(0.7) contrast(1.1)'
        }}
      >
        <div className="absolute inset-0 bg-black/35"></div>
      </div>

      {/* Stelle animate sopra l'immagine */}
      <StarBackground stars={stars} gradient="bg-transparent" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 px-4 py-8">
          <h1 className="text-4xl sm:text-5xl font-black text-center mb-12 text-green-400">CHARACTER PROFILES</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Marina - SEMPRE VISIBILE */}
            <div className="bg-black/90 border-4 border-cyan-400 p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <div className="text-4xl font-black text-cyan-400 mb-2">PLAYER 1</div>
                <div className="w-32 h-32 mx-auto border-4 border-pink-400 bg-pink-600 mb-4 relative overflow-hidden rounded-lg">
                  <img 
                    src={`${process.env.PUBLIC_URL}/img/level1/marina.JPG`}
                    alt="Marina" 
                    className="w-full h-full object-cover"
                    style={{ imageRendering: 'pixelated' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-black relative flex items-center justify-center text-6xl">
                            📸
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <div className="text-3xl font-black text-pink-400">MARINA</div>
                <div className="text-xl text-yellow-400">FOTOGRAFA NINJA</div>
              </div>

              <div className="space-y-4 text-cyan-100">
                <div className="bg-cyan-900 bg-opacity-50 border-2 border-cyan-600 p-4">
                  <div className="text-cyan-400 font-black mb-2">STATS:</div>
                  <div>CREATIVITÀ: ████████░░</div>
                  <div>VELOCITÀ: █████████░</div>
                  <div>PRECISIONE: ████████░░</div>
                </div>

                <div className="bg-cyan-900 bg-opacity-50 border-2 border-cyan-600 p-4">
                  <div className="text-cyan-400 font-black mb-2">SPECIAL MOVES:</div>
                  <div>• MAGIC SHOT (foto WOW garantite)</div>
                  <div>• SUPER SPRINT (scatto ninja istantaneo)</div>
                  <div>• MOSH PIT MASTER (boss della folla scatenata)</div>
                </div>
              </div>
            </div>

            {/* Danilo - SEMPRE VISIBILE */}
            <div className="bg-black/90 border-4 border-purple-400 p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <div className="text-4xl font-black text-purple-400 mb-2">PLAYER 2</div>
                <div className="w-32 h-32 mx-auto border-4 border-blue-400 bg-blue-600 mb-4 relative overflow-hidden rounded-lg">
                  <img 
                    src={`${process.env.PUBLIC_URL}/img/level1/danilo.JPG`}
                    alt="Danilo" 
                    className="w-full h-full object-cover"
                    style={{ imageRendering: 'pixelated' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-black relative flex items-center justify-center text-6xl">
                            💻
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <div className="text-3xl font-black text-blue-400">DANILO</div>
                <div className="text-xl text-yellow-400">TECH WIZARD</div>
              </div>

              <div className="space-y-4 text-purple-100">
                <div className="bg-purple-900 bg-opacity-50 border-2 border-purple-600 p-4">
                  <div className="text-purple-400 font-black mb-2">STATS:</div>
                  <div>LOGICA: ██████████</div>
                  <div>PROBLEM SOLVING: █████████░</div>
                  <div>SUPPORTO: ████████░░</div>
                </div>

                <div className="bg-purple-900 bg-opacity-50 border-2 border-purple-600 p-4">
                  <div className="text-purple-400 font-black mb-2">SPECIAL MOVES:</div>
                  <div>• DEBUG MASTER (caccia-bug leggendario)</div>
                  <div>• TECH SUPPORT (eroe della tecnologia)</div>
                  <div>• ASTRO ADMIRER (ammiratore di costellazioni e aurore)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Formation - SEMPRE VISIBILE */}
          <div className="mt-12 max-w-4xl mx-auto bg-black/90 border-4 border-yellow-400 p-8 backdrop-blur-sm">
            <h3 className="text-3xl font-black text-center mb-6 text-yellow-400">TEAM FORMATION</h3>
            <div className="text-center text-yellow-100 text-lg">
              <div className="mb-4 text-2xl">PLAYER 1 + PLAYER 2 = PERFECT COMBO!</div>
              <div className="mb-4">Quando MARINA e DANILO uniscono le forze, diventano imbattibili!</div>
              <div className="text-cyan-400 text-xl">INSIEME HANNO COMPLETATO LA QUEST PIÙ IMPORTANTE: L'AMORE! 💖</div>
            </div>
          </div>

          {/* LEVEL COMPLETED SECTION */}
          <div className="mt-12 max-w-4xl mx-auto bg-black/90 border-4 border-green-400 p-8 backdrop-blur-sm">
            <h3 className="text-3xl font-black text-center mb-6 text-green-400 animate-pulse">
              🎉 LEVEL 1 COMPLETED! 🎉
            </h3>
            <div className="text-center text-green-100 text-lg mb-6">
              <div className="mb-4">HAI SBLOCCATO I PROFILI DEI PERSONAGGI!</div>
              <div className="text-yellow-400">BONUS: +1000 PUNTI</div>
            </div>
            
            {/* PROGRESS TO NEXT LEVEL */}
            <div className="bg-green-900 bg-opacity-50 border-2 border-green-600 p-4 mb-6">
              <div className="text-green-400 font-black mb-2 text-center">PROSSIMA MISSIONE:</div>
              <div className="text-center text-green-100">
                <div className="text-xl mb-2">🗺️ LEVEL 2: QUEST TIMELINE</div>
                <div>Esplora la storia d'amore di Marina e Danilo</div>
                <div className="text-cyan-400 mt-2">DIFFICOLTÀ: ★★★★☆</div>
              </div>
            </div>
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 pb-16">
            <button
              onClick={() => setCurrentScreen('menu')}
              className="bg-gray-700 border-4 border-gray-400 px-8 py-4 text-xl text-gray-100 hover:bg-gray-600 cursor-pointer select-none transform hover:scale-105 transition-all duration-200"
              type="button"
            >
              🅱️ BACK TO LEVEL SELECT
            </button>
            
            <button
              onClick={handleNextLevel}
              className="bg-gradient-to-r from-blue-600 to-purple-600 border-4 border-blue-400 px-8 py-4 text-xl text-white hover:from-blue-500 hover:to-purple-500 cursor-pointer select-none transform hover:scale-105 transition-all duration-200 animate-pulse"
              type="button"
            >
              ⚡ CONTINUE TO LEVEL 2 ⚡
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};