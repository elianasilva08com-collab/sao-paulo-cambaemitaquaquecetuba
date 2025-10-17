import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Olá! Gostaria de um orçamento.%0A%0ANome: ${formData.name}%0ATelefone: ${formData.phone}%0AEmail: ${formData.email}%0AMensagem: ${formData.message}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/551152951951?text=${whatsappMessage}`, '_blank');
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será direcionado para nosso WhatsApp para finalizar o orçamento.",
    });

    // Reset form
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="orcamento" className="py-16 px-4" style={{ background: 'var(--gradient-subtle)' }}>
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Solicite seu Orçamento</h2>
          <p className="text-lg text-muted-foreground">
            Resposta em até <strong className="text-foreground">30 minutos</strong>
          </p>
        </div>

        <Card className="p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nome completo
              </label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Telefone / WhatsApp
              </label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mensagem (opcional)
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Conte-nos sobre seu projeto"
                rows={4}
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Enviar Orçamento via WhatsApp
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};
