import { projects } from '@/data/projects';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';

/**
 * Portfolio page with masonry grid.
 */
export default function Portfolio() {
  return (
    <>
      <SEOHead
        title="Servicos e Portifolio"
        description="Conheca os servicos da XGrowth Company com exemplos reais de social media, prova social, criativos comerciais e conteudos para conversao."
      />

      <div className="min-h-screen bg-black text-white">
        <section className="relative overflow-hidden px-6 py-24 md:py-32 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,122,0,0.16),transparent_46%),linear-gradient(180deg,#050505,#120804_54%,#050505)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D7A545]/70 to-transparent"
          />
          <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#FF7A00]">
                Servicos XGrowth
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                Portifolio de criativos
              </h1>
              <p className="text-lg md:text-xl text-white/68 font-light tracking-wide max-w-3xl mx-auto">
                Uma selecao organizada dos materiais que desenvolvemos para redes sociais, prova social,
                campanhas comerciais e conteudos que ajudam o lead a avancar na decisao de compra.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden px-4 py-12 md:px-8 md:py-16">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,122,0,0.08),transparent_32%,transparent_72%,rgba(255,122,0,0.1))]"
          />
          <div className="relative z-10 mx-auto max-w-7xl">
            <PortfolioGrid projects={projects} />
          </div>
        </section>

        <div className="h-24" />
      </div>
    </>
  );
}
