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
  letter: string
  heightClass: string
}

const PILLARS: Pillar[] = [
  {
    id: "consultoria",
    index: "01",
    title: "Consultoria",
    short: "Planejamento patrimonial integrado",
    description:
      "Diagnóstico, clareza e acompanhamento contínuo. Um conselheiro permanente para decisões de alta relevância.",
    icon: Building2,
    letter: "C",
    heightClass: "lg:h-[22rem]",
  },
  {
    id: "investimentos",
    index: "02",
    title: "Investimentos",
    short: "Alocação criteriosa e diversificação inteligente",
    description:
      "Carteiras desenhadas sob medida, com foco em preservação de capital, performance ajustada ao risco e diversificação global.",
    icon: TrendingUp,
    letter: "I",
    heightClass: "lg:h-[18rem]",
  },
  {
    id: "imoveis",
    index: "03",
    title: "Imóveis",
    short: "Investimento imobiliário com inteligência patrimonial",
    description:
      "Curadoria de oportunidades imobiliárias, análise de viabilidade e estruturação de operações para investidores qualificados.",
    icon: Home,
    letter: "I",
    heightClass: "lg:h-[15.5rem]",
  },
  {
    id: "seguros",
    index: "04",
    title: "Seguros",
    short: "Proteção patrimonial e sucessória",
    description:
      "Soluções de seguro de vida, seguros para pessoa-chave e estruturas de proteção para famílias e empresas.",
    icon: ShieldCheck,
    letter: "S",
    heightClass: "lg:h-[19.5rem]",
  },
  {
    id: "consorcios",
    index: "05",
    title: "Consórcios",
    short: "Ferramenta planejada de aquisição e capital",
    description:
      "Estruturas de consórcio como instrumento de planejamento financeiro, indo além da compra para apoiar alavancagem e proteção.",
    icon: Briefcase,
    letter: "C",
    heightClass: "lg:h-[22rem]",
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
              CIISC: cinco frentes,
              <br />
              uma <em className="italic text-accent">visão consolidada</em>.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Tudo o que envolve o seu patrimônio sob uma mesma visão. Cada frente é coordenada para que
              decisões em uma área fortaleçam todas as outras.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-10 text-center">
            <p className="font-serif text-4xl font-light leading-none text-primary-foreground sm:text-5xl lg:text-6xl">
              Tudo começa pelo:
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:items-end">
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
                    "group relative min-h-[16rem] w-full overflow-hidden rounded-sm border text-left transition-all duration-300 sm:min-h-[18rem] lg:min-h-0",
                    pillar.heightClass,
                    isActive
                      ? "border-accent/70 bg-primary-foreground/[0.08] text-primary-foreground shadow-[0_24px_80px_rgba(0,0,0,0.22)]"
                      : "border-primary-foreground/15 bg-primary-foreground/[0.035] text-primary-foreground/70 hover:border-primary-foreground/35 hover:bg-primary-foreground/[0.06] hover:text-primary-foreground",
                  )}
                  aria-pressed={isActive}
                >
                  <div className="absolute inset-x-5 top-5 flex items-center justify-end">
                    <span
                      className={cn(
                        "inline-flex h-10 w-10 items-center justify-center border transition-all",
                        isActive
                          ? "border-accent text-accent"
                          : "border-primary-foreground/20 text-primary-foreground/40 group-hover:border-primary-foreground/40",
                      )}
                    >
                      <Icon className="size-4" />
                    </span>
                  </div>

                  <div className="absolute inset-x-5 top-16 bottom-20 flex items-center justify-center">
                    <span
                      className={cn(
                        "font-serif text-[7rem] font-light leading-none tracking-normal transition-colors sm:text-[8rem] lg:text-[clamp(5.75rem,8vw,8.5rem)]",
                        isActive ? "text-accent" : "text-primary-foreground",
                      )}
                    >
                      {pillar.letter}
                    </span>
                  </div>

                  <div
                    className={cn(
                      "absolute inset-x-5 bottom-5 border-t pt-4 transition-colors",
                      isActive ? "border-accent/50" : "border-primary-foreground/15",
                    )}
                  >
                    <p className="text-center text-[10px] font-semibold tracking-[0.18em] uppercase sm:text-[11px] sm:tracking-[0.22em] lg:tracking-[0.24em]">
                      {pillar.title}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="mt-10 grid gap-8 border-t border-primary-foreground/15 pt-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-3">
              <span className="font-mono text-[11px] tracking-[0.3em] text-accent">
                {current.index} / {String(PILLARS.length).padStart(2, "0")}
              </span>
            </div>
            <div className="lg:col-span-4">
              <h3 className="font-serif text-3xl font-light leading-tight lg:text-4xl">{current.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/65">{current.short}</p>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base leading-relaxed text-primary-foreground/85">{current.description}</p>
              <a
                href="#contato"
                className="mt-8 inline-flex items-center gap-2 border-b border-accent pb-1 text-xs tracking-[0.25em] uppercase text-accent transition-colors hover:border-primary-foreground hover:text-primary-foreground"
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
