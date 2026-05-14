import { Compass, Layers, ScrollText } from "lucide-react"

const ITEMS = [
  {
    icon: Compass,
    title: "Atendimento consultivo",
    description:
      "Sem metas comerciais ocultas. Cada recomendação parte do interesse do cliente, não do produto.",
  },
  {
    icon: Layers,
    title: "Estrutura completa",
    description:
      "Cinco pilares sob a mesma curadoria: Consultoria, Investimentos, Imóveis, Seguros e Consórcios.",
  },
  {
    icon: ScrollText,
    title: "Planejamento patrimonial",
    description:
      "Sucessão, proteção e evolução patrimonial integradas em um único plano de longo prazo.",
  },
]

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="bg-primary text-primary-foreground py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-4 text-primary-foreground/60">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            <span className="text-[11px] tracking-[0.4em] uppercase">Diferenciais</span>
          </div>
          <h2 className="font-serif text-balance text-4xl font-light leading-[1.1] sm:text-5xl lg:text-6xl">
            O que nos torna uma <em className="italic text-accent">escolha distinta</em>.
          </h2>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3 md:gap-px md:bg-primary-foreground/15">
          {ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="bg-primary p-1 md:p-10">
                <div className="flex h-14 w-14 items-center justify-center border border-accent/40 text-accent">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-8 font-serif text-2xl font-light leading-snug lg:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
