import React from 'react';
import { CalendarDays, Search } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import EventCard from '../components/EventCard';
import { events } from '../data/mockData';

const Events: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Eventos</h1>
          <p className="text-gray-600">Participe e ganhe pontos fazendo check-in</p>
        </div>
        <div className="mt-4 md:mt-0 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar eventos..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <section>
        <SectionHeader 
          icon={<CalendarDays />} 
          title="Próximos Eventos"
          subtitle="Participe e ganhe pontos fazendo check-in"
          accentColor="secondary"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;