import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Package, User } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { getProjectBySlug } from '@/data/projects';
import { ImageWithLightbox } from '@/components/portfolio/ImageWithLightbox';
import { Lightbox } from '@/components/portfolio/Lightbox';

const categoryLabels: Record<string, string> = {
  ads: 'Criativos de ads',
  social: 'Social media',
  branding: 'Prova social e autoridade',
  'landing-page': 'Landing page',
  automation: 'Automacao',
};

/**
 * Project detail page with hero image, gallery, and full-screen lightbox.
 */
export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const hasGallery = project.images.some((image) => image.id !== 'coming-soon');

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.description}
        image={project.coverImage}
        type="article"
      />

      <div className="min-h-screen">
        <motion.div
          className="relative w-full h-[74vh] overflow-hidden bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={project.coverImage}
            alt={project.title}
            className="h-full w-full object-contain p-4 md:p-8"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-black/20 pointer-events-none" />
        </motion.div>

        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground font-light">
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{categoryLabels[project.category] ?? project.category}</span>
                </div>
                {project.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4" />
                    <span>{project.location}</span>
                  </div>
                )}
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <p className="text-lg md:text-xl font-light leading-relaxed text-foreground">
                {project.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-4">
              {project.deliverables && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-muted-foreground">
                    <Package className="size-4" />
                    <span>Entregas</span>
                  </div>
                  <p className="font-light text-foreground">{project.deliverables}</p>
                </div>
              )}
              {project.client && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-muted-foreground">
                    <User className="size-4" />
                    <span>Uso</span>
                  </div>
                  <p className="font-light text-foreground">{project.client}</p>
                </div>
              )}
            </div>
          </motion.div>
        </section>

        <section className="px-6 py-12 md:px-8 md:py-16">
          {hasGallery ? (
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {project.images.map((image, index) => (
                <ScrollReveal key={image.id} delay={index * 0.05}>
                  <ImageWithLightbox
                    image={image}
                    onClick={() => openLightbox(index)}
                    priority={index < 4}
                    index={0}
                    className="w-full shadow-[0_0_38px_rgba(255,122,0,0.08)]"
                  />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-3xl rounded-sm border border-[#FF7A00]/20 bg-white/[0.03] px-6 py-12 text-center shadow-[0_0_44px_rgba(255,122,0,0.08)]">
              <p className="text-sm uppercase tracking-[0.3em] text-[#FF7A00]">Em breve</p>
              <h2 className="mt-4 text-3xl font-light tracking-wide">Materiais dessa categoria serao adicionados em breve</h2>
              <p className="mt-4 text-muted-foreground">
                Esta area ja esta separada para receber os proximos trabalhos da XGrowth.
              </p>
            </div>
          )}
        </section>

        {hasGallery && (
          <Lightbox
            images={project.images}
            currentIndex={currentImageIndex}
            isOpen={lightboxOpen}
            onClose={closeLightbox}
            onNavigate={setCurrentImageIndex}
          />
        )}
      </div>
    </>
  );
}
