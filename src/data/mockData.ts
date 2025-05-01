import { User, Store, ServiceProvider, Workshop, Reward, Event, DonationItem } from '../types';

export const currentUser: User = {
  id: '1',
  name: 'Higor Giovane',
  type: 'professional',
  points: 1250,
  level: 'Ouro',
};

export const stores: Store[] = [
  {
    id: '1',
    name: 'Loja Moderna',
    location: 'São Paulo, SP',
    isCertified: true,
    description: 'Especializada em móveis contemporâneos e decoração minimalista.',
    coupons: [
      {
        id: '1',
        code: 'MODERN15',
        discount: '15% OFF',
        validUntil: '2025-06-30',
        description: 'Válido para compras acima de R$500',
      }
    ],
    featuredProducts: [
      {
        id: '1',
        name: 'Poltrona Escandinava',
        price: 1299.90,
        imageUrl: 'https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Poltrona em madeira clara com estofado em tecido cinza.'
      },
      {
        id: '2',
        name: 'Mesa de Centro',
        price: 899.90,
        imageUrl: 'https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Mesa de centro em mármore e metal.'
      }
    ],
    externalLinks: {
      website: 'https://lojamoderna.com.br',
      instagram: 'lojamoderna'
    }
  },
  {
    id: '2',
    name: 'Decor & Arte',
    location: 'Rio de Janeiro, RJ',
    isCertified: true,
    description: 'Peças exclusivas de decoração e obras de arte para sua casa.',
    coupons: [
      {
        id: '2',
        code: 'DECOR10',
        discount: '10% OFF',
        validUntil: '2025-05-15',
        description: 'Válido para qualquer compra',
      }
    ],
    featuredProducts: [
      {
        id: '3',
        name: 'Quadro Abstrato',
        price: 459.90,
        imageUrl: 'https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Quadro abstrato em cores vibrantes, 80x120cm.'
      }
    ],
    externalLinks: {
      website: 'https://decorarte.com.br',
      instagram: 'decorarte',
      facebook: 'decorartebr'
    }
  }
];

export const serviceProviders: ServiceProvider[] = [
  {
    id: '1',
    name: 'Carlos Pereira',
    profession: 'Marceneiro',
    stars: 5,
    isRecommended: true,
    description: 'Especializado em móveis sob medida com acabamento premium.',
    contactInfo: {
      phone: '(11) 99999-8888',
      email: 'carlos@marcenaria.com'
    }
  },
  {
    id: '2',
    name: 'Mariana Costa',
    profession: 'Pintora Decorativa',
    stars: 4,
    isRecommended: true,
    description: 'Especializada em texturas e pinturas especiais para paredes.',
    contactInfo: {
      phone: '(21) 98888-7777',
      website: 'marianacosta.com.br'
    }
  }
];

export const workshops: Workshop[] = [
  {
    id: '1',
    title: 'Tendências em Decoração 2025',
    description: 'Aprenda as principais tendências do ano para projetos de decoração de interiores.',
    duration: 3,
    points: 100,
    date: '2025-04-15T14:00:00',
    isOnline: true,
    status: 'upcoming'
  },
  {
    id: '2',
    title: 'Técnicas de Iluminação',
    description: 'Workshop prático sobre iluminação residencial e comercial.',
    duration: 2,
    points: 80,
    date: '2025-04-20T10:00:00',
    location: 'São Paulo, SP',
    isOnline: false,
    status: 'upcoming'
  }
];

export const rewards: Reward[] = [
  {
    id: '1',
    title: 'Desconto em Lojas Parceiras',
    description: 'Cupom de 20% de desconto em qualquer loja parceira.',
    pointsCost: 500,
    isAvailable: true,
    imageUrl: 'https://images.pexels.com/photos/5650025/pexels-photo-5650025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    title: 'Curso Avançado de Design',
    description: 'Acesso ao curso online completo de design de interiores.',
    pointsCost: 1000,
    isAvailable: true,
    imageUrl: 'https://images.pexels.com/photos/6707577/pexels-photo-6707577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Feira de Decoração SP',
    description: 'A maior feira de decoração do Brasil com mais de 200 expositores.',
    date: '2025-05-10T09:00:00',
    location: 'São Paulo Expo, SP',
    pointsForCheckin: 50,
    imageUrl: 'https://images.pexels.com/photos/2942855/pexels-photo-2942855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    title: 'Encontro de Profissionais',
    description: 'Networking e palestras com profissionais renomados do setor.',
    date: '2025-06-05T18:00:00',
    location: 'Hotel Windsor, Rio de Janeiro',
    pointsForCheckin: 30,
    imageUrl: 'https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const donations: DonationItem[] = [
  {
    id: '1',
    title: 'Móveis para ONG',
    description: 'Procuro doação de móveis em bom estado para ONG que atende crianças carentes.',
    createdBy: {
      id: '3',
      name: 'Maria Oliveira'
    },
    createdAt: '2025-03-10T14:30:00',
    status: 'active',
    contactInfo: 'maria@email.com | (11) 97777-6666'
  },
  {
    id: '2',
    title: 'Material de pintura',
    description: 'Tenho tintas e pincéis para doar para escola de arte comunitária.',
    createdBy: {
      id: '4',
      name: 'João Santos'
    },
    createdAt: '2025-03-15T09:45:00',
    status: 'active',
    contactInfo: 'joao@email.com | (21) 96666-5555'
  }
];
