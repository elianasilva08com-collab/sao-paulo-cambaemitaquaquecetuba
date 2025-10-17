import { Truck, DollarSign, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Services = () => {
  const benefits = [
    {
      icon: Truck,
      title: "Entrega no Mesmo Dia",
      description: "Garantimos entrega no mesmo dia ou em até 24h após a confirmação do pedido.",
      highlight: "Garantimos",
    },
    {
      icon: DollarSign,
      title: "Sem Pegadinhas",
      description: "Preço fixo sem taxas extras. Período de locação flexível, adaptado às suas necessidades.",
      highlight: "Preço fixo",
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Empresa licenciada com seguro completo e alvará da prefeitura para sua tranquilidade.",
      highlight: "seguro completo",
    },
  ];

  return (
    <section id="servicos" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground">
            <strong className="text-foreground">Mais de 5.000 clientes atendidos</strong> com caçambas 
            de diversos tamanhos para atender suas necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 text-center transition-all hover:shadow-lg"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">
                <strong className="text-foreground">{benefit.highlight}</strong>{" "}
                {benefit.description.replace(benefit.highlight, "")}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
