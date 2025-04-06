import React, { useState } from 'react';
import { Shield, Trophy, ArrowRight } from 'lucide-react';

const LeaguesSection = () => {
  const [activeLeague, setActiveLeague] = useState('laliga');

  const leagues = [
    {
      id: 'laliga',
      name: 'La Liga',
      country: 'España',
      logo: <Shield className="h-6 w-6" />,
      color: 'bg-red-600',
      teams: ['Real Madrid', 'Barcelona', 'Atlético Madrid', 'Sevilla', 'Real Betis']
    },
    {
      id: 'premier',
      name: 'Premier League',
      country: 'Inglaterra',
      logo: <Shield className="h-6 w-6" />,
      color: 'bg-purple-700',
      teams: ['Manchester City', 'Liverpool', 'Arsenal', 'Chelsea', 'Manchester United']
    },
    {
      id: 'bundesliga',
      name: 'Bundesliga',
      country: 'Alemania',
      logo: <Shield className="h-6 w-6" />,
      color: 'bg-red-500',
      teams: ['Bayern Munich', 'Borussia Dortmund', 'RB Leipzig', 'Bayer Leverkusen', 'Wolfsburg']
    },
    {
      id: 'champions',
      name: 'Champions League',
      country: 'UEFA',
      logo: <Trophy className="h-6 w-6" />,
      color: 'bg-blue-700',
      teams: ['Real Madrid', 'Manchester City', 'Bayern Munich', 'PSG', 'Liverpool']
    }
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Competiciones</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {leagues.map((league) => (
            <div 
              key={league.id}
              onClick={() => setActiveLeague(league.id)}
              className={`${
                activeLeague === league.id 
                  ? 'border-2 border-blue-500 shadow-lg' 
                  : 'border border-gray-200 hover:border-blue-300'
              } bg-white rounded-lg p-4 cursor-pointer transition-all duration-200`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full ${league.color} text-white`}>
                  {league.logo}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{league.name}</h3>
                  <p className="text-sm text-gray-500">{league.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* League details section */}
        {leagues.map((league) => (
          <div 
            key={`details-${league.id}`}
            className={`${activeLeague === league.id ? 'block' : 'hidden'} bg-white rounded-lg shadow-md p-6`}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-3">
                <div className={`p-4 rounded-full ${league.color} text-white`}>
                  {league.logo}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{league.name}</h2>
                  <p className="text-gray-500">{league.country}</p>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Clasificación
                </button>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors">
                  Partidos
                </button>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors">
                  Estadísticas
                </button>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Equipos Principales</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {league.teams.map((team, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-3">
                        <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center">
                          <Shield className="h-5 w-5 text-gray-500" />
                        </div>
                        <span className="font-medium">{team}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold mb-3 text-gray-700">Últimos Resultados</h4>
                <div className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white p-3 rounded border border-gray-100 flex justify-between items-center">
                      <span>Equipo A</span>
                      <div className="font-bold">2 - 1</div>
                      <span>Equipo B</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold mb-3 text-gray-700">Próximos Partidos</h4>
                <div className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white p-3 rounded border border-gray-100 flex justify-between items-center">
                      <span>Equipo C</span>
                      <div className="text-gray-500 text-sm">19:45</div>
                      <span>Equipo D</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaguesSection;