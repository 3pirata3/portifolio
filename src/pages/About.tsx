import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

/**
 * About page with company positioning and service information.
 */
export default function About() {
  return (
    <>
      <SEOHead
        title="Sobre"
        description={`Conheca a ${photographerInfo.name}: ${photographerInfo.tagline}. ${photographerInfo.biography.split('\n\n')[0]}`}
        image={photographerInfo.portraitImage}
      />

      <div className="min-h-screen">
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                Sobre
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Estrategia, design e performance para negocios digitais
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-sm bg-muted">
                  <img
                    src={photographerInfo.portraitImage}
                    alt="Equipe Xgrowth Company em planejamento digital"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-center gap-4">
                  {photographerInfo.socialLinks.instagram && (
                    <a
                      href={photographerInfo.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="size-5" />
                    </a>
                  )}
                  {photographerInfo.socialLinks.linkedin && (
                    <a
                      href={photographerInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="size-5" />
                    </a>
                  )}
                  {photographerInfo.socialLinks.behance && (
                    <a
                      href={photographerInfo.socialLinks.behance}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-sm hover:bg-accent transition-colors"
                      aria-label="Behance"
                    >
                      <svg
                        className="size-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 8h6a3 3 0 0 1 0 6H3V8z" />
                        <path d="M3 14h7a3 3 0 0 1 0 6H3v-6z" />
                        <path d="M14 7h7" />
                        <path d="M17 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                    {photographerInfo.name}
                  </h2>
                  <p className="text-xl text-muted-foreground font-light tracking-wide">
                    {photographerInfo.tagline}
                  </p>
                </div>

                <Separator />

                <div className="space-y-4">
                  {photographerInfo.biography.split('\n\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base md:text-lg font-light leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-light tracking-wide">O que entra no portifolio</h3>
                  <div className="grid gap-3">
                    {photographerInfo.awards.map((item) => (
                      <p key={item} className="text-muted-foreground font-light">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">E-mail: </span>
                    <a
                      href={`mailto:${photographerInfo.email}`}
                      className="text-foreground hover:text-muted-foreground transition-colors"
                    >
                      {photographerInfo.email}
                    </a>
                  </div>
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Base: </span>
                    <span className="text-foreground">{photographerInfo.location}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
