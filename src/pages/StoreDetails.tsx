import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ShoppingBag, MapPin, ExternalLink, Tag, Star, Phone, Mail, Globe, ChevronLeft } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';
import { ImageGallery } from '../components/ui/ImageGallery';
import StatusBadge from '../components/StatusBadge';
import { stores } from '../data/mockData';
import { formatCurrency } from '../lib/utils';
import { motion } from 'framer-motion';

const StoreDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const store = stores.find(s => s.id === id);

  if (!store) {
    return (
      <div className="p-6">
        <div className="flex flex-col items-center justify-center py-12">
          <ShoppingBag className="h-12 w-12 text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Loja não encontrada</h2>
          <p className="text-gray-500 mb-6">A loja que você está procurando não existe ou foi removida.</p>
          <Link
            to="/lojas"
            className="px-4 py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors"
          >
            Voltar para lojas
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-4">
        <Link to="/lojas" className="text-primary-700 hover:text-primary-800 flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Voltar para lojas
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-card overflow-hidden border border-gray-200 mb-6">
        <div className="relative h-64 bg-center bg-cover" style={{ backgroundImage: `url(${store.imageUrl})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{store.name}</h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{store.location}</span>
                  </div>
                  {store.rating && (
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-secondary-500 fill-secondary-500 mr-1" />
                      <span>{store.rating}</span>
                    </div>
                  )}
                  {store.isCertified && <StatusBadge variant="certified" />}
                </div>
              </div>
              <div className="flex space-x-3">
                {store.externalLinks.website && (
                  <a 
                    href={store.externalLinks.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors px-4 py-2 rounded-lg flex items-center"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    Website
                  </a>
                )}
                {store.externalLinks.instagram && (
                  <a 
                    href={`https://instagram.com/${store.externalLinks.instagram}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors px-4 py-2 rounded-lg flex items-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Instagram
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="about" className="p-6">
          <TabsList className="w-full justify-start mb-6">
            <TabsTrigger value="about">Sobre</TabsTrigger>
            <TabsTrigger value="products">Produtos</TabsTrigger>
            <TabsTrigger value="coupons">Cupons</TabsTrigger>
            <TabsTrigger value="gallery">Galeria</TabsTrigger>
            <TabsTrigger value="reviews">Avaliações</TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-3">Sobre a loja</h2>
                <p className="text-gray-600">{store.description}</p>
              </div>

              {store.categories && (
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Categorias</h3>
                  <div className="flex flex-wrap gap-2">
                    {store.categories.map(category => (
                      <span 
                        key={category}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Informações de contato</h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  {store.contactInfo?.phone && (
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 text-gray-400 mr-2" />
                      <span>{store.contactInfo.phone}</span>
                    </div>
                  )}
                  {store.contactInfo?.email && (
                    <div className="flex items-center text-sm">
                      <Mail className="h-4 w-4 text-gray-400 mr-2" />
                      <span>{store.contactInfo.email}</span>
                    </div>
                  )}
                  {store.contactInfo?.address && (
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                      <span>{store.contactInfo.address}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="products">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {store.featuredProducts.map(product => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div 
                    className="h-48 bg-center bg-cover" 
                    style={{ backgroundImage: `url(${product.imageUrl})` }}
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                    <p className="text-primary-700 font-medium mb-2">
                      {formatCurrency(product.price)}
                    </p>
                    {product.description && (
                      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    )}
                    <a 
                      href={store.externalLinks.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors text-sm font-medium"
                    >
                      Ver no site
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="coupons">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {store.coupons.map(coupon => (
                <motion.div 
                  key={coupon.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-secondary-200 bg-secondary-50 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800">{coupon.discount}</h3>
                      <p className="text-sm text-gray-600">{coupon.description}</p>
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 text-secondary-700 mr-1" />
                      <span className="text-secondary-700 font-medium text-sm">{coupon.code}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    Válido até: {new Date(coupon.validUntil).toLocaleDateString('pt-BR')}
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="gallery">
            {store.gallery && <ImageGallery images={store.gallery} />}
          </TabsContent>

          <TabsContent value="reviews">
            <div className="space-y-4">
              {store.reviews?.map((review, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gray-50 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-medium">
                        {review.author.charAt(0)}
                      </div>
                      <span className="ml-2 font-medium">{review.author}</span>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-4 w-4 ${i < review.rating ? 'text-secondary-500 fill-secondary-500' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StoreDetails;