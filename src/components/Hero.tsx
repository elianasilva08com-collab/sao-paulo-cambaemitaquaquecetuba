import { CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="inicio" className="pt-24 pb-16 px-4" style={{ background: 'var(--gradient-subtle)' }}>
      <div className="container mx-auto max-w-6xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Aluguel de Caçambas em{" "}
          <span className="text-primary">São Paulo</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          <strong>Há mais de 10 anos</strong> oferecendo soluções completas para remoção de entulho, 
          reformas e obras. Caçambas de diversos tamanhos com{" "}
          <strong className="text-foreground">entrega no mesmo dia</strong> e preço justo.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">Empresa Licenciada</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">Seguro Total</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">Entrega Garantida</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base" asChild>
            <a href="#orcamento">Orçamento Grátis em 30min</a>
          </Button>
          <Button size="lg" variant="outline" className="text-base" asChild>
            <a href="https://api.whatsapp.com/send/?phone=551152951951&text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+aluguel+de+ca%C3%A7ambas+em+Itaquaquecetuba.&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
