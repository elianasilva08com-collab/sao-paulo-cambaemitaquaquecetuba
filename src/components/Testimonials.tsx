import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "Mooca, São Paulo",
      rating: 5,
      text: "Serviço excelente! Entregaram no mesmo dia e o preço foi justo. Recomendo!",
    },
    {
      name: "João Santos",
      location: "Vila Mariana, São Paulo",
      rating: 5,
      text: "Profissionais sérios e pontuais. Já usei 3 vezes e sempre perfeito!",
    },
    {
      name: "Ana Costa",
      location: "Tatuapé, São Paulo",
      rating: 5,
      text: "Melhor preço da região e atendimento impecável. Super recomendo!",
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 transition-all hover:shadow-lg"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
