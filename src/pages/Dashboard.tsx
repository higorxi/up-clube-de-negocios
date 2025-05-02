import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Users, 
  BookOpen, 
  Gift, 
  CalendarDays, 
  TrendingUp, 
  Award, 
  Bell, 
  ChevronRight,
  Star,
  Map,
  Search,
  User,
  Zap
} from 'lucide-react';
import { currentUser, stores, workshops, serviceProviders, events } from '../data/mockData';
// Componente para cards de estatísticas
const StatCard = ({ title, value, icon, color, subtitle }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-3 sm:p-4 lg:p-5 border border-gray-100">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-xs sm:text-sm text-gray-500 mb-1">{title}</p>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{value}</h3>
      </div>
      <div className={`bg-${color}-50 p-1 sm:p-2 rounded-lg`}>
        {icon}
      </div>
    </div>
    {subtitle && (
      <div className="mt-2 sm:mt-3 lg:mt-4 flex items-center text-gray-500">
        {subtitle}
      </div>
    )}
  </div>
);
// Componente para mostrar os benefícios do nível
const LevelBenefits = ({ level }) => {
  const benefits = {
    'Bronze': ['Acesso a eventos exclusivos', 'Descontos de 5% em lojas parceiras'],
    'Prata': ['Acesso a eventos exclusivos', 'Descontos de 10% em lojas parceiras', 'Workshop gratuito mensal'],
    'Ouro': ['Acesso a eventos VIP', 'Descontos de 15% em lojas parceiras', 'Workshops gratuitos ilimitados', 'Consultoria básica'],
    'Platina': ['Acesso a eventos VIP', 'Descontos de 25% em lojas parceiras', 'Workshops gratuitos ilimitados', 'Consultoria completa', 'Convites para lançamentos']
  };
  // Determinar o nível atual
  let currentLevel = 'Bronze';
  if (currentUser.points >= 5000) currentLevel = 'Platina';
  else if (currentUser.points >= 2500) currentLevel = 'Ouro';
  else if (currentUser.points >= 1000) currentLevel = 'Prata';
  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md border border-gray-100">
      <h4 className="font-medium text-gray-900 mb-1 sm:mb-2 flex items-center text-sm sm:text-base">
        <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-yellow-500" />
        Benefícios do Nível {currentLevel}
      </h4>
      <ul className="space-y-1 sm:space-y-2">
        {benefits[currentLevel].map((benefit, index) => (
          <li key={index} className="flex items-center text-xs sm:text-sm">
            <Star className="h-2 w-2 sm:h-3 sm:w-3 text-yellow-500 mr-1 sm:mr-2 flex-shrink-0" />
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
};
// Componente para cartão de loja
const StoreCard = ({ store }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex">
    <div className="w-24 h-24 bg-gray-100 flex-shrink-0">
      <img src={store.imageUrl || "/api/placeholder/120/120"} alt={store.name} className="w-full h-full object-cover" />
    </div>
    <div className="p-4 flex-grow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-900">{store.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{store.category}</p>
        </div>
        <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">
          {store.discount}% OFF
        </span>
      </div>
      <div className="mt-2 flex items-center text-xs text-gray-500">
        <Map className="h-3 w-3 mr-1" />
        {store.location}
      </div>
    </div>
  </div>
);
// Componente para cartão de workshop
const WorkshopCard = ({ workshop }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex">
    <div className="w-24 h-24 bg-gray-100 flex-shrink-0">
      <img src={workshop.imageUrl || "/api/placeholder/120/120"} alt={workshop.title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4 flex-grow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-900">{workshop.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{workshop.instructor}</p>
        </div>
        <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
          {workshop.points} pontos
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-xs text-gray-500">
          {workshop.date} • {workshop.duration}
        </span>
        <button className="text-xs text-blue-700 hover:text-blue-800 font-medium">
          Inscrever-se
        </button>
      </div>
    </div>
  </div>
);
// Componente para cartão de prestador de serviço
const ServiceProviderCard = ({ provider }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex">
    <div className="w-24 h-24 bg-gray-100 flex-shrink-0">
      <img src={provider.imageUrl || "/api/placeholder/120/120"} alt={provider.name} className="w-full h-full object-cover" />
    </div>
    <div className="p-4 flex-grow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-900">{provider.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{provider.specialty}</p>
        </div>
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-500" />
          <span className="text-sm ml-1">{provider.rating}/5</span>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-xs text-gray-500">
          {provider.projects} projetos concluídos
        </span>
        <button className="text-xs text-blue-700 hover:text-blue-800 font-medium">
          Contatar
        </button>
      </div>
    </div>
  </div>
);
// Componente para cartão de evento
const EventCard = ({ event }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
    <div className="h-32 bg-gray-100 relative">
      <img src={event.imageUrl || "/api/placeholder/400/150"} alt={event.title} className="w-full h-full object-cover" />
      <div className="absolute top-2 right-2 bg-white rounded-lg px-2 py-1 text-xs font-medium shadow-md">
        {event.date}
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-medium text-gray-900">{event.title}</h3>
      <p className="text-sm text-gray-500 mt-1">{event.location}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-full">
          {event.points} pontos
        </span>
        <button className="text-xs bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1 rounded-full transition-colors duration-200">
          Participar
        </button>
      </div>
    </div>
  </div>
);
// Componente para seção com cabeçalho
const Section = ({ title, subtitle, icon, color, children, viewAllLink }) => (
  <section className="mb-6">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <div className={`mr-3 p-2 rounded-lg bg-${color}-50`}>
          {React.cloneElement(icon, { className: `h-5 w-5 text-${color}-600` })}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
      {viewAllLink && (
        <a href={viewAllLink} className={`text-${color}-700 hover:text-${color}-800 text-sm font-medium flex items-center`}>
          Ver todos
          <ChevronRight className="h-4 w-4 ml-1" />
        </a>
      )}
    </div>
    {children}
  </section>
);
// Componente Dashboard principal
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('favoritos');
  
  // Determinar o nível atual
  let currentLevel = 'Bronze';
  if (currentUser.points >= 5000) currentLevel = 'Platina';
  else if (currentUser.points >= 2500) currentLevel = 'Ouro';
  else if (currentUser.points >= 1000) currentLevel = 'Prata';
  
  // Calcular a porcentagem da barra de progresso
  const getNextLevel = () => {
    if (currentUser.points < 1000) return { name: 'Prata', points: 1000 };
    if (currentUser.points < 2500) return { name: 'Ouro', points: 2500 };
    if (currentUser.points < 5000) return { name: 'Platina', points: 5000 };
    return { name: 'Platina', points: 5000 };
  };
  
  const nextLevel = getNextLevel();
  const prevLevelPoints = currentUser.points >= 5000 ? 2500 : 
                          currentUser.points >= 2500 ? 1000 : 
                          currentUser.points >= 1000 ? 0 : 0;
  
  const progressPercentage = ((currentUser.points - prevLevelPoints) / (nextLevel.points - prevLevelPoints)) * 100;
  const cappedPercentage = Math.min(progressPercentage, 100);
  
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Cartão de perfil e progresso */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="flex-1">
              <div className="flex items-center">
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-primary-50 border-4 border-primary-100 flex items-center justify-center">
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-primary-600" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Olá, {currentUser.name}!</h2>
                  <div className="flex items-center mt-1">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 mr-1" />
                    <span className="text-sm sm:text-base text-gray-700">Nível {currentUser.level} • {currentLevel}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 lg:mt-0 flex-1 lg:flex-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs sm:text-sm font-medium text-gray-700">Rumo ao nível {nextLevel.name}</span>
                <span className="text-xs sm:text-sm font-medium text-primary-700">{currentUser.points} / {nextLevel.points} pontos</span>
              </div>
              <div className="h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary-600 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${cappedPercentage}%` }}
                ></div>
              </div>
              <div className="mt-3 sm:mt-4 flex justify-between">
                <div className="flex-1">
                  <LevelBenefits level={currentLevel} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Estatísticas */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
          <StatCard 
            title="Total de pontos" 
            value={currentUser.points} 
            icon={<TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />}
            color="primary"
            subtitle={
              <div className="flex items-center">
                <Award className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-yellow-500" />
                <span className="text-xs sm:text-sm">Nível {currentUser.level}</span>
              </div>
            }
          />
          
          <StatCard 
            title="Eventos disponíveis" 
            value={events.length} 
            icon={<CalendarDays className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />}
            color="purple"
            subtitle={
              <div className="flex items-center">
                <Bell className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                <span className="text-xs sm:text-sm">2 esta semana</span>
              </div>
            }
          />
          
          <StatCard 
            title="Lojas parceiras" 
            value={stores.length} 
            icon={<ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />}
            color="green"
            subtitle={<span className="text-xs sm:text-sm">3 novas</span>}
          />
          
          <StatCard 
            title="Workshops ativos" 
            value={workshops.length} 
            icon={<BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />}
            color="blue"
            subtitle={<span className="text-xs sm:text-sm">1 novo hoje</span>}
          />
        </div>
        {/* Navegação por tabs */}
        <div className="border-b border-gray-200 mb-4 sm:mb-6 overflow-x-auto">
          <nav className="flex whitespace-nowrap min-w-full">
            <button
              onClick={() => setActiveTab('favoritos')}
              className={`py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium border-b-2 ${
                activeTab === 'favoritos'
                  ? 'border-primary-600 text-primary-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Para você
            </button>
            <button
              onClick={() => setActiveTab('lojas')}
              className={`py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium border-b-2 ${
                activeTab === 'lojas'
                  ? 'border-primary-600 text-primary-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Lojas parceiras
            </button>
            <button
              onClick={() => setActiveTab('workshops')}
              className={`py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium border-b-2 ${
                activeTab === 'workshops'
                  ? 'border-primary-600 text-primary-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Workshops
            </button>
            <button
              onClick={() => setActiveTab('eventos')}
              className={`py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium border-b-2 ${
                activeTab === 'eventos'
                  ? 'border-primary-600 text-primary-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Eventos
            </button>
          </nav>
        </div>
        {/* Conteúdo principal baseado na tab selecionada */}
        {activeTab === 'favoritos' && (
          <>
            {/* Destaques na primeira linha */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="lg:col-span-2">
                <Section 
                  title="Evento em Destaque" 
                  subtitle="Participe e ganhe pontos extras" 
                  icon={<Gift />} 
                  color="purple"
                  viewAllLink="/eventos"
                >
                  {events.length > 0 && (
                    <EventCard event={events[0]} />
                  )}
                </Section>
              </div>
              
              <div>
                <Section 
                  title="Workshop Recomendado" 
                  subtitle="Baseado nos seus interesses" 
                  icon={<BookOpen />} 
                  color="blue"
                  viewAllLink="/workshops"
                >
                  {workshops.length > 0 && (
                    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 p-3 sm:p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900 text-sm sm:text-base">{workshops[0].title}</h3>
                        <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                          {workshops[0].points} pontos
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">{workshops[0].instructor}</p>
                      <div className="mt-2 sm:mt-3 flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {workshops[0].date} • {workshops[0].duration}
                        </span>
                        <button className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 px-2 sm:px-3 py-1 rounded-full transition-colors duration-200">
                          Inscrever-se
                        </button>
                      </div>
                    </div>
                  )}
                </Section>
              </div>
            </div>
            
            {/* Lojas e Workshops */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <Section 
                title="Lojas Parceiras" 
                subtitle="Lojas certificadas com produtos exclusivos" 
                icon={<ShoppingBag />} 
                color="green"
                viewAllLink="/lojas"
              >
                <div className="grid grid-cols-1 gap-4">
                  {stores.slice(0, 2).map(store => (
                    <StoreCard key={store.id} store={store} />
                  ))}
                </div>
              </Section>
              
              <Section 
                title="Workshops" 
                subtitle="Aprenda e ganhe pontos com nossos workshops" 
                icon={<BookOpen />} 
                color="blue"
                viewAllLink="/workshops"
              >
                <div className="grid grid-cols-1 gap-4">
                  {workshops.slice(0, 2).map(workshop => (
                    <WorkshopCard key={workshop.id} workshop={workshop} />
                  ))}
                </div>
              </Section>
            </div>
          </>
        )}
        
        {activeTab === 'lojas' && (
          <Section 
            title="Todas as Lojas Parceiras" 
            subtitle="Lojas certificadas com produtos exclusivos" 
            icon={<ShoppingBag />} 
            color="green"
            viewAllLink="/lojas"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stores.map(store => (
                <StoreCard key={store.id} store={store} />
              ))}
            </div>
          </Section>
        )}
        
        {activeTab === 'workshops' && (
          <Section 
            title="Todos os Workshops e Cursos" 
            subtitle="Aprenda e ganhe pontos com nossos workshops" 
            icon={<BookOpen />} 
            color="blue"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {workshops.map(workshop => (
                <WorkshopCard key={workshop.id} workshop={workshop} />
              ))}
            </div>
          </Section>
        )}
        
        {activeTab === 'eventos' && (
          <Section 
            title="Todos os Eventos" 
            subtitle="Participe e ganhe pontos fazendo check-in" 
            icon={<CalendarDays />} 
            color="purple"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {events.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </Section>
        )}
      </div>
    </div>
  );
};
export default Dashboard;