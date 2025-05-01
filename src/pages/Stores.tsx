import React, { useState } from 'react';
import { ShoppingBag, Search } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import StoreCard from '../components/StoreCard';
import { stores } from '../data/mockData';

const Stores: React.FC = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredStores = stores
    .filter(store => store.name.toLowerCase().includes(search.toLowerCase()))
    .filter(store => (category ? store.category === category : true));

  return (
    <div className="p-6 space-y-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lojas Parceiras</h1>
          <p className="text-gray-600">Encontre lojas certificadas pelo clube</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          {/* Input de busca */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar lojas..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Filtro de categoria */}
          <div className="relative">
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className="w-full sm:w-52 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Filtrar por categoria</option>
              <option value="moda">Moda</option>
              <option value="tecnologia">Tecnologia</option>
              <option value="alimentos">Alimentos</option>
              {/* Adicione mais categorias conforme necessário */}
            </select>
          </div>
        </div>
      </div>

      <section>
        <SectionHeader 
          icon={<ShoppingBag />} 
          title="Lojas Certificadas"
          subtitle="Lojas verificadas e aprovadas pelo clube"
          accentColor="primary"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredStores.slice(0, visibleCount).map(store => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>

        {/* Botão Carregar mais */}
        {visibleCount > filteredStores.length && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              Carregar mais
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Stores;
