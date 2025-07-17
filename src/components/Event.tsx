import React from 'react';
import { StarBackground } from './common/StarBackground';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
}

interface EventProps {
  setGameScore: (callback: (prev: number) => number) => void;
  scrollProgress: number;
  setCurrentScreen: (screen: string) => void;
  playerName: string;
  stars: Star[];
}

const Event: React.FC<EventProps> = ({ setGameScore, scrollProgress, setCurrentScreen, playerName, stars }) => {
  const [showCalendarMenu, setShowCalendarMenu] = React.useState(false);
  const [showVideoModal, setShowVideoModal] = React.useState(false);
  const [rsvpSubmitted, setRsvpSubmitted] = React.useState(false);
  const [rsvpData, setRsvpData] = React.useState({
    attending: '',
    guestCount: 1
  });

  const eventDetails = {
    title: 'BOSS BATTLE: Marina & Danilo Wedding Quest',
    startDate: '2025-10-18T11:00:00',
    endDate: '2025-10-18T23:00:00',
    location: 'Chiesa Beata Vergine Di Lourdes e S. Bernardetta, Via Lago Lucrino 1, 80147, NAPOLI, Italia',
    description: 'FINAL BOSS FIGHT! Player 1 & Player 2 completano la loro ultimate quest.'
  };

  const addToGoogleCalendar = () => {
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.startDate.replace(/[-:]/g, '').replace('.000', '')}/${eventDetails.endDate.replace(/[-:]/g, '').replace('.000', '')}&location=${encodeURIComponent(eventDetails.location)}&details=${encodeURIComponent(eventDetails.description)}`;
    window.open(googleCalendarUrl, '_blank');
    setShowCalendarMenu(false);
    setGameScore(prev => prev + 2000);
  };

  const addToOutlook = () => {
    const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(eventDetails.title)}&startdt=${eventDetails.startDate}&enddt=${eventDetails.endDate}&location=${encodeURIComponent(eventDetails.location)}&body=${encodeURIComponent(eventDetails.description)}`;
    window.open(outlookUrl, '_blank');
    setShowCalendarMenu(false);
    setGameScore(prev => prev + 2000);
  };

