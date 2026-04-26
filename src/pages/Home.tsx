import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-xgrowth.png';
import strategyBackgroundImage from '@/assets/strategy-background.png';
import teamImage from '@/assets/team-xgrowth.png';
import { photographerInfo } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm';
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/80" />
          </div>

          <div className="relative h-full flex flex-col items-center justify-center px-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[76rem] max-w-[96vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/55 blur-3xl"
            />
            <motion.div
              className="relative z-10 text-center space-y-6 max-w-5xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-wide text-white drop-shadow-[0_4px_22px_rgba(0,0,0,0.95)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {photographerInfo.name.toUpperCase()}
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl font-light tracking-wide text-white drop-shadow-[0_3px_16px_rgba(0,0,0,0.95)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {photographerInfo.tagline}
              </motion.p>

              <motion.p
                className="text-base md:text-lg font-light leading-relaxed text-white/95 max-w-2xl mx-auto drop-shadow-[0_3px_14px_rgba(0,0,0,0.95)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {photographerInfo.heroIntroduction}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <a
                  href="#lead-capture"
                  className="inline-flex h-12 items-center justify-center rounded-sm bg-[#FF7A00] px-7 text-base font-light tracking-wide text-white transition-colors hover:bg-[#e86f00]"
                >
                  Quero diagnosticar meu negocio
                </a>
                <Link
                  to="/portfolio"
                  className="inline-flex h-12 items-center justify-center rounded-sm border border-white/40 px-7 text-base font-light tracking-wide text-white transition-colors hover:bg-white/10"
                >
                  Ver resultados
                </Link>
              </motion.div>
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

        <section className="relative overflow-hidden px-6 py-24 text-white md:py-32 lg:px-8 bg-[linear-gradient(180deg,#050505,#100905_52%,#050505)]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,122,0,0.16),transparent_28%,transparent_72%,rgba(255,122,0,0.1)),linear-gradient(180deg,rgba(255,122,0,0.08),transparent_18%,transparent_80%,rgba(255,122,0,0.08))]"
          />
          <div className="relative z-10 max-w-7xl mx-auto space-y-16">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#FF7A00]">
                  Sistema comercial completo
                </p>
                <h2 className="text-3xl md:text-5xl font-light tracking-wide">
                  Metodologia comprovada para transformar seu negocio em uma maquina de vendas previsivel
                </h2>
                <p className="text-lg font-light leading-relaxed text-white/68">
                  A XGrowth estrutura o crescimento onde ele realmente acontece: demanda, processo comercial,
                  retencao e execucao. O portfolio mostra a ponta visivel; a metodologia sustenta o resultado.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {growthPillars.map(({ title, description, Icon }, index) => (
                <ScrollReveal key={title} delay={index * 0.1}>
                  <div className="h-full border border-[#FF7A00]/18 rounded-sm p-6 md:p-8 bg-white/[0.035] shadow-[0_0_44px_rgba(255,122,0,0.08)] transition-colors hover:border-[#FF7A00]/50">
                    <div className="size-11 rounded-sm bg-[#FF7A00]/12 flex items-center justify-center mb-8 shadow-[0_0_24px_rgba(255,122,0,0.22)]">
                      <Icon className="size-5 text-[#FF7A00]" />
                    </div>
                    <h3 className="text-2xl font-light tracking-wide mb-4">{title}</h3>
                    <p className="text-white/64 font-light leading-relaxed">{description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative min-h-[720px] overflow-hidden bg-black px-6 py-20 text-white sm:px-10 md:py-28 lg:px-20 xl:px-24 shadow-[inset_0_42px_90px_rgba(255,122,0,0.08),inset_0_-42px_90px_rgba(255,122,0,0.08)]">
          <img
            src={strategyBackgroundImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78),rgba(0,0,0,0.46)_40%,rgba(0,0,0,0.22)_64%,rgba(0,0,0,0.34)),linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0.06)_45%,rgba(0,0,0,0.56))]"
          />

          <div className="relative z-10 mx-auto grid min-h-[560px] max-w-[1680px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-8 xl:grid-cols-[minmax(430px,0.72fr)_minmax(260px,0.52fr)_minmax(560px,0.82fr)]">
            <ScrollReveal className="lg:col-start-1 lg:justify-self-start">
              <div className="max-w-[34rem] space-y-8 lg:justify-self-start">
                <p className="text-sm uppercase tracking-[0.3em] text-[#FF7A00]">
                  Por que Iceberg?
                </p>
                <h2 className="text-4xl font-light leading-[1.08] tracking-wide md:text-5xl lg:text-6xl">
                  99% das agencias atuam apenas na ponta do iceberg
                </h2>
                <p className="text-base font-light leading-relaxed text-white/72 md:text-lg">
                  Redes sociais e trafego pago sao importantes, mas representam apenas a parte visivel.
                  Na XGrowth, atuamos em todos os processos para criar previsibilidade em cada etapa.
                </p>

                <div className="space-y-4">
                  <h3 className="text-2xl font-light tracking-wide">A diferenca XGrowth</h3>
                  <div className="grid gap-3">
                    {xgrowthDifference.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="size-5 mt-0.5 text-[#FF7A00]" />
                        <span className="text-white/72 font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <blockquote className="border-l border-[#FF7A00] pl-6 text-xl md:text-2xl font-light leading-relaxed text-white/88">
                  Revelamos e exploramos as oportunidades ocultas para gerar resultados extraordinarios.
                </blockquote>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="w-full lg:justify-self-end xl:col-start-3">
              <div className="relative w-full max-w-2xl overflow-hidden rounded-lg border border-[#FF7A00]/35 bg-black/48 p-6 shadow-[0_0_80px_rgba(255,122,0,0.24)] backdrop-blur-md md:p-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent"
                />
                <div className="space-y-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-[#FF7A00]">
                        Funil Iceberg
                      </p>
                      <h3 className="text-3xl font-light tracking-wide mt-3">
                        Metodologia XGrowth
                      </h3>
                    </div>
                    <BarChart3 className="size-10 text-[#FF7A00]" />
                  </div>

                  <div className="space-y-6">
                    {[
                      ['Ponta visivel', 'Conteudo, criativos e trafego pago', 'w-full'],
                      ['Processo comercial', 'Follow-up, proposta, CRM e treinamento', 'w-10/12'],
                      ['Oferta e posicionamento', 'Mensagem, publico, promessa e prova', 'w-8/12'],
                      ['Retencao e recorrencia', 'Experiencia, recompra e indicacao', 'w-6/12'],
                      ['Dados e otimizacao', 'Metricas, gargalos e escala', 'w-4/12'],
                    ].map(([label, detail, width]) => (
                      <div key={label} className="space-y-3">
                        <div className="flex items-center justify-between gap-4 text-sm">
                          <span className="font-light text-white">{label}</span>
                          <span className="hidden text-right font-light text-white/62 sm:inline">{detail}</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-white/12 overflow-hidden">
                          <div className={`${width} h-full rounded-full bg-[#FF7A00] shadow-[0_0_16px_rgba(255,122,0,0.58)]`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative overflow-hidden px-6 py-24 text-white md:py-32 lg:px-8 bg-[linear-gradient(180deg,#050505,#120904_50%,#050505)]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(65deg,transparent,rgba(255,122,0,0.14)_45%,transparent_70%)]"
          />
          <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-sm bg-black shadow-[0_0_70px_rgba(255,122,0,0.14)]">
                <img
                  src={teamImage}
                  alt="Equipe XGrowth analisando campanhas e metricas de performance"
                  className="w-full aspect-[16/10] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="absolute left-5 bottom-5 rounded-sm bg-black/55 px-4 py-2 text-sm font-light tracking-wide text-white backdrop-blur-sm">
                  Equipe XGrowth em analise de performance
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#FF7A00]">
                  Time e processo
                </p>
                <h2 className="text-3xl md:text-5xl font-light tracking-wide">
                  Campanhas analisadas com olhar de vendas, nao so de midia
                </h2>
                <p className="text-lg text-white/68 font-light leading-relaxed">
                  Nossa equipe olha para criativos, metricas, oferta, atendimento e retencao no mesmo
                  processo. Assim, cada campanha deixa de ser uma acao isolada e vira parte de um sistema
                  previsivel de crescimento.
                </p>
                <a
                  href="#lead-capture"
                  className="inline-flex items-center gap-2 text-base font-light tracking-wide text-white hover:text-[#FF7A00] transition-colors group"
                >
                  <span>Quero entender meu potencial oculto</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative overflow-hidden px-6 py-24 text-white md:py-32 lg:px-8 bg-[linear-gradient(180deg,#050505,#0f0703_54%,#050505)]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,122,0,0.12),transparent_35%,transparent_66%,rgba(255,122,0,0.1))]"
          />
          <div className="relative z-10 max-w-7xl mx-auto space-y-16">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#FF7A00]">
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
                  <div className="h-full border border-[#FF7A00]/18 rounded-sm p-6 bg-white/[0.035] shadow-[0_0_44px_rgba(255,122,0,0.08)]">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-sm text-white/46 font-light">
                        0{index + 1}
                      </span>
                      <Icon className="size-5 text-[#FF7A00]" />
                    </div>
                    <h3 className="text-2xl font-light tracking-wide mb-4">{title}</h3>
                    <p className="text-white/64 font-light leading-relaxed">{description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="lead-capture" className="relative overflow-hidden px-6 py-24 text-white md:py-32 lg:px-8 bg-[linear-gradient(180deg,#050505,#130a04_50%,#050505)]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,122,0,0.14)_48%,transparent_76%)]"
          />
          <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
            <ScrollReveal>
              <div className="space-y-6 lg:sticky lg:top-24">
                <p className="text-sm uppercase tracking-[0.3em] text-[#FF7A00]">
                  Diagnostico XGrowth
                </p>
                <h2 className="text-3xl md:text-5xl font-light tracking-wide">
                  Deixe seus dados para avaliarmos o potencial oculto do seu negocio
                </h2>
                <p className="text-lg text-white/68 font-light leading-relaxed">
                  Recebemos suas informacoes iniciais e entramos em contato para entender onde estao os
                  gargalos de demanda, conversao e retencao.
                </p>
                <div className="grid gap-3 text-white/68 font-light">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 mt-0.5 text-[#FF7A00]" />
                    <span>Analise de marketing e processo comercial</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 mt-0.5 text-[#FF7A00]" />
                    <span>Identificacao dos principais gargalos de crescimento</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 mt-0.5 text-[#FF7A00]" />
                    <span>Proximo passo claro para gerar mais previsibilidade</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="border border-[#FF7A00]/22 rounded-sm p-6 md:p-8 bg-white/[0.04] shadow-[0_0_70px_rgba(255,122,0,0.12)] backdrop-blur-sm">
                <LeadCaptureForm />
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative overflow-hidden py-24 text-white md:py-32 bg-[linear-gradient(180deg,#050505,#0e0703_52%,#050505)]">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(70deg,rgba(255,122,0,0.12),transparent_32%,transparent_68%,rgba(255,122,0,0.08))]"
          />
          <ScrollReveal>
            <div className="relative z-10 text-center mb-16 space-y-4 px-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#FF7A00]">
                Prova e execucao
              </p>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                Portfolio de resultados
              </h2>
              <p className="text-lg text-white/68 font-light tracking-wide max-w-2xl mx-auto">
                Criativos, campanhas, paginas e materiais que mostram como a estrategia ganha forma na pratica.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
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
            <div className="relative z-10 flex justify-center mt-16 px-6">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-white hover:text-[#FF7A00] transition-colors"
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
