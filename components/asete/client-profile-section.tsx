const PROFILES = [
  {
    label: "01",
    title: "Empresários",
    description:
      "Que precisam separar a saúde financeira da empresa do patrimônio pessoal e estruturar uma sucessão sólida.",
  },
  {
    label: "02",
    title: "Profissionais de alta renda",
    description:
      "Médicos, executivos e sócios de escritórios que buscam transformar receita recorrente em patrimônio duradouro.",
  },
  {
    label: "03",
    title: "Investidores",
    description:
      "Que já acumularam patrimônio relevante e desejam uma visão consolidada, independente e criteriosa.",
  },
]

export function ClientProfileSection() {
  return (
    <section id="cliente" className="bg-background py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <div className="mb-6 flex items-center gap-4 text-muted-foreground">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              <span className="text-[11px] tracking-[0.4em] uppercase">Para quem atendemos</span>
            </div>
            <h2 className="font-serif text-balance text-4xl font-light leading-[1.1] text-primary sm:text-5xl lg:text-6xl">
              Clientes que tratam o patrimônio como <em className="italic">projeto de vida</em>.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Trabalhamos com perfis exigentes que valorizam discrição, profundidade técnica e um
              relacionamento duradouro.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-3 lg:gap-16">
          {PROFILES.map((profile) => (
            <article key={profile.label} className="border-t border-border pt-8">
              <span className="font-mono text-[11px] tracking-[0.3em] text-accent">{profile.label}</span>
              <h3 className="mt-6 font-serif text-3xl font-light text-primary lg:text-4xl">
                {profile.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {profile.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
