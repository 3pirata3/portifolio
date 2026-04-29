import { FormEvent, useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { photographerInfo } from '@/data/photographer';

/**
 * Lightweight lead capture form for the homepage CTA.
 * It uses mailto until a CRM/Formspree endpoint is configured.
 */
export function LeadCaptureForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get('firstName') || '').trim();
    const lastName = String(formData.get('lastName') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const companyName = String(formData.get('companyName') || '').trim();
    const companySector = String(formData.get('companySector') || '').trim();
    const monthlyRevenue = String(formData.get('monthlyRevenue') || '').trim();

    const subject = `Novo lead XGrowth - ${firstName} ${lastName}`;
    const body = [
      `Nome: ${firstName} ${lastName}`,
      `E-mail: ${email}`,
      `Telefone: ${phone}`,
      `Empresa: ${companyName}`,
      `Setor da empresa: ${companySector}`,
      `Faturamento mensal: ${monthlyRevenue}`,
      '',
      'Interesse: Diagnostico da Gestao da Jornada de Compra',
      'Origem: Formulario da pagina principal',
    ].join('\n');

    window.location.href = `mailto:${photographerInfo.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setIsSuccess(true);
    setIsSubmitting(false);
    event.currentTarget.reset();

    setTimeout(() => setIsSuccess(false), 5000);
  };

  if (isSuccess) {
    return (
      <div className="border border-[#FF7A00]/40 rounded-sm p-8 text-center space-y-4 bg-[#FF7A00]/5">
        <CheckCircle2 className="size-12 mx-auto text-[#FF7A00]" />
        <h3 className="text-2xl font-light tracking-wide">Informacoes preparadas</h3>
        <p className="text-muted-foreground font-light">
          Seu aplicativo de e-mail foi aberto com os dados para agendar o diagnostico.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="lead-first-name" className="font-light">
            Nome
          </Label>
          <Input
            id="lead-first-name"
            name="firstName"
            placeholder="Seu nome"
            required
            className="font-light"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lead-last-name" className="font-light">
            Sobrenome
          </Label>
          <Input
            id="lead-last-name"
            name="lastName"
            placeholder="Seu sobrenome"
            required
            className="font-light"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="lead-email" className="font-light">
            E-mail
          </Label>
          <Input
            id="lead-email"
            name="email"
            type="email"
            placeholder="voce@empresa.com"
            required
            className="font-light"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lead-phone" className="font-light">
            Numero de contato
          </Label>
          <Input
            id="lead-phone"
            name="phone"
            type="tel"
            placeholder="(00) 00000-0000"
            required
            className="font-light"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="lead-company-name" className="font-light">
          Empresa
        </Label>
        <Input
          id="lead-company-name"
          name="companyName"
          placeholder="Nome da empresa"
          required
          className="font-light"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="lead-company-sector" className="font-light">
            Setor da empresa
          </Label>
          <Input
            id="lead-company-sector"
            name="companySector"
            placeholder="Ex: saude, educacao, varejo, servicos..."
            required
            className="font-light"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lead-monthly-revenue" className="font-light">
            Faturamento mensal
          </Label>
          <select
            id="lead-monthly-revenue"
            name="monthlyRevenue"
            required
            defaultValue=""
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-light ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="" disabled>
              Selecione uma faixa
            </option>
            <option value="Ate 50 mil">Ate 50 mil</option>
            <option value="50 mil a 100 mil">50 mil a 100 mil</option>
            <option value="100 mil a 300 mil">100 mil a 300 mil</option>
            <option value="300 mil a 1 milhao">300 mil a 1 milhao</option>
            <option value="Acima de 1 milhao">Acima de 1 milhao</option>
          </select>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full py-6 text-base font-light tracking-wide bg-[#FF7A00] text-white hover:bg-[#e86f00]"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 size-5 animate-spin" />
            Preparando...
          </>
        ) : (
          'Quero agendar meu diagnostico'
        )}
      </Button>
    </form>
  );
}
