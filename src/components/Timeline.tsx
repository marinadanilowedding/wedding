import React from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
}

interface TimelineEvent {
  date: string;
  title: string;
  desc: string;
  location: string;
  photo: string;
  color: string;
  imageFile?: string;
}

interface TimelineProps {
  gameScore: number;
  scrollProgress: number;
  setCurrentScreen: (screen: string) => void;
  setGameScore: (callback: (prev: number) => number) => void;
  unlockLevel: (level: number) => void;
  stars: Star[];
}

export const Timeline: React.FC<TimelineProps> = ({ gameScore, scrollProgress, setCurrentScreen, setGameScore, unlockLevel, stars }) => {
  const timelineEvents: TimelineEvent[] = [
    { 
      date: "2014", 
      title: "📚 SPAWN POINT: LICEO", 
      desc: "Due nerd si ritrovano in prima fila: compagni di banco e alleati tra versioni di Latino e compiti a sorpresa. Quel banco è diventato il loro quartier generale e l'inizio di un'amicizia epica", 
      location: "Liceo", 
      photo: "📚", 
      color: "from-pink-400 to-red-400",
      imageFile: "1.jpg"
    },
    { 
      date: "23 Dic 2014", 
      title: "🎄 LUCI E TROFEI SEGRETI", 
      desc: "Il liceo era finito, ma la nostra quest continuava: dopo un'estate di messaggi e chiacchiere infinite, una sera a Salerno, sotto le luci di Natale, abbiamo sbloccato il trofeo nascosto 'Qualcosa di più'", 
      location: "Salerno", 
      photo: "🎄", 
      color: "from-purple-400 to-pink-400",
      imageFile: "2.jpg"
    },
    { 
      date: "2015", 
      title: "🎡 LONDON CALLING", 
      desc: "Uno dei nostri primi viaggi insieme, con un compagno speciale sotto custodia legale, tra risate, maratone a piedi e intese che nascevano, Londra si è presa un pezzo del nostro cuore… tanto da ritornarci ancora (e ancora.. e ancora… e ancora…)", 
      location: "Londra, UK", 
      photo: "🎡", 
      color: "from-blue-400 to-purple-400",
      imageFile: "3.jpg"
    },
    { 
      date: "2016", 
      title: "🎮 MERGELLINA QUEST SEGRETA", 
      desc: "Università messa in pausa per una missione a priorità massima: stare insieme e collezionare ricordi. Una delle nostre foto preferite, perché anche se la vita universitaria era un boss tosto, qui eravamo spensierati (e un po' ribelli).", 
      location: "Mergellina, Napoli", 
      photo: "🎮", 
      color: "from-green-400 to-blue-400",
      imageFile: "4.jpg"
    },
    { 
      date: "2017", 
      title: "🎢 MODALITÀ ADRENALINA ON", 
      desc: "Parco divertimenti: il nostro regno segreto. Qui abbiamo scoperto che le montagne russe sono il nostro sport ufficiale e che i compleanni valgono doppio XP se festeggiati tra loop e risate. 😂🎮🎈", 
      location: "Mirabilandia, Ravenna", 
      photo: "🎢", 
      color: "from-yellow-400 to-green-400",
      imageFile: "5.jpg"
    },
    { 
      date: "2018", 
      title: "✨ PARIGI - LA NOSTRA FOTO DEL CUORE", 
      desc: "Lei la sognava da sempre, lui si è innamorato… solo della Tour Eiffel. Qualche bug qua e là, ma la magia (e lo scatto epico by Peluso Fotografo) resteranno per sempre.", 
      location: "Parigi, Francia", 
      photo: "✨", 
      color: "from-orange-400 to-yellow-400",
      imageFile: "6.jpg"
    },
    { 
      date: "Capodanno 2019", 
      title: "🎆 LONDON FREEZING MODE", 
      desc: "Il freddo livello boss ci ha trasformati in due ghiaccioli… ma vedere i fuochi sotto la ruota panoramica è stato un upgrade di emozione (e di brividi).", 
      location: "Londra, UK", 
      photo: "🎆", 
      color: "from-red-400 to-orange-400",
      imageFile: "7.jpg"
    },
    { 
      date: "Estate 2020", 
      title: "🌿 RESET DELLA QUEST", 
      desc: "Tra lockdown e boss di livello massimo, abbiamo messo in pausa tutto per fare respawn insieme. Un'estate per riscoprire che la nostra squadra funziona ancora.", 
      location: "Verona", 
      photo: "🌿", 
      color: "from-teal-400 to-cyan-400",
      imageFile: "8.jpg"
    },
    { 
      date: "Estate 2021", 
      title: "🦌 MODALITÀ SANTANDERINI", 
      desc: "Una vacanza a Londra che ha fatto nascere il nostro mitico gruppo 'Santanderini' (grazie alle bici che ci hanno portato ovunque). Tra cervi, magie, chilometri di risate e un compleanno passato agli Studios di Harry Potter… abbiamo scoperto una Londra tutta nuova.", 
      location: "Londra, UK", 
      photo: "🦌", 
      color: "from-indigo-400 to-purple-400",
      imageFile: "9.jpg"
    },
    { 
      date: "2022", 
      title: "🌿 IRLANDA - CLIFFS OF MOHER", 
      desc: "Un viaggio che ha sbloccato un Danilo versione esploratore entusiasta e ci ha fatto respawnare insieme. Tra scogliere epiche e lande verdi da open world, abbiamo ritrovato un po' di magia (e un sacco di vento).", 
      location: "Irlanda", 
      photo: "🌿", 
      color: "from-emerald-400 to-green-400",
      imageFile: "10.jpg"
    },
    { 
      date: "2022", 
      title: "🌴 AUSTRALIA - NUOVO ORIZZONTE SBLOCCATO", 
      desc: "Un viaggio che sembrava solo una vacanza e invece era un save point segreto. Tra spiagge da sogno, tramonti epici e gente meravigliosa, abbiamo sentito nascere quella vocina che ti dice: e se fosse qui la prossima quest?", 
      location: "Australia", 
      photo: "🌴", 
      color: "from-amber-400 to-orange-400",
      imageFile: "11.jpg"
    },
    { 
      date: "2023", 
      title: "🏛️ ROMA - IL NUOVO INIZIO", 
      desc: "Nel 2023 abbiamo iniziato la nostra convivenza romana: traffico leggendario, sfide quotidiane e una squadra che è tornata più solida che mai. A quanto pare, il traffico di Roma serve anche a qualcosa. 🚗💛", 
      location: "Roma", 
      photo: "🏛️", 
      color: "from-red-400 to-pink-400",
      imageFile: "12.jpg"
    },
    { 
      date: "Capodanno 2023", 
      title: "🌅 AUSTRALIA MODE", 
      desc: "Un posto da sogno, musica classica in sottofondo (grazie agli sconosciuti del picnic) e un ballo goffo improvvisato da noi due. Ci siamo sentiti liberi, leggeri e incredibilmente uniti.", 
      location: "Australia", 
      photo: "🌅", 
      color: "from-violet-400 to-purple-400",
      imageFile: "13.jpg"
    },
    { 
      date: "2024", 
      title: "💍 LAGO DI COMO - LA PROPOSTA", 
      desc: "\"Can I go where you go? Can we always be this close forever and ever?\" Mentre la barca ondeggiava più di quanto avessimo previsto (e noi ridevamo per l'imbarazzo e la felicità), sapevamo che quello era un momento di svolta. E che la risposta era sì, per sempre. ❤️", 
      location: "Lago di Como", 
      photo: "💍", 
      color: "from-rose-400 to-pink-400",
      imageFile: "14.jpg"
    },
    { 
      date: "2025", 
      title: "🌌 ISLANDA - AURORA QUEST", 
      desc: "Il sogno di Danilo finalmente sbloccato: un viaggio incredibile tra ghiaccio, stelle e luci danzanti. Vedere l'aurora boreale e un Danilo così felice è stato un momento da trofeo leggendario.", 
      location: "Islanda", 
      photo: "🌌", 
      color: "from-cyan-400 to-blue-400",
      imageFile: "15.jpg"
    },
    { 
      date: "Ottobre 2025", 
      title: "🎬 LA LOCANDINA DEL NOSTRO \"FILM\"", 
      desc: "La promessa di un nuovo inizio, sempre l'uno accanto all'altro. E come in ogni saga epica, zero filler: solo trama principale. ❤️", 
      location: "Il nostro Futuro", 
      photo: "🎬", 
      color: "from-gold-400 to-yellow-400",
      imageFile: "16.jpg"
    }
  ];

  // Stabilizzazione del scroll progress per evitare oscillazioni
  const [stableProgress, setStableProgress] = React.useState(0);
  
  // REF per calcolare dinamicamente l'altezza della linea
  const timelineContainerRef = React.useRef<HTMLDivElement>(null);
  const finalIconRef = React.useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = React.useState('100vh');
  
  React.useEffect(() => {
    // Solo aumenta il progress, non diminuisce (evita oscillazioni)
    if (scrollProgress > stableProgress) {
      setStableProgress(scrollProgress);
    }
  }, [scrollProgress, stableProgress]);

  // Logica personalizzata per separare meglio gli ultimi eventi
  const getVisibleEvents = (progress: number) => {
    const increment = 100 / timelineEvents.length; // Distribuzione uniforme
    return Math.min(Math.floor(progress / increment) + 1, timelineEvents.length);
  };

  const visibleEvents = getVisibleEvents(stableProgress);

  // Calcola dinamicamente l'altezza della linea
  React.useEffect(() => {
    const calculateLineHeight = () => {
      if (timelineContainerRef.current && finalIconRef.current && visibleEvents === timelineEvents.length) {
        const containerTop = timelineContainerRef.current.offsetTop;
        const finalIconTop = finalIconRef.current.offsetTop;
        const calculatedHeight = finalIconTop - containerTop + 375;
        setLineHeight(`${calculatedHeight}px`);
      }
    };

    // Calcola dopo un breve delay per assicurarsi che tutto sia renderizzato
    const timer = setTimeout(calculateLineHeight, 100);
    
    // Ricalcola quando la finestra viene ridimensionata
    window.addEventListener('resize', calculateLineHeight);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateLineHeight);
    };
  }, [visibleEvents, timelineEvents.length]);

  return (
    <div className="bg-black relative font-mono" style={{ minHeight: '1000vh' }}>
      {/* SFONDO - NUOVO PERCORSO LEVEL2 */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/img/level2/sfondo.jpeg')`,
            filter: 'brightness(0.8) contrast(1.2) saturate(1.1)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        ></div>
        
        {/* Overlay più leggero per mantenere visibilità */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Particelle animate per movimento */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-white rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-white rounded-full animate-ping opacity-70" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-40 right-20 w-2 h-2 bg-white rounded-full animate-ping opacity-50" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-80 left-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-60" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-60 left-10 w-2 h-2 bg-white rounded-full animate-ping opacity-30" style={{ animationDelay: '5s' }}></div>
        </div>

        {/* Stelle dinamiche originali */}
        {stars.map(star => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`
            }}
          />
        ))}
      </div>

      {/* CONTENUTO SCROLLABILE */}
      <div className="relative z-10">
        
        {/* Titolo */}
        <div className="px-4 py-16">
          <h1 className="text-4xl sm:text-5xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
            LA NOSTRA STORIA D'AMORE
          </h1>

          <div className="text-center mb-12">
            <div className="text-cyan-400 text-lg mb-4 animate-bounce">📜 SCORRI PER VIAGGIARE NEL TEMPO 📜</div>
            <div className="text-yellow-400">⬇️ Segui la linea del destino ⬇️</div>
          </div>
        </div>

        {/* TIMELINE VERTICALE FISSA E PULITA */}
        <div className="max-w-4xl mx-auto px-4 relative" ref={timelineContainerRef}>
          
          {/* LINEA CENTRALE DINAMICA - RESPONSIVE */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 transition-all duration-500"
            style={{ height: lineHeight }}
          ></div>

          {/* EVENTI CON POSIZIONI FISSE */}
          <div className="space-y-32">
            {timelineEvents.slice(0, visibleEvents).map((event, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 ease-out ${
                    index < visibleEvents ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    paddingTop: '2rem',
                    transform: `scale(${index < visibleEvents ? 1 : 0.8})`
                  }}
                >
                  
                  {/* LAYOUT GRID FISSO */}
                  <div className="grid grid-cols-12 items-center gap-4">
                    
                    {/* CARD A SINISTRA (colonne 1-5) */}
                    <div className="col-span-5">
                      {isLeft && (
                        <div className="ml-auto max-w-sm">
                          <div className="bg-black/90 border-4 border-white rounded-lg p-6 shadow-2xl backdrop-blur-sm">
                            <div className="flex justify-between items-center mb-3">
                              <h3 className="text-lg font-black text-white">{event.title}</h3>
                              <span className="text-yellow-400 font-black text-xs bg-yellow-400/20 px-2 py-1 rounded">{event.date}</span>
                            </div>
                            {/* IMMAGINE NELLA CARD */}
                            {event.imageFile && (
                              <div className="mb-3 rounded-lg overflow-hidden border-2 border-gray-600">
                                <img 
                                  src={`${process.env.PUBLIC_URL}/img/level2/${event.imageFile}`}
                                  alt={event.title}
                                  className="w-full h-auto object-cover"
                                  style={{ imageRendering: 'auto' }}
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                  }}
                                />
                              </div>
                            )}
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">{event.desc}</p>
                            <div className="flex items-center text-cyan-400 text-xs">
                              <span className="mr-1">📍</span>
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* ICONA CENTRALE (colonne 6-7) */}
                    <div className="col-span-2 flex justify-center relative z-20">
                      <div className="w-20 h-20 relative">
                        
                        {/* Anello esterno rotante - PIÙ VISIBILE */}
                        <div className="absolute -inset-1 border-4 border-cyan-400/80 rounded-full animate-spin border-dashed"></div>
                        
                        {/* Secondo anello per più impatto */}
                        <div className="absolute inset-0 border-2 border-yellow-400/60 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
                        
                        {/* Sfera principale */}
                        <div className={`absolute inset-2 bg-gradient-to-br ${event.color} rounded-full border-2 border-white shadow-2xl flex items-center justify-center`}>
                          
                          {/* Anno */}
                          <div className="text-white font-black text-sm tracking-wider drop-shadow-lg" style={{ fontFamily: 'monospace' }}>
                            {event.date.includes(' ') ? event.date.split(' ')[2] || event.date.split(' ')[1] : event.date}
                          </div>
                          
                        </div>
                        
                      </div>
                    </div>
                    
                    {/* CARD A DESTRA (colonne 8-12) */}
                    <div className="col-span-5">
                      {!isLeft && (
                        <div className="mr-auto max-w-sm">
                          <div className="bg-black/90 border-4 border-white rounded-lg p-6 shadow-2xl backdrop-blur-sm">
                            <div className="flex justify-between items-center mb-3">
                              <h3 className="text-lg font-black text-white">{event.title}</h3>
                              <span className="text-yellow-400 font-black text-xs bg-yellow-400/20 px-2 py-1 rounded">{event.date}</span>
                            </div>
                            {/* IMMAGINE NELLA CARD */}
                            {event.imageFile && (
                              <div className="mb-3 rounded-lg overflow-hidden border-2 border-gray-600">
                                <img 
                                  src={`${process.env.PUBLIC_URL}/img/level2/${event.imageFile}`}
                                  alt={event.title}
                                  className="w-full h-auto object-cover"
                                  style={{ imageRendering: 'auto' }}
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                  }}
                                />
                              </div>
                            )}
                            <p className="text-gray-300 text-sm mb-3 leading-relaxed">{event.desc}</p>
                            <div className="flex items-center text-cyan-400 text-xs">
                              <span className="mr-1">📍</span>
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* COMPLETION BOX E ICONA FINALE - ESCONO SOLO QUANDO HAI VISTO TUTTI GLI EVENTI */}
          {visibleEvents === timelineEvents.length && (
            <div className="relative z-20" style={{ marginTop: '40vh' }} ref={finalIconRef}>
              
              {/* ICONA FINALE - Centrata sulla linea */}
              <div className="flex justify-center mb-8">
                <div className="w-28 h-28 bg-gradient-to-br from-pink-400 via-red-400 to-purple-500 rounded-full border-6 border-white flex items-center justify-center text-5xl shadow-2xl animate-bounce relative z-30">
                  🎉
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-400 via-red-400 to-purple-500 blur-xl opacity-50 animate-pulse"></div>
                </div>
              </div>
              
              {/* BOX COMPLETION */}
              <div className="bg-black/90 border-4 border-pink-400 p-8 rounded-xl backdrop-blur-sm shadow-2xl">

                <h3 className="text-3xl font-black text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-red-400 to-purple-500 animate-pulse">
                  🎉 LOVE STORY COMPLETED! 🎉
                </h3>

                {/* Progress bar completata */}
                <div className="w-full bg-gray-800 border-4 border-gray-600 h-8 relative overflow-hidden rounded-lg mb-6">
                  <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 h-full flex items-center justify-center transition-all duration-3000 rounded-lg">
                    <div className="text-black font-black text-lg animate-bounce">
                      ❤️ EVERY MOMENT WAS WORTH IT! ❤️
                    </div>
                  </div>
                </div>

                {/* Statistiche completamento */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-pink-900/50 border-2 border-pink-400 p-4 rounded-lg text-center">
                    <div className="text-2xl font-black text-pink-400">{timelineEvents.length}</div>
                    <div className="text-pink-100">MOMENTI EPICI</div>
                  </div>
                  <div className="bg-purple-900/50 border-2 border-purple-400 p-4 rounded-lg text-center">
                    <div className="text-2xl font-black text-purple-400">11</div>
                    <div className="text-purple-100">ANNI D'AMORE</div>
                  </div>
                  <div className="bg-blue-900/50 border-2 border-blue-400 p-4 rounded-lg text-center">
                    <div className="text-2xl font-black text-blue-400">∞</div>
                    <div className="text-blue-100">FELICITÀ</div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-yellow-400 text-2xl animate-pulse mb-6 font-black">
                    💒 READY FOR THE FINAL BOSS: MATRIMONIO! 💒
                  </div>
                  <button
                    onClick={() => {
                      setGameScore(prev => prev + 5000); // Bonus completamento timeline
                      unlockLevel(3); // Sblocca il livello 3!
                      setCurrentScreen('event');
                    }}
                    className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 border-4 border-yellow-400 px-12 py-6 text-2xl text-white hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer select-none animate-pulse font-black rounded-lg shadow-2xl"
                    type="button"
                  >
                    ⚔️ PROCEED TO BOSS LEVEL ⚔️
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SPAZIO FINALE */}
          <div style={{ height: '50vh' }}></div>
        </div>
      </div>

      {/* BACK BUTTON - APPARE SOLO ALLA FINE */}
      {stableProgress > 90 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t-4 border-blue-400">
          <div className="text-center py-4">
            <button
              onClick={() => setCurrentScreen('menu')}
              className="bg-blue-600 border-4 border-blue-400 px-8 py-3 text-xl text-blue-100 hover:bg-blue-500 cursor-pointer select-none transform hover:scale-105 transition-all duration-200"
              type="button"
            >
              🅱️ BACK TO LEVEL SELECT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};