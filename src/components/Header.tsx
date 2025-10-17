import { Truck, Phone } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Truck className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Caçamba em São Paulo</h1>
              <p className="text-xs text-muted-foreground">Aluguel de Caçambas</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-medium hover:text-primary transition-colors">
              Início
            </a>
            <a href="#servicos" className="text-sm font-medium hover:text-primary transition-colors">
              Serviços
            </a>
            <a href="#orcamento" className="text-sm font-medium hover:text-primary transition-colors">
              Orçamento
            </a>
            <a href="#contato" className="text-sm font-medium hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          <a href="tel:1152951951" className="flex items-center gap-2 text-primary font-semibold">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">(11) 5295-1951</span>
          </a>
        </div>
      </div>
    </header>
  );
};
