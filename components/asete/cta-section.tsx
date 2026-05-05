import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section id="contato" className="relative isolate overflow-hidden">
      <Image
        src="/images/cta-architecture.jpg"
        alt="Detalhe arquitetônico institucional"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/85" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-10 lg:py-44">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="mb-6 flex items-center gap-4 text-primary-foreground/60">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              <span className="text-[11px] tracking-[0.4em] uppercase">Próximo Passo</span>
            </div>
            <h2 className="font-serif text-balance text-4xl font-light leading-[1.05] text-primary-foreground sm:text-5xl lg:text-7xl">
              Vamos estruturar seu patrimônio com{" "}
              <em className="italic text-accent">estratégia</em>?
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-primary-foreground/75">
              Agende uma conversa reservada com nossos especialistas. Sem compromisso, sem fórmulas
              prontas — apenas uma análise honesta sobre como podemos contribuir.
            </p>
          </div>

          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <a
              href="mailto:contato@asete.com.br"
              className="group inline-flex items-center justify-between gap-6 border border-accent bg-accent px-8 py-5 text-xs tracking-[0.25em] uppercase text-accent-foreground transition-colors hover:bg-primary-foreground hover:border-primary-foreground hover:text-primary"
            >
              Falar com especialista
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-primary-foreground/15 pt-10 text-primary-foreground/70 sm:grid-cols-3">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary-foreground/50">
              E-mail
            </p>
            <p className="mt-3 text-sm">contato@asete.com.br</p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary-foreground/50">
              Telefone
            </p>
            <p className="mt-3 text-sm">+55 (11) 4000-0000</p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-primary-foreground/50">
              Escritório
            </p>
            <p className="mt-3 text-sm">Av. Brigadeiro Faria Lima — São Paulo</p>
          </div>
        </div>
      </div>
    </section>
  )
}
