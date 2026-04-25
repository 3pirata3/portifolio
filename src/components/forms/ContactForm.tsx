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
import { photographerInfo } from '@/data/photographer';

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'O nome deve ter pelo menos 2 caracteres' })
    .max(100, { message: 'O nome deve ter menos de 100 caracteres' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Insira um e-mail valido' })
    .max(255, { message: 'O e-mail deve ter menos de 255 caracteres' }),
  projectType: z.enum(['creative', 'traffic', 'brand'], {
    required_error: 'Selecione um tipo de projeto',
  }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres' })
    .max(1000, { message: 'A mensagem deve ter menos de 1000 caracteres' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const projectTypeLabels: Record<ContactFormValues['projectType'], string> = {
  creative: 'Criativos, paginas e campanha',
  traffic: 'Trafego, demanda e performance',
  brand: 'Funil, comercial e retencao',
};

/**
 * Contact form with validation and a mailto fallback.
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

    const subject = `Novo contato Xgrowth - ${projectTypeLabels[data.projectType]}`;
    const body = [
      `Nome: ${data.name}`,
      `E-mail: ${data.email}`,
      `Tipo de projeto: ${projectTypeLabels[data.projectType]}`,
      '',
      data.message,
    ].join('\n');

    window.location.href = `mailto:${photographerInfo.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setIsSuccess(true);
    form.reset();
    setIsSubmitting(false);

    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
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
        <h3 className="text-2xl font-light tracking-wide">Mensagem Preparada</h3>
        <p className="text-muted-foreground font-light leading-relaxed">
          Seu aplicativo de e-mail foi aberto com a mensagem para a Xgrowth Company.
        </p>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  <SelectItem value="creative" className="font-light">
                    Criativos, paginas e campanha
                  </SelectItem>
                  <SelectItem value="traffic" className="font-light">
                    Trafego, demanda e performance
                  </SelectItem>
                  <SelectItem value="brand" className="font-light">
                    Funil, comercial e retencao
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

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
                  placeholder="Conte sobre seu negocio, seus gargalos de venda e o que voce quer melhorar..."
                  className="min-h-32 font-light resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        {form.formState.errors.root && (
          <div className="text-sm text-destructive font-light">
            {form.formState.errors.root.message}
          </div>
        )}

        <Button
          type="submit"
          className="w-full py-6 text-base font-light tracking-wide"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-5 animate-spin" />
              Preparando...
            </>
          ) : (
            'Preparar Mensagem'
          )}
        </Button>
      </form>
    </Form>
  );
}
