import Image from "next/image"

export function AboutSection() {
  return (
    <section id="sobre" className="relative bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-4 text-muted-foreground">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              <span className="text-[11px] tracking-[0.4em] uppercase">Sobre a Asete</span>
            </div>
            <h2 className="font-serif text-balance text-4xl font-light leading-[1.1] text-primary sm:text-5xl lg:text-6xl">
              Uma consultoria <em className="italic">independente</em>, construída sobre confiança e visão
              estratégica.
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/about-portrait.jpg"
                alt="Reunião consultiva em escritório privado"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-12 border-t border-border pt-16 lg:grid-cols-3 lg:gap-12">
          <div>
            <p className="font-serif text-2xl text-primary leading-snug">Independência</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Atuamos sem amarras com instituições. Nossas decisões refletem unicamente o interesse do
              cliente.
            </p>
          </div>
          <div>
            <p className="font-serif text-2xl text-primary leading-snug">Visão estratégica</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Construímos planos patrimoniais que equilibram preservação, sucessão e crescimento ao
              longo de gerações.
            </p>
          </div>
          <div>
            <p className="font-serif text-2xl text-primary leading-snug">Ecossistema CIISC</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Investimentos, Consórcios, Imóveis, Seguros e Consultoria integrados em uma única
              estrutura coordenada.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
