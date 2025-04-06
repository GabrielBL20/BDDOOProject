import React, { useState } from 'react';
import { Clock, User, ChevronRight, Star, Eye, Filter, Search } from 'lucide-react';

const NewsSection = () => {
  const [activeCategory, setActiveCategory] = useState('todas');
  const [hoverIndex, setHoverIndex] = useState(null);

  const categories = [
    { id: 'todas', name: 'Todas las noticias' },
    { id: 'laliga', name: 'La Liga' },
    { id: 'premier', name: 'Premier League' },
    { id: 'bundesliga', name: 'Bundesliga' },
    { id: 'champions', name: 'Champions League' }
  ];

  const news = [
    {
      id: 1,
      title: 'El Barcelona impone su dominio al Madrid en el Clásico',
      category: 'laliga',
      image: '/api/placeholder/400/250', 
      date: '2 horas',
      author: 'Carlos Martínez',
      excerpt: 'Un partido que será recordado por la afición blanca y culé.',
      featured: true,
      views: 1243
    },
    {
      id: 2,
      title: 'Liverpool y Manchester City empatan en un duelo vibrante',
      category: 'premier',
      image: '/api/placeholder/400/250',
      date: '5 horas',
      author: 'Pablo Torres',
      excerpt: 'Los dos equipos que pelean por el título en Inglaterra no lograron sacar ventaja en un encuentro de alta intensidad...',
      featured: true,
      views: 982
    },
    {
      id: 3,
      title: 'Bayern domina la Bundesliga una semana más',
      category: 'bundesliga',
      image: '/api/placeholder/400/250',
      date: '1 día',
      author: 'Ana Gómez',
      excerpt: 'El conjunto bávaro continúa con su impresionante racha de victorias en el campeonato alemán...',
      featured: false,
      views: 765
    },
    {
      id: 4,
      title: 'Sorpresas en la fase de grupos de Champions League',
      category: 'champions',
      image: '/api/placeholder/400/250',
      date: '2 días',
      author: 'Miguel Sánchez',
      excerpt: 'Varios favoritos tropiezan en la máxima competición europea dejando abierta la clasificación...',
      featured: false,
      views: 1105
    },
    {
      id: 5,
      title: 'El Atlético se refuerza con nueva estrella para la próxima temporada',
      category: 'laliga',
      image: '/api/placeholder/400/250',
      date: '3 días',
      author: 'Laura Pérez',
      excerpt: 'El equipo colchonero anuncia el fichaje que ilusiona a la afición rojiblanca...',
      featured: false,
      views: 842
    },
    {
      id: 6,
      title: 'Nuevo récord goleador en la Premier League',
      category: 'premier',
      image: '/api/placeholder/400/250',
      date: '4 días',
      author: 'Roberto García',
      excerpt: 'El delantero noruego continúa batiendo marcas históricas en el fútbol inglés...',
      featured: false,
      views: 723
    }
  ];

  // Filtrar noticias según la categoría activa
  const filteredNews = activeCategory === 'todas' 
    ? news 
    : news.filter(item => item.category === activeCategory);
  
  // Destacadas primero
  const sortedNews = [...filteredNews].sort((a, b) => b.featured - a.featured);

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-900 animate-fade-in">Últimas Noticias</h2>
        
        {/* Cabecera - Búsqueda y filtros */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col md:flex-row justify-between items-center">
          <div className="relative w-full md:w-2/5 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Buscar noticias..."
              className="w-full pl-10 pr-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-blue-400" />
          </div>
          
          <div className="flex space-x-2 items-center">
            <Filter className="h-5 w-5 text-blue-800" />
            <span className="text-blue-800 font-medium mr-2">Filtrar por:</span>
            
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-800 text-white shadow-md transform scale-105'
                    : 'bg-white text-blue-800 border border-blue-300 hover:bg-blue-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Noticias destacadas */}
        {sortedNews.filter(item => item.featured).length > 0 && (
          <div className="mb-8 animate-fade-slide-in">
            <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
              <Star className="h-5 w-5 mr-2 text-blue-800" /> Noticias Destacadas
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedNews.filter(item => item.featured).map(item => (
                <div 
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  onMouseEnter={() => setHoverIndex(`featured-${item.id}`)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium px-2 py-1 bg-blue-800 text-white rounded-full">{categories.find(c => c.id === item.category).name}</span>
                      <div className="flex items-center text-blue-500 text-sm">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-blue-900 mb-2 hover:text-blue-700 transition-colors">{item.title}</h4>
                    <p className="text-blue-600 text-sm mb-3">{item.excerpt}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1 text-blue-500" />
                        <span className="text-sm text-blue-500">{item.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-4 w-4 mr-1 text-blue-500" />
                        <span className="text-sm text-blue-500">{item.views}</span>
                      </div>
                    </div>
                    
                    <button className={`mt-3 w-full py-2 text-center rounded-md transition-all duration-300 flex items-center justify-center bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200 ${
                      hoverIndex === `featured-${item.id}` ? 'bg-blue-100' : ''
                    }`}>
                      Leer más
                      <ChevronRight className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                        hoverIndex === `featured-${item.id}` ? 'transform translate-x-1' : ''
                      }`} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Lista de noticias */}
        <div className="animate-fade-slide-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-xl font-semibold mb-4 text-blue-800">Todas las noticias</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sortedNews.filter(item => !item.featured || activeCategory !== 'todas').map(item => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-blue-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setHoverIndex(`news-${item.id}`)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-32 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium px-2 py-0.5 bg-blue-800 text-white rounded-full">{categories.find(c => c.id === item.category).name}</span>
                    <div className="flex items-center text-blue-500 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-md font-bold text-blue-900 mb-2 line-clamp-2 hover:text-blue-700 transition-colors">{item.title}</h4>
                  <p className="text-blue-600 text-xs mb-2 line-clamp-2">{item.excerpt}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1 text-blue-500" />
                      <span className="text-xs text-blue-500">{item.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1 text-blue-500" />
                      <span className="text-xs text-blue-500">{item.views}</span>
                    </div>
                  </div>
                  
                  <button className={`mt-2 w-full py-1.5 text-sm text-center rounded-md transition-all duration-300 flex items-center justify-center bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200 ${
                    hoverIndex === `news-${item.id}` ? 'bg-blue-100' : ''
                  }`}>
                    Leer más
                    <ChevronRight className={`ml-1 h-3 w-3 transition-transform duration-300 ${
                      hoverIndex === `news-${item.id}` ? 'transform translate-x-1' : ''
                    }`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navegación de páginas */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm">
            <button className="px-4 py-2 text-sm font-medium text-blue-800 bg-white border border-blue-300 rounded-l-lg hover:bg-blue-50">
              Anterior
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-800 border border-blue-300">
              1
            </button>
            <button className="px-4 py-2 text-sm font-medium text-blue-800 bg-white border border-blue-300 hover:bg-blue-50">
              2
            </button>
            <button className="px-4 py-2 text-sm font-medium text-blue-800 bg-white border border-blue-300 hover:bg-blue-50">
              3
            </button>
            <button className="px-4 py-2 text-sm font-medium text-blue-800 bg-white border border-blue-300 rounded-r-lg hover:bg-blue-50">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Agregamos estilos CSS para las animaciones personalizadas
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fadeSlideIn {
    from { 
      opacity: 0;
      transform: translateY(20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.6s ease-in-out;
  }
  
  .animate-fade-slide-in {
    animation: fadeSlideIn 0.5s ease-out;
  }
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
document.head.appendChild(styleSheet);

export default NewsSection;