import React from 'react';
import { ShoppingBag, Users, BookOpen, Gift, CalendarDays, TrendingUp, Award, Bell } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import PointsDisplay from '../components/PointsDisplay';
import StoreCard from '../components/StoreCard';
import WorkshopCard from '../components/WorkshopCard';
import ServiceProviderCard from '../components/ServiceProviderCard';
import EventCard from '../components/EventCard';
import { stores, workshops, serviceProviders, events, currentUser } from '../data/mockData';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-shadow p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total de pontos</p>
              <h3 className="text-2xl font-bold text-gray-900">{currentUser.points}</h3>
            </div>
            <div className="bg-primary-50 p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-primary-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <Award className="h-4 w-4 mr-1" />
            <span>Nível {currentUser.level}</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-shadow p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Eventos disponíveis</p>
              <h3 className="text-2xl font-bold text-gray-900">{events.length}</h3>
            </div>
            <div className="bg-secondary-50 p-2 rounded-lg">
              <CalendarDays className="h-6 w-6 text-secondary-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <Bell className="h-4 w-4 mr-1" />
            <span>2 eventos esta semana</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-shadow p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Lojas parceiras</p>
              <h3 className="text-2xl font-bold text-gray-900">{stores.length}</h3>
            </div>
            <div className="bg-green-50 p-2 rounded-lg">
              <ShoppingBag className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <span>3 novas esta semana</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-shadow p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Workshops ativos</p>
              <h3 className="text-2xl font-bold text-gray-900">{workshops.length}</h3>
            </div>
            <div className="bg-blue-50 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <span>1 novo workshop hoje</span>
          </div>
        </div>
      </div>

      <section className="bg-primary-50 p-6 rounded-xl border border-primary-100 shadow-card mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-primary-900">Roadmap de Pontos</h2>
            <p className="text-sm text-primary-700">Acompanhe seu progresso no programa de recompensas</p>
          </div>
          <div className="mt-2 md:mt-0">
            <span className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-primary-700 border border-primary-200 shadow-sm">
              {currentUser.points} / 5000
            </span>
          </div>
        </div>

        <div className="relative pt-1">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-primary-200">
            <div 
              style={{ width: `${Math.min((currentUser.points / 5000) * 100, 100)}%` }} 
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-600 transition-all duration-500 ease-in-out"
            ></div>
          </div>
          <div className="flex justify-between">
            <div className="text-center">
              <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs mx-auto shadow-lg">
                ✓
              </div>
              <span className="text-xs text-primary-700 mt-1 block">Bronze</span>
              <span className="text-xs text-primary-500 block">0</span>
            </div>
            <div className="text-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs mx-auto shadow-lg ${currentUser.points >= 1000 ? 'bg-primary-600 text-white' : 'bg-white border border-primary-300 text-primary-400'}`}>
                {currentUser.points >= 1000 ? '✓' : ''}
              </div>
              <span className="text-xs text-primary-700 mt-1 block">Prata</span>
              <span className="text-xs text-primary-500 block">1000</span>
            </div>
            <div className="text-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs mx-auto shadow-lg ${currentUser.points >= 2500 ? 'bg-primary-600 text-white' : 'bg-white border border-primary-300 text-primary-400'}`}>
                {currentUser.points >= 2500 ? '✓' : ''}
              </div>
              <span className="text-xs text-primary-700 mt-1 block">Ouro</span>
              <span className="text-xs text-primary-500 block">2500</span>
            </div>
            <div className="text-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs mx-auto shadow-lg ${currentUser.points >= 5000 ? 'bg-primary-600 text-white' : 'bg-white border border-primary-300 text-primary-400'}`}>
                {currentUser.points >= 5000 ? '✓' : ''}
              </div>
              <span className="text-xs text-primary-700 mt-1 block">Platina</span>
              <span className="text-xs text-primary-500 block">5000</span>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <section>
          <SectionHeader 
            icon={<ShoppingBag />} 
            title="Lojas Parceiras"
            subtitle="Lojas certificadas com produtos exclusivos"
            accentColor="primary"
          />
          <div className="grid grid-cols-1 gap-4">
            {stores.slice(0, 2).map(store => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
          <div className="mt-4 text-center">
            <a href="/lojas" className="text-primary-700 hover:text-primary-800 text-sm font-medium">
              Ver todas as lojas →
            </a>
          </div>
        </section>

        <section>
          <SectionHeader 
            icon={<BookOpen />} 
            title="Workshops e Cursos"
            subtitle="Aprenda e ganhe pontos com nossos workshops"
            accentColor="secondary"
          />
          <div className="grid grid-cols-1 gap-4">
            {workshops.slice(0, 2).map(workshop => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>
          <div className="mt-4 text-center">
            <a href="/workshops" className="text-secondary-700 hover:text-secondary-800 text-sm font-medium">
              Ver todos os workshops →
            </a>
          </div>
        </section>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section>
          <SectionHeader 
            icon={<Users />} 
            title="Prestadores de Serviços"
            subtitle="Profissionais recomendados da área de decoração"
            accentColor="primary"
          />
          <div className="grid grid-cols-1 gap-4">
            {serviceProviders.slice(0, 2).map(provider => (
              <ServiceProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
          <div className="mt-4 text-center">
            <a href="/prestadores" className="text-primary-700 hover:text-primary-800 text-sm font-medium">
              Ver todos os prestadores →
            </a>
          </div>
        </section>

        <section>
          <SectionHeader 
            icon={<CalendarDays />} 
            title="Próximos Eventos"
            subtitle="Participe e ganhe pontos fazendo check-in"
            accentColor="secondary"
          />
          <div className="grid grid-cols-1 gap-4">
            {events.slice(0, 1).map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          <div className="mt-4 text-center">
            <a href="/eventos" className="text-secondary-700 hover:text-secondary-800 text-sm font-medium">
              Ver todos os eventos →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;