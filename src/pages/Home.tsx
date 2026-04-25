import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-xgrowth.png';
import { photographerInfo } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Gem,
  Repeat,
  Rocket,
  Search,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const growthPillars = [
  {
    title: 'Retencao de clientes',
    description: 'Estrategias para manter seus clientes comprando mais e por mais tempo.',
    Icon: Repeat,
  },
  {
    title: 'Treinamento do time comercial',
    description: 'Capacitacao completa para transformar seu time em maquina de vendas.',
    Icon: Users,
  },
  {
    title: 'Aumento de demanda com marketing estrategico',
    description: 'Marketing que gera leads qualificados e prontos para comprar.',
    Icon: TrendingUp,
  },
];

const icebergStages = [
  {
    title: 'Exploracao',
    description: 'Analise profunda do seu negocio, mercado e concorrencia para identificar oportunidades unicas.',
    Icon: Search,
  },
  {
    title: 'Lapidacao',
    description: 'Refinamento da estrategia e criacao de processos otimizados para maxima eficiencia.',
    Icon: Gem,
  },
  {
    title: 'Escala',
    description: 'Implementacao e execucao das estrategias com foco em crescimento sustentavel.',
    Icon: Rocket,
  },
  {
    title: 'Extracao',
    description: 'Otimizacao continua e extracao maxima de resultados para ROI exponencial.',
    Icon: Target,
  },
];

const xgrowthDifference = [
  'Visao completa do funil de vendas',
  'Previsibilidade em cada etapa',
  'Controle total do processo',
  'Resultados mensuraveis e escalaveis',
];

/**
 * Homepage with company positioning, Iceberg methodology, and featured work.
 */
export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <SEOHead />

      <div className="min-h-screen">
        <section className="relative h-screen w-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Profissional XGrowth Company em apresentacao de campanhas"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/75" />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center px-6">
            <motion.div
              className="text-center space-y-6 max-w-5xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-wide text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {photographerInfo.name.toUpperCase()}
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl font-light tracking-wide text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {photographerInfo.tagline}
              </motion.p>

              <motion.p
                className="text-base md:text-lg font-light leading-relaxed text-white/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {photographerInfo.heroIntroduction}
              </motion.p>
            </motion.div>

            <motion.div
              className="absolute bottom-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>

        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto space-y-16">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  Sistema comercial completo
                </p>
                <h2 className="text-3xl md:text-5xl font-light tracking-wide">
                  Metodologia comprovada para transformar seu negocio em uma maquina de vendas previsivel
                </h2>
                <p className="text-lg font-light leading-relaxed text-muted-foreground">
                  A XGrowth estrutura o crescimento onde ele realmente acontece: demanda, processo comercial,
                  retencao e execucao. O portfolio mostra a ponta visivel; a metodologia sustenta o resultado.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {growthPillars.map(({ title, description, Icon }, index) => (
                <ScrollReveal key={title} delay={index * 0.1}>
                  <div className="h-full border border-border rounded-sm p-6 md:p-8 bg-background">
                    <div className="size-11 rounded-sm bg-accent flex items-center justify-center mb-8">
                      <Icon className="size-5 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-light tracking-wide mb-4">{title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">{description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 px-6 lg:px-8 border-t border-border">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-8">
                <div className="space-y-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                    Por que Iceberg?
                  </p>
                  <h2 className="text-3xl md:text-5xl font-light tracking-wide">
                    99% das agencias atuam apenas na ponta do iceberg
                  </h2>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    Redes sociais e trafego pago sao importantes, mas representam apenas a parte visivel.
                    Na XGrowth, atuamos em todos os processos para criar previsibilidade em cada etapa.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-light tracking-wide">A diferenca XGrowth</h3>
                  <div className="grid gap-3">
                    {xgrowthDifference.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="size-5 mt-0.5 text-foreground" />
                        <span className="text-muted-foreground font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <blockquote className="border-l border-foreground pl-6 text-xl md:text-2xl font-light leading-relaxed">
                  Revelamos e exploramos as oportunidades ocultas para gerar resultados extraordinarios.
                </blockquote>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative border border-border rounded-sm p-6 md:p-8 bg-accent/30 overflow-hidden">
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
                        Funil Iceberg
                      </p>
                      <h3 className="text-2xl md:text-3xl font-light tracking-wide mt-2">
                        Metodologia XGrowth
                      </h3>
                    </div>
                    <BarChart3 className="size-10 text-muted-foreground" />
                  </div>

                  <div className="space-y-3">
                    {[
                      ['Ponta visivel', 'Conteudo, criativos e trafego pago', 'w-full'],
                      ['Processo comercial', 'Follow-up, proposta, CRM e treinamento', 'w-10/12'],
                      ['Oferta e posicionamento', 'Mensagem, publico, promessa e prova', 'w-8/12'],
                      ['Retencao e recorrencia', 'Experiencia, recompra e indicacao', 'w-6/12'],
                      ['Dados e otimizacao', 'Metricas, gargalos e escala', 'w-4/12'],
                    ].map(([label, detail, width]) => (
                      <div key={label} className="space-y-2">
                        <div className="flex items-center justify-between gap-4 text-sm">
                          <span className="font-light text-foreground">{label}</span>
                          <span className="font-light text-muted-foreground hidden sm:inline">{detail}</span>
                        </div>
                        <div className="h-3 rounded-sm bg-background overflow-hidden">
                          <div className={`${width} h-full bg-foreground`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto space-y-16">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  4 etapas estrategicas
                </p>
                <h2 className="text-3xl md:text-5xl font-light tracking-wide">
                  Revelamos o potencial oculto do seu negocio
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {icebergStages.map(({ title, description, Icon }, index) => (
                <ScrollReveal key={title} delay={index * 0.08}>
                  <div className="h-full border border-border rounded-sm p-6 bg-background">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-sm text-muted-foreground font-light">
                        0{index + 1}
                      </span>
                      <Icon className="size-5 text-muted-foreground" />
                    </div>
                    <h3 className="text-2xl font-light tracking-wide mb-4">{title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">{description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 border-t border-border">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4 px-6">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Prova e execucao
              </p>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                Portfolio de resultados
              </h2>
              <p className="text-lg text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
                Criativos, campanhas, paginas e materiais que mostram como a estrategia ganha forma na pratica.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                aspectRatio="landscape"
                showCategory={true}
                index={index}
              />
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-16 px-6">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>Ver Todo o Portifolio</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}