const handleRSVP = async () => {
  const endpoint = 'https://script.google.com/macros/s/AKfycbxmaEmH9eW8eZavDBQZGadN0Y20a9-dz0etz6_OJWb54fVa0V-eVWODJFe3TY5fetBQJg/exec';

  const data = {
    playerName,
    attending: rsvpData.attending,
    guestCount: rsvpData.guestCount
  };

  try {
    await fetch(endpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    setRsvpSubmitted(true);
    setGameScore(prev => prev + (rsvpData.attending === 'yes' ? 3000 : 1000));

  } catch (err: any) {
    alert('Errore di rete: ' + err.message);
  }
};


  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-mono">
      {/* SFONDO - NUOVO PERCORSO LEVEL3 MENO ZOOMATO */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/img/level3/sfondo.jpeg')`,
          backgroundSize: 'contain',
          filter: 'brightness(1.1) contrast(1.1) saturate(1.2)'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Stelle animate sopra l'immagine */}
      <StarBackground stars={stars} gradient="bg-transparent" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-black text-red-400 mb-4 animate-pulse">FINAL BOSS</h1>
            <h2 className="text-3xl font-black text-yellow-400">MATRIMONIO QUEST</h2>
            <div className="text-xl text-red-300 mt-4">DIFFICULTY: ★★★★★ LEGENDARY</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-black/90 border-4 border-red-400 p-6 backdrop-blur-sm">
                <h3 className="text-2xl font-black text-red-400 mb-4">🎯 MISSION BRIEFING</h3>
                <div className="text-red-100 space-y-2">
                  <div className="flex justify-between"><span>DATA MISSIONE:</span><span className="text-yellow-400">18-Ott 2025</span></div>
                  <div className="flex justify-between"><span>CERIMONIA:</span><span className="text-yellow-400">11:00</span></div>
                  <div className="flex justify-between"><span>PARTY:</span><span className="text-yellow-400">14:00</span></div>
                </div>
              </div>

              <div className="bg-black/90 border-4 border-purple-400 p-6 backdrop-blur-sm">
                <h3 className="text-2xl font-black text-purple-400 mb-4">📍 BATTLE LOCATIONS</h3>
                <div className="text-purple-100 space-y-4">
                  <div>
                    <div className="text-yellow-400 font-bold mb-1">STAGE 1: CERIMONIA</div>
                    <div className="text-sm">Chiesa Beata Vergine Di Lourdes e S. Bernardetta</div>
                    <div className="text-sm">Via Lago Lucrino 1, 80147, NAPOLI, Italia</div>
                  </div>
                  <div className="border-t border-purple-600 pt-3">
                    <div className="text-yellow-400 font-bold mb-1">STAGE 2: PARTY</div>
                    <div className="text-sm">Villa Althea</div>
                    <div className="text-sm">SP 333, 81041, Palombara, CE, Italia</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-black/90 border-4 border-yellow-400 p-6 backdrop-blur-sm">
                <h3 className="text-2xl font-black text-yellow-400 mb-4">🎮 PLAYER REQUIREMENTS</h3>
                <div className="text-yellow-100 space-y-2">
                  <div>• DRESS CODE: ELEGANTE</div>
                  <div>• EQUIPMENT: SORRISO + ENERGIA</div>
                  <div>• <span className="text-green-400 font-bold">TERMINE CONFERMA:</span> Prima che leviamo l'ancora</div>
                  <div>• PARKING: AVAILABLE</div>
                  <div className="text-green-400 mt-3">• MULTIPLAYER: RECOMMENDED!</div>
                </div>
              </div>

              <div className="bg-black/90 border-4 border-green-400 p-6 backdrop-blur-sm">
                <h3 className="text-2xl font-black text-green-400 mb-4">📞 SUPPORT TEAM</h3>
                <div className="text-green-100 space-y-2">
                  <div>PLAYER 1: 3312142638</div>
                  <div>PLAYER 2: 3496246978</div>
                  <div>EMAIL: marinaedanilowedding@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* FORZIERE DEL TESORO */}
          <div className="mt-12 max-w-4xl mx-auto bg-black/90 border-4 border-yellow-400 p-8 backdrop-blur-sm">
            <h3 className="text-3xl font-black text-center mb-6 text-yellow-400">💰 FORZIERE DEL TESORO</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Opzione 1: IBAN */}
              <div className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 border-2 border-yellow-400 p-6 rounded-lg">
                <h4 className="text-xl font-black text-yellow-400 mb-3">🏠 POTENZIAMENTO QUARTIER GENERALE</h4>
                <p className="text-yellow-100 mb-4 text-sm leading-relaxed">
                  Per potenziare il nostro quartier generale:
                </p>
                <div className="bg-black/50 p-3 rounded border border-yellow-400/50">
                  <div className="text-yellow-400 font-bold text-xs mb-1">IBAN (Danilo e Marina):</div>
                  <div className="text-white font-mono text-sm">IT55U0306939852100000014786</div>
                </div>
                <p className="text-yellow-200 text-xs mt-3 italic">
                  Un powerup per trovare il nostro checkpoint nel mondo
                </p>
              </div>

              {/* Opzione 2: Honeymoon */}
              <div className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 border-2 border-pink-400 p-6 rounded-lg">
                <h4 className="text-xl font-black text-pink-400 mb-3">🌴 MISSIONE HONEYMOON</h4>
                <p className="text-pink-100 mb-4 text-sm leading-relaxed">
                  Se invece vuoi contribuire alla nostra missione Honeymoon:
                </p>
                <button 
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 border-2 border-pink-400 px-4 py-3 text-white hover:from-pink-500 hover:to-purple-500 cursor-pointer select-none transform hover:scale-105 transition-all duration-200 rounded"
                  onClick={() => {
                    setShowVideoModal(true);
                    setGameScore(prev => prev + 1500);
                  }}
                >
                  🎥 GUARDA VIDEO AGENZIA
                </button>
                <p className="text-pink-200 text-xs mt-3 italic text-center">
                  Un contributo per esplorare templi antichi, giungle e acque turchesi
                </p>
              </div>
            </div>
          </div>

          {/* RSVP SECTION - NUOVO */}
          <div className="mt-12 max-w-4xl mx-auto bg-black/90 border-4 border-orange-400 p-8 backdrop-blur-sm">
            <h3 className="text-3xl font-black text-center mb-6 text-orange-400">🎯 CONFERMA PARTECIPAZIONE</h3>
            
            {!rsvpSubmitted ? (
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-6">
                  Ciao {playerName}! 👋
                </div>
                <div className="text-lg text-orange-100 mb-8">
                  Conferma la tua partecipazione alla nostra quest finale!
                </div>
                
                {/* Scelta SI/NO */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <button
                    onClick={() => setRsvpData({...rsvpData, attending: 'yes'})}
                    className={`p-6 border-4 rounded-lg transition-all duration-200 ${
                      rsvpData.attending === 'yes' 
                        ? 'bg-green-600 border-green-400 text-white scale-105' 
                        : 'bg-gray-700 border-gray-500 text-gray-300 hover:border-green-400'
                    }`}
                  >
                    <div className="text-4xl mb-2">✅</div>
                    <div className="text-xl font-bold">SÌ, PARTECIPIAMO!</div>
                    <div className="text-sm mt-2">Unisciti alla quest finale</div>
                  </button>
                  
                  <button
                    onClick={() => setRsvpData({...rsvpData, attending: 'no'})}
                    className={`p-6 border-4 rounded-lg transition-all duration-200 ${
                      rsvpData.attending === 'no' 
                        ? 'bg-red-600 border-red-400 text-white scale-105' 
                        : 'bg-gray-700 border-gray-500 text-gray-300 hover:border-red-400'
                    }`}
                  >
                    <div className="text-4xl mb-2">❌</div>
                    <div className="text-xl font-bold">NO, NON POSSIAMO</div>
                    <div className="text-sm mt-2">Ci mancherete!</div>
                  </button>
                </div>
                
                {/* Numero partecipanti se SÌ */}
                {rsvpData.attending === 'yes' && (
                  <div className="mb-6">
                    <label className="block text-orange-400 font-bold mb-3 text-lg">
                      👨‍👩‍👧‍👦 Quanti partecipanti?
                    </label>
                    <select
                      value={rsvpData.guestCount}
                      onChange={(e) => setRsvpData({...rsvpData, guestCount: parseInt(e.target.value)})}
                      className="bg-black/80 border-2 border-orange-400 text-white px-4 py-2 rounded-lg text-lg font-bold focus:border-yellow-400 focus:outline-none"
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'persone'}</option>
                      ))}
                    </select>
                  </div>
                )}
                
                {/* Pulsante conferma */}
                {rsvpData.attending && (
                  <button
                    onClick={handleRSVP}
                    className="bg-gradient-to-r from-orange-600 to-red-600 border-4 border-yellow-400 px-8 py-4 text-xl text-white hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none font-black rounded-lg animate-pulse"
                  >
                    📧 INVIA CONFERMA EMAIL
                  </button>
                )}
              </div>
            ) : (
              <div className="text-center">
                <div className="text-4xl mb-4">🎉</div>
                <div className="text-2xl font-bold text-green-400 mb-4">
                  RSVP INVIATO CON SUCCESSO!
                </div>
                <div className="text-lg text-green-100">
                  Grazie {playerName} per aver confermato! 
                  {rsvpData.attending === 'yes' ? ' Vi aspettiamo! 💒' : ' Ci mancherete! 💙'}
                </div>
                <div className="text-yellow-400 mt-4 font-bold">
                  +{rsvpData.attending === 'yes' ? '3000' : '1000'} PUNTI BONUS!
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 text-center relative">
            {/* Pulsante principale */}
            <button
              onClick={() => setShowCalendarMenu(!showCalendarMenu)}
              className="bg-gradient-to-r from-orange-600 to-red-600 border-4 border-yellow-400 px-12 py-6 hover:scale-105 active:scale-95 transition-transform duration-100 cursor-pointer select-none"
              type="button"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <span className="text-4xl">📅</span>
                <div>
                  <div className="text-2xl font-black text-yellow-400">ADD TO CALENDAR</div>
                  <div className="text-lg text-white">SAVE THE DATE!</div>
                </div>
                <span className="text-4xl">📅</span>
              </div>
            </button>

            {/* Menu dropdown */}
            {showCalendarMenu && (
              <>
                {/* Overlay per chiudere il menu */}
                <div 
                  className="fixed inset-0 z-20" 
                  onClick={() => setShowCalendarMenu(false)}
                />
                
                {/* Menu opzioni calendario */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-30 bg-black border-4 border-cyan-400 min-w-max">
                  <div className="p-4">
                    <h3 className="text-xl font-black text-cyan-400 mb-4 text-center">SCEGLI IL TUO CALENDARIO</h3>
                    
                    <div className="space-y-2">
                      <button
                        onClick={addToGoogleCalendar}
                        className="w-full bg-blue-600 border-2 border-blue-400 px-6 py-3 text-white hover:bg-blue-500 cursor-pointer flex items-center gap-3"
                      >
                        <span className="text-2xl">📧</span>
                        <span className="font-bold">Google Calendar</span>
                      </button>
                      
                      <button
                        onClick={addToOutlook}
                        className="w-full bg-indigo-600 border-2 border-indigo-400 px-6 py-3 text-white hover:bg-indigo-500 cursor-pointer flex items-center gap-3"
                      >
                        <span className="text-2xl">📫</span>
                        <span className="font-bold">Microsoft Outlook</span>
                      </button>
                    </div>

                  </div>
                </div>
              </>
            )}
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-black/90 border-4 border-cyan-400 p-8 backdrop-blur-sm">
            <h3 className="text-3xl font-black text-center mb-6 text-cyan-400">🗺️ BATTLE MAP OVERVIEW</h3>
            <div className="text-center text-cyan-100">
              <div className="mb-4 text-xl">LA QUEST FINALE TI PORTERÀ ATTRAVERSO:</div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-4xl mb-4">
                <div className="text-center">
                  <div>⛪</div>
                  <div className="text-sm text-yellow-400">STAGE 1</div>
                  <div className="text-xs text-cyan-200">NAPOLI</div>
                </div>
                <div className="text-green-400">➜</div>
                <div className="text-center">
                  <div>🏰</div>
                  <div className="text-sm text-yellow-400">STAGE 2</div>
                  <div className="text-xs text-cyan-200">PALOMBARA</div>
                </div>
                <div className="text-green-400">➜</div>
                <div className="text-center">
                  <div>🎉</div>
                  <div className="text-sm text-yellow-400">VICTORY!</div>
                  <div className="text-xs text-cyan-200">FOREVER</div>
                </div>
              </div>
              <div className="text-lg">CHIESA → VILLA → EPIC CELEBRATION!</div>
              <div className="text-yellow-400 mt-4 text-xl">PREPARATI PER L'AVVENTURA PIÙ EPICA DELL'ANNO! 🏆</div>
            </div>
          </div>

          <div className="text-center mt-8 pb-16">
            <button
              onClick={() => setCurrentScreen('menu')}
              className="bg-red-600 border-4 border-red-400 px-8 py-4 text-xl text-red-100 hover:bg-red-500 cursor-pointer select-none"
              type="button"
            >
              🅱️ BACK TO LEVEL SELECT
            </button>
          </div>
        </div>
      </div>

      {/* MODAL VIDEO HONEYMOON */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          {/* Overlay per chiudere */}
          <div 
            className="absolute inset-0" 
            onClick={() => setShowVideoModal(false)}
          />
          
          {/* Container video */}
          <div className="relative z-10 w-full max-w-4xl mx-4">
            <div className="bg-black/95 border-4 border-pink-400 rounded-lg p-6 backdrop-blur-sm">
              
              {/* Header modal */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-black text-pink-400">🌴 HONEYMOON ADVENTURE</h3>
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="text-white hover:text-pink-400 text-3xl font-bold"
                >
                  ✕
                </button>
              </div>
              
              {/* Video player */}
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden border-2 border-pink-400/50">
                <video 
                  className="w-full h-full"
                  controls
                  autoPlay
                  src={`${process.env.PUBLIC_URL}/img/level3/video.mp4`}
                >
                  Il tuo browser non supporta i video HTML5.
                </video>
              </div>
              
              {/* Descrizione sotto il video */}
              <div className="mt-4 text-center">
                <p className="text-pink-100 text-lg">
                  🏝️ Unisciti alla nostra avventura tra templi antichi e paradisi tropicali!
                </p>
                <p className="text-pink-200 text-sm mt-2">
                  Un contributo per esplorare il mondo insieme come novelli sposi ✨
                </p>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;