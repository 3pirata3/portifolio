import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2 } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

// Schema de validação com boas práticas de segurança
const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'O nome deve ter pelo menos 2 caracteres' })
    .max(100, { message: 'O nome deve ter menos de 100 caracteres' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Insira um e-mail válido' })
    .max(255, { message: 'O e-mail deve ter menos de 255 caracteres' }),
  projectType: z.enum(['editorial', 'commercial', 'personal'], {
    required_error: 'Selecione um tipo de projeto',
  }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres' })
    .max(1000, { message: 'A mensagem deve ter menos de 1000 caracteres' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

/**
 * Componente de formulário de contato com validação e tratamento de erros
 * Usa react-hook-form + zod para validação tipada
 */
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      projectType: undefined,
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Integração com Formspree — substitua YOUR_FORM_ID pelo seu ID real
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          projectType: data.projectType,
          message: data.message,
          _subject: `Novo contato (${data.projectType}) de ${data.name}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar a mensagem');
      }

      setIsSuccess(true);
      form.reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      form.setError('root', {
        message: 'Não foi possível enviar a mensagem. Tente novamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        className="bg-accent border border-border rounded-sm p-8 text-center space-y-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <CheckCircle2 className="size-16 mx-auto text-green-600 dark:text-green-400" />
        </motion.div>
        <h3 className="text-2xl font-light tracking-wide">Mensagem Enviada!</h3>
        <p className="text-muted-foreground font-light leading-relaxed">
          Obrigada pelo contato. Responderei o mais breve possível.
        </p>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Nome */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-light tracking-wide">
                Nome
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Seu nome completo"
                  className="font-light"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        {/* E-mail */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-light tracking-wide">
                E-mail
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  className="font-light"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        {/* Tipo de projeto */}
        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-light tracking-wide">
                Tipo de Projeto
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="font-light">
                    <SelectValue placeholder="Selecione o tipo de projeto" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-popover z-50">
                  <SelectItem value="editorial" className="font-light">
                    Editorial
                  </SelectItem>
                  <SelectItem value="commercial" className="font-light">
                    Comercial
                  </SelectItem>
                  <SelectItem value="personal" className="font-light">
                    Pessoal
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        {/* Mensagem */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-light tracking-wide">
                Mensagem
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Conte-me sobre o seu projeto..."
                  className="min-h-32 font-light resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        {/* Erro geral */}
        {form.formState.errors.root && (
          <div className="text-sm text-destructive font-light">
            {form.formState.errors.root.message}
          </div>
        )}

        {/* Botão de envio */}
        <Button
          type="submit"
          className="w-full py-6 text-base font-light tracking-wide"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-5 animate-spin" />
              Enviando...
            </>
          ) : (
            'Enviar Mensagem'
          )}
        </Button>
      </form>
    </Form>
  );
}
