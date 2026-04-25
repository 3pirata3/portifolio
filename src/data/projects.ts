import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Solidão do Deserto',
    category: 'paisagens',
    year: '2024',
    slug: 'desert-solitude',
    // Photo by Zain Creations on Unsplash
    coverImage: 'https://images.unsplash.com/photo-1733496637708-9470e9c8cfe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjB8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Uma exploração da beleza austera e da grandiosidade silenciosa do sudoeste americano. Esta série captura o jogo entre luz, sombra e formações geológicas ancestrais que definem a paisagem do deserto.',
    client: 'National Geographic',
    camera: 'Hasselblad X2D 100C',
    location: 'Arizona e Utah',
    images: [
      {
        id: '1-1',
        src: 'https://images.unsplash.com/photo-1610142004358-e4e987e4c5af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjF8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Cânion no deserto durante a hora dourada',
        aspectRatio: 'landscape'
      },
      {
        id: '1-2',
        src: 'https://images.unsplash.com/photo-1705321217071-b1b6672fa23c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjF8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Dunas de areia na luz da manhã',
        aspectRatio: 'portrait'
      },
      {
        id: '1-3',
        src: 'https://images.unsplash.com/photo-1727319384541-8b96ca1526e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjF8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Formações rochosas sob o céu estrelado',
        aspectRatio: 'landscape'
      },
      {
        id: '1-4',
        src: 'https://images.unsplash.com/photo-1725986951716-75fb278ecaec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjJ8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Vista do deserto ao pôr do sol',
        aspectRatio: 'square'
      }
    ]
  },
  {
    id: '2',
    title: 'Retratos Urbanos',
    category: 'retratos',
    year: '2024',
    slug: 'urban-portraits',
    coverImage: 'https://images.unsplash.com/photo-1761069234906-a7c77124f641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjJ8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Uma série de retratos celebrando a diversidade e o caráter dos moradores das grandes cidades. Cada retratado foi fotografado em seu lugar urbano favorito, revelando a conexão íntima entre as pessoas e o seu ambiente.',
    client: 'The New York Times Magazine',
    camera: 'Canon EOS R5',
    location: 'Nova York',
    images: [
      {
        id: '2-1',
        src: 'https://images.unsplash.com/photo-1559123988-ebd5228736b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjJ8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Retrato de jovem em ambiente urbano',
        aspectRatio: 'portrait'
      },
      {
        id: '2-2',
        src: 'https://images.unsplash.com/photo-1628173422874-0d18ff5bfb83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjN8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Retrato profissional em luz natural',
        aspectRatio: 'portrait'
      },
      {
        id: '2-3',
        src: 'https://images.unsplash.com/photo-1581329318020-a226e3713ea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjN8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Retrato espontâneo nas ruas',
        aspectRatio: 'square'
      },
      {
        id: '2-4',
        src: 'https://images.unsplash.com/photo-1651464416004-60ae4e4846d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjR8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Retrato com cenário urbano ao fundo',
        aspectRatio: 'portrait'
      }
    ]
  },
  {
    id: '3',
    title: 'Visões Arquitetônicas',
    category: 'arquitetura',
    year: '2023',
    slug: 'architectural-visions',
    coverImage: 'https://images.unsplash.com/photo-1758543437543-6d61ca0fd530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjR8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A arquitetura moderna capturada por uma lente minimalista. Esta série foca em formas geométricas, materialidade e na interação entre a estrutura e a luz natural.',
    client: 'Architectural Digest',
    camera: 'Sony A7R V',
    location: 'Internacional',
    images: [
      {
        id: '3-1',
        src: 'https://images.unsplash.com/photo-1762344682624-176d89eb3bfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjR8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Fachada de edifício moderno em vidro',
        aspectRatio: 'portrait'
      },
      {
        id: '3-2',
        src: 'https://images.unsplash.com/photo-1690927324729-bcf7d2b3ecac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjV8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Interior arquitetônico com luz natural',
        aspectRatio: 'landscape'
      },
      {
        id: '3-3',
        src: 'https://images.unsplash.com/photo-1752756351017-bbe91e0439a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjV8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Estrutura geométrica em concreto',
        aspectRatio: 'square'
      },
      {
        id: '3-4',
        src: 'https://images.unsplash.com/photo-1748940644273-47564655923f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjV8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Edifício contemporâneo ao entardecer',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '4',
    title: 'Moda em Movimento',
    category: 'editorial',
    year: '2023',
    slug: 'fashion-forward',
    coverImage: 'https://images.unsplash.com/photo-1682232568244-edbb92614c2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjZ8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Uma série editorial que explora a moda contemporânea por meio de composições ousadas e iluminação dramática. Realizado em locação e em estúdio.',
    client: 'Vogue',
    camera: 'Phase One XF IQ4',
    location: 'Nova York e Paris',
    images: [
      {
        id: '4-1',
        src: 'https://images.unsplash.com/photo-1730724620317-2b806898bdda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjZ8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Retrato editorial de moda',
        aspectRatio: 'portrait'
      },
      {
        id: '4-2',
        src: 'https://images.unsplash.com/photo-1704137892949-e480ceaebe24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njd8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Modelo em iluminação dramática',
        aspectRatio: 'portrait'
      },
      {
        id: '4-3',
        src: 'https://images.unsplash.com/photo-1631970283992-6b57250a4a29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njd8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Fotografia de moda em ambiente urbano',
        aspectRatio: 'landscape'
      },
      {
        id: '4-4',
        src: 'https://images.unsplash.com/photo-1540513325222-55b3afd3ed5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njh8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Retrato editorial de moda',
        aspectRatio: 'portrait'
      }
    ]
  },
  {
    id: '5',
    title: 'Histórias da Montanha',
    category: 'documentário',
    year: '2023',
    slug: 'mountain-stories',
    coverImage: 'https://images.unsplash.com/photo-1742260765447-239ed006350a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njh8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Série documental acompanhando comunidades das montanhas e sua relação com o ambiente alpino em transformação. Um projeto de um ano documentando a vida em altitude.',
    client: 'Projeto Pessoal',
    camera: 'Fujifilm GFX 100 II',
    location: 'Alpes Suíços',
    images: [
      {
        id: '5-1',
        src: 'https://images.unsplash.com/photo-1680287327539-9467451a8b81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njh8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Paisagem montanhosa ao amanhecer',
        aspectRatio: 'landscape'
      },
      {
        id: '5-2',
        src: 'https://images.unsplash.com/photo-1621765808360-5b2ea25d147a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njl8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Vilarejo alpino no inverno',
        aspectRatio: 'landscape'
      },
      {
        id: '5-3',
        src: 'https://images.unsplash.com/photo-1721960778604-6a814f039347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njl8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Picos montanhosos na neblina',
        aspectRatio: 'portrait'
      },
      {
        id: '5-4',
        src: 'https://images.unsplash.com/photo-1654362248566-6804dbcc5bdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njl8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Nascer do sol sobre cordilheira',
        aspectRatio: 'landscape'
      }
    ]
  },
  {
    id: '6',
    title: 'Luz da Costa',
    category: 'paisagens',
    year: '2022',
    slug: 'coastal-light',
    coverImage: 'https://images.unsplash.com/photo-1669908752972-e04c3b65e855?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njl8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A atmosfera em constante mudança do litoral, capturada em diferentes estações e condições climáticas. Uma meditação sobre luz, água e tempo.',
    location: 'Pacífico Noroeste',
    camera: 'Nikon Z9',
    images: [
      {
        id: '6-1',
        src: 'https://images.unsplash.com/photo-1619508126123-3586ee993858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzB8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Ondas do oceano ao pôr do sol',
        aspectRatio: 'landscape'
      },
      {
        id: '6-2',
        src: 'https://images.unsplash.com/photo-1566303060899-999a74200af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzB8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Costa rochosa na bruma matinal',
        aspectRatio: 'landscape'
      },
      {
        id: '6-3',
        src: 'https://images.unsplash.com/photo-1762686185418-2bffbb8d8fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzB8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Praia na hora dourada',
        aspectRatio: 'landscape'
      },
      {
        id: '6-4',
        src: 'https://images.unsplash.com/photo-1594927058779-aa4c1b5804a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzF8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Falésias costeiras sob luz dramática',
        aspectRatio: 'portrait'
      }
    ]
  },
  {
    id: '7',
    title: 'Sessões de Estúdio',
    category: 'retratos',
    year: '2022',
    slug: 'studio-sessions',
    coverImage: 'https://images.unsplash.com/photo-1616267624976-b45d3a7bac73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzF8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Retratos de estúdio com controle total, valorizando forma, luz e expressão. Uma abordagem clássica para retratados contemporâneos.',
    client: 'Diversos Editoriais',
    camera: 'Hasselblad H6D-100c',
    location: 'Estúdio em Nova York',
    images: [
      {
        id: '7-1',
        src: 'https://images.unsplash.com/photo-1616267624976-b45d3a7bac73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzF8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Retrato de estúdio com iluminação dramática',
        aspectRatio: 'portrait'
      },
      {
        id: '7-2',
        src: 'https://images.unsplash.com/photo-1551536548-4de53e534e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzJ8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Retrato clássico em luz suave',
        aspectRatio: 'portrait'
      },
      {
        id: '7-3',
        src: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzJ8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Retrato com fundo minimalista',
        aspectRatio: 'square'
      },
      {
        id: '7-4',
        src: 'https://images.unsplash.com/photo-1758521233019-e53cb9ce77b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzJ8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Retrato contemporâneo em estúdio',
        aspectRatio: 'portrait'
      }
    ]
  },
  {
    id: '8',
    title: 'Luzes da Cidade',
    category: 'editorial',
    year: '2022',
    slug: 'city-lights',
    coverImage: 'https://images.unsplash.com/photo-1582210413269-f0bf6d13f58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzN8&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Paisagens urbanas noturnas e a energia elétrica da cidade depois do anoitecer. Longas exposições e luz ambiente criam uma qualidade onírica.',
    client: 'Adobe Creative Cloud',
    camera: 'Sony A7S III',
    location: 'Tóquio e Nova York',
    images: [
      {
        id: '8-1',
        src: 'https://images.unsplash.com/photo-1617293134227-0ec282f3ed89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzN8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Rua noturna com luzes de neon',
        aspectRatio: 'landscape'
      },
      {
        id: '8-2',
        src: 'https://images.unsplash.com/photo-1643124859906-b5f7ef3e210d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzN8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Skyline urbano ao entardecer',
        aspectRatio: 'landscape'
      },
      {
        id: '8-3',
        src: 'https://images.unsplash.com/photo-1761870033405-d1474ec5dae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzR8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Fotografia noturna de arquitetura urbana',
        aspectRatio: 'portrait'
      },
      {
        id: '8-4',
        src: 'https://images.unsplash.com/photo-1701012292510-83de4283ef1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzR8&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Centro da cidade à noite com rastros de luz',
        aspectRatio: 'landscape'
      }
    ]
  }
];

// Função auxiliar — buscar projeto pelo slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Função auxiliar — buscar projetos por categoria
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Função auxiliar — projetos em destaque (primeiros 4)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

// Função auxiliar — próximo/anterior projeto
export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};
