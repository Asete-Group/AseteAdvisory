"use client"

import { useState } from "react"
import { ArrowUpRight, TrendingUp, Building2, Home, ShieldCheck, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

type Pillar = {
  id: string
  index: string
  title: string
  short: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const PILLARS: Pillar[] = [
  {
    id: "investimentos",
    index: "01",
    title: "Investimentos",
    short: "Alocação estratégica e diversificação inteligente",
    description:
      "Carteiras desenhadas sob medida, com foco em preservação de capital, performance ajustada ao risco e diversificação global.",
    icon: TrendingUp,
  },
  {
    id: "consorcios",
    index: "02",
    title: "Consórcios",
    short: "Ferramenta estratégica de aquisição e capital",
    description:
      "Estruturas de consórcio como instrumento de planejamento financeiro — não apenas de compra, mas de alavancagem e proteção.",
    icon: Briefcase,
  },
  {
    id: "imoveis",
    index: "03",
    title: "Imóveis",
    short: "Investimento imobiliário com inteligência patrimonial",
    description:
      "Curadoria de oportunidades imobiliárias, análise de viabilidade e estruturação de operações para investidores qualificados.",
    icon: Building2,
  },
  {
    id: "seguros",
    index: "04",
    title: "Seguros",
    short: "Proteção patrimonial e sucessória",
    description:
      "Soluções de seguro de vida, seguros para pessoa-chave e estruturas de proteção para famílias e empresas.",
    icon: ShieldCheck,
  },
  {
    id: "consultoria",
    index: "05",
    title: "Consultoria",
    short: "Planejamento patrimonial integrado",
    description:
      "Diagnóstico, estratégia e acompanhamento contínuo. Um conselheiro permanente para decisões de alta relevância.",
    icon: Home,
  },
]

export function EcosystemSection() {
  const [active, setActive] = useState<string>(PILLARS[0].id)
  const current = PILLARS.find((p) => p.id === active) ?? PILLARS[0]

  return (
    <section id="ecossistema" className="relative bg-primary text-primary-foreground py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-4 text-primary-foreground/60">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              <span className="text-[11px] tracking-[0.4em] uppercase">Nosso Ecossistema</span>
            </div>
            <h2 className="font-serif text-balance text-4xl font-light leading-[1.05] sm:text-5xl lg:text-6xl">
              CIISC — cinco frentes,
              <br />
              uma <em className="italic text-accent">única estratégia</em>.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Tudo o que envolve o seu patrimônio sob uma mesma visão. Cada frente é coordenada para que
              decisões em uma área fortaleçam todas as outras.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* List */}
          <div className="lg:col-span-7 border-t border-primary-foreground/15">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon
              const isActive = active === pillar.id
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onMouseEnter={() => setActive(pillar.id)}
                  onFocus={() => setActive(pillar.id)}
                  onClick={() => setActive(pillar.id)}
                  className={cn(
                    "group flex w-full items-center justify-between gap-6 border-b border-primary-foreground/15 py-7 text-left transition-colors lg:py-9",
                    isActive ? "text-primary-foreground" : "text-primary-foreground/55 hover:text-primary-foreground/85",
                  )}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs tracking-[0.3em] text-primary-foreground/40">
                      {pillar.index}
                    </span>
                    <span className="font-serif text-3xl font-light sm:text-4xl lg:text-5xl">
                      {pillar.title}
                    </span>
                  </div>
                  <span
                    className={cn(
                      "hidden md:inline-flex h-10 w-10 items-center justify-center border transition-all",
                      isActive
                        ? "border-accent text-accent"
                        : "border-primary-foreground/20 text-primary-foreground/40 group-hover:border-primary-foreground/40",
                    )}
                  >
                    <Icon className="size-4" />
                  </span>
                </button>
              )
            })}
          </div>

          {/* Detail */}
          <div className="lg:col-span-5 lg:pl-4">
            <div className="sticky top-32 border border-primary-foreground/15 p-8 lg:p-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="font-mono text-[11px] tracking-[0.3em] text-accent">
                  {current.index} / {String(PILLARS.length).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-serif text-3xl font-light leading-tight">{current.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{current.short}</p>
              <div className="my-8 h-px w-full bg-primary-foreground/15" />
              <p className="text-base leading-relaxed text-primary-foreground/85">{current.description}</p>
              <a
                href="#contato"
                className="mt-10 inline-flex items-center gap-2 border-b border-accent pb-1 text-xs tracking-[0.25em] uppercase text-accent hover:text-primary-foreground hover:border-primary-foreground transition-colors"
              >
                Saber mais
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
