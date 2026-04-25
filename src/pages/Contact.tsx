import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { ContactForm } from '@/components/forms/ContactForm';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';

/**
 * Contact page with form and contact information.
 */
export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contato"
        description={`Entre em contato com a ${photographerInfo.name} para estruturar marketing, vendas, retencao e crescimento previsivel. ${photographerInfo.availability}.`}
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
                Entre em Contato
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                Vamos conversar sobre como transformar seu negocio em uma maquina de vendas previsivel
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                    Envie uma Mensagem
                  </h2>
                  <p className="text-muted-foreground font-light">
                    Preencha o formulario e conte quais gargalos de crescimento voce quer resolver. {photographerInfo.availability}.
                  </p>
                </div>

                <ContactForm />
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                    Informacoes de Contato
                  </h2>
                  <p className="text-muted-foreground font-light">
                    Prefere falar diretamente? Veja os canais da Xgrowth Company.
                  </p>
                </div>

                <Separator />

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-sm bg-accent">
                      <Mail className="size-5 text-muted-foreground" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-light tracking-wide text-muted-foreground">
                        E-mail
                      </p>
                      <a
                        href={`mailto:${photographerInfo.email}`}
                        className="text-base md:text-lg font-light hover:text-muted-foreground transition-colors"
                      >
                        {photographerInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-sm bg-accent">
                      <Phone className="size-5 text-muted-foreground" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-light tracking-wide text-muted-foreground">
                        Telefone
                      </p>
                      <a
                        href={`tel:${photographerInfo.phone}`}
                        className="text-base md:text-lg font-light hover:text-muted-foreground transition-colors"
                      >
                        {photographerInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-sm bg-accent">
                      <MapPin className="size-5 text-muted-foreground" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-light tracking-wide text-muted-foreground">
                        Base
                      </p>
                      <p className="text-base md:text-lg font-light">
                        {photographerInfo.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="h-16" />
      </div>
    </>
  );
}
