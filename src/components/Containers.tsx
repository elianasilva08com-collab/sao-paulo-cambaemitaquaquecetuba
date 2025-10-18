import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Containers = () => {
  const containers = [
    {
      size: "3m³",
      title: "Caçamba 3m³",
      description: "Ideal para pequenos entulhos e limpezas residenciais",
      badge: "Mais Econômica",
      badgeVariant: "secondary" as const,
    },
    {
      size: "5m³",
      title: "Caçamba 5m³",
      description: "Perfeita para reformas de cômodos e pequenas obras",
      badge: "Mais Procurada",
      badgeVariant: "default" as const,
    },
    {
      size: "7m³",
      title: "Caçamba 7m³",
      description: "Para reformas médias e obras de médio porte",
      badge: "Custo-Benefício",
      badgeVariant: "outline" as const,
    },
    {
      size: "10m³",
      title: "Caçamba 10m³",
      description: "Obras grandes e reformas completas",
      badge: "Alto Volume",
      badgeVariant: "outline" as const,
    },
  ];

  return (
    <section className="py-16 px-4" style={{ background: 'var(--gradient-subtle)' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tamanhos Disponíveis</h2>
          <p className="text-lg text-muted-foreground">
            Escolha o tamanho ideal para seu projeto
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {containers.map((container, index) => (
            <Card 
              key={index}
              className="p-6 text-center transition-all hover:shadow-lg relative overflow-hidden group"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="absolute top-4 right-4">
                <Badge variant={container.badgeVariant} className="text-xs">
                  {container.badge}
                </Badge>
              </div>
              
              <div className="mb-4 mt-2">
                <div className="text-4xl font-bold text-primary mb-2">{container.size}</div>
                <h3 className="text-lg font-semibold">{container.title}</h3>
              </div>
              
              <p className="text-sm text-muted-foreground">{container.description}</p>
              
              <div className="mt-4 pt-4 border-t border-border">
                <a 
                  href="#orcamento"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Solicitar Orçamento →
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
