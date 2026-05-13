const STEPS = [
  {
    number: "I",
    title: "Diagnóstico",
    description:
      "Imersão profunda no patrimônio, nos objetivos e nos riscos. Entendemos antes de propor.",
  },
  {
    number: "II",
    title: "Estruturação",
    description:
      "Organização patrimonial desenvolvida de forma integrada entre as áreas do CIISC.",
  },
  {
    number: "III",
    title: "Acompanhamento",
    description:
      "Reuniões periódicas, ajustes táticos e leitura permanente do cenário macro e regulatório.",
  },
]

export function ProcessSection() {
  return (
    <section id="como-atuamos" className="bg-secondary py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-4 text-muted-foreground">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            <span className="text-[11px] tracking-[0.4em] uppercase">Como Atuamos</span>
          </div>
          <h2 className="font-serif text-balance text-4xl font-light leading-[1.1] text-primary sm:text-5xl lg:text-6xl">
            Um método <em className="italic">consultivo</em>, em três movimentos.
          </h2>
        </div>

        <div className="mt-20 grid gap-px bg-border lg:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="group relative bg-secondary p-8 transition-colors hover:bg-background lg:p-12"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-5xl font-light text-accent lg:text-6xl">
                  {step.number}
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  Etapa
                </span>
              </div>
              <h3 className="mt-12 font-serif text-3xl font-light text-primary lg:text-4xl">
                {step.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
