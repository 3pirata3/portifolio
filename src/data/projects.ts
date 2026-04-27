import socialMedia01 from '@/assets/portfolio/social-media/1.png';
import socialMedia02 from '@/assets/portfolio/social-media/2.png';
import socialMedia03 from '@/assets/portfolio/social-media/3.png';
import socialMedia04 from '@/assets/portfolio/social-media/4.png';
import socialMedia05 from '@/assets/portfolio/social-media/5.png';
import socialMedia06 from '@/assets/portfolio/social-media/6.png';
import socialMedia07 from '@/assets/portfolio/social-media/7.png';
import socialMedia08 from '@/assets/portfolio/social-media/8.png';
import socialMedia09 from '@/assets/portfolio/social-media/9.png';
import socialMedia10 from '@/assets/portfolio/social-media/10.png';
import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Social Media Comercial',
    category: 'social',
    year: '2026',
    slug: 'social-media-comercial',
    coverImage: socialMedia01,
    description:
      'Posts desenvolvidos para posicionar a marca com clareza, manter presenca constante e transformar conteudo em parte do processo comercial.',
    client: 'Marcas que precisam vender com presenca digital',
    deliverables: 'Posts de feed, criativos informativos e pecas de autoridade',
    location: 'Instagram e Facebook',
    images: [
      {
        id: 'social-media-1',
        src: socialMedia01,
        alt: 'Criativo de social media desenvolvido pela XGrowth',
        aspectRatio: 'portrait',
      },
      {
        id: 'social-media-2',
        src: socialMedia02,
        alt: 'Post vertical de social media com design comercial',
        aspectRatio: 'portrait',
      },
      {
        id: 'social-media-3',
        src: socialMedia03,
        alt: 'Peca de conteudo para redes sociais',
        aspectRatio: 'portrait',
      },
    ],
  },
  {
    id: '2',
    title: 'Prova Social e Autoridade',
    category: 'branding',
    year: '2026',
    slug: 'prova-social-e-autoridade',
    coverImage: socialMedia04,
    description:
      'Criativos que reforcam confianca, profissionalismo e percepcao de valor para ajudar o cliente a entender por que escolher a empresa.',
    client: 'Autoridade, reputacao e validacao de marca',
    deliverables: 'Posts de prova social, posicionamento e reforco de credibilidade',
    location: 'Redes sociais e campanhas de relacionamento',
    images: [
      {
        id: 'proof-1',
        src: socialMedia04,
        alt: 'Criativo de prova social para redes sociais',
        aspectRatio: 'portrait',
      },
      {
        id: 'proof-2',
        src: socialMedia05,
        alt: 'Peca visual de autoridade para marca',
        aspectRatio: 'portrait',
      },
      {
        id: 'proof-3',
        src: socialMedia06,
        alt: 'Post de reputacao e prova social',
        aspectRatio: 'portrait',
      },
    ],
  },
  {
    id: '3',
    title: 'Criativos de Oferta para Ads',
    category: 'ads',
    year: '2026',
    slug: 'criativos-de-oferta-para-ads',
    coverImage: socialMedia07,
    description:
      'Pecas pensadas para leitura rapida, destaque de promessa e comunicacao direta da oferta em campanhas de captacao e conversao.',
    client: 'Campanhas de Meta Ads e aquisicao de leads',
    deliverables: 'Criativos de oferta, variacoes de anuncio e chamadas comerciais',
    location: 'Meta Ads, Instagram e Facebook',
    images: [
      {
        id: 'ads-1',
        src: socialMedia07,
        alt: 'Criativo de oferta para anuncio',
        aspectRatio: 'portrait',
      },
      {
        id: 'ads-2',
        src: socialMedia08,
        alt: 'Peca comercial para campanha paga',
        aspectRatio: 'portrait',
      },
    ],
  },
  {
    id: '4',
    title: 'Conteudo para Conversao',
    category: 'social',
    year: '2026',
    slug: 'conteudo-para-conversao',
    coverImage: socialMedia09,
    description:
      'Conteudos com visual profissional e mensagem objetiva para educar o publico, quebrar objecoes e aproximar o lead da decisao de compra.',
    client: 'Conteudo estrategico para nutrir e converter',
    deliverables: 'Posts educativos, criativos de valor e pecas de apoio comercial',
    location: 'Instagram, Facebook e funis digitais',
    images: [
      {
        id: 'conversion-1',
        src: socialMedia09,
        alt: 'Conteudo estrategico para conversao',
        aspectRatio: 'portrait',
      },
      {
        id: 'conversion-2',
        src: socialMedia10,
        alt: 'Post comercial para nutricao de leads',
        aspectRatio: 'portrait',
      },
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter((project) => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug);

  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
};
