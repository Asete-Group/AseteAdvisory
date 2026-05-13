"use client"

import { useState } from "react"
import { ArrowUpRight, TrendingUp, Building2, Home, ShieldCheck, Briefcase } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { buildWhatsAppContactUrl } from "@/lib/contact"
import { cn } from "@/lib/utils"

type Offering = {
  title: string
  description: string
}

type Pillar = {
  id: string
  index: string
  title: string
  short: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  letter: string
  heightClass: string
  offerings: Offering[]
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
    offerings: [
      {
        title: "Aviação Corporativa e Executiva",
        description:
          "Apoio consultivo para decisões envolvendo aeronaves corporativas, com análise de uso, estruturação, custos operacionais e aderência ao patrimônio da família ou empresa.",
      },
      {
        title: "Commodities",
        description:
          "Leitura e organização de oportunidades ligadas a commodities, conectando análise comercial, riscos financeiros e objetivos patrimoniais de médio e longo prazo.",
      },
      {
        title: "Importações & Exportações",
        description:
          "Consultoria para operações internacionais, com foco em viabilidade, proteção de capital, fluxo financeiro e integração das decisões ao planejamento patrimonial.",
      },
    ],
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
    offerings: [
      {
        title: "Fundos de Investimento",
        description:
          "Curadoria de fundos alinhados ao perfil do investidor, considerando diversificação, liquidez, risco, horizonte de investimento e papel de cada posição no patrimônio.",
      },
      {
        title: "Previdência Privada",
        description:
          "Estruturação de previdência com foco em eficiência, sucessão e disciplina de longo prazo, integrada aos demais instrumentos patrimoniais do cliente.",
      },
      {
        title: "Renda Fixa e Renda Variável",
        description:
          "Construção de alocações que combinam previsibilidade, potencial de valorização e controle de risco, respeitando objetivos pessoais, familiares e empresariais.",
      },
    ],
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
    offerings: [
      {
        title: "Leilões",
        description:
          "Análise de oportunidades em leilões imobiliários, com avaliação de risco jurídico, potencial financeiro, liquidez e compatibilidade com a estratégia patrimonial.",
      },
      {
        title: "Terrenos",
        description:
          "Curadoria e avaliação de terrenos para aquisição, desenvolvimento ou reserva patrimonial, considerando localização, documentação, vocação e horizonte de valorização.",
      },
      {
        title: "Crédito com Garantia",
        description:
          "Estruturação de crédito com garantia imobiliária para apoiar liquidez, reorganização financeira ou projetos específicos sem perder a visão de preservação patrimonial.",
      },
    ],
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
    offerings: [
      {
        title: "Vida e Sucessão Patrimonial",
        description:
          "Planejamento de proteção pessoal e sucessória para reduzir impactos financeiros em eventos inesperados e preservar a continuidade familiar e empresarial.",
      },
      {
        title: "Aeronaves e Embarcações",
        description:
          "Análise e estruturação de seguros para ativos de alto valor, com atenção a uso, operação, exposição a riscos e adequação das coberturas contratadas.",
      },
      {
        title: "Automóvel e Residencial",
        description:
          "Organização de proteções essenciais para bens pessoais, buscando coberturas coerentes, bom atendimento e integração com a gestão patrimonial do cliente.",
      },
    ],
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
    offerings: [
      {
        title: "Aeronaves e Embarcações",
        description:
          "Uso planejado de consórcios para aquisição de aeronaves e embarcações, preservando liquidez e organizando o investimento dentro de um plano financeiro maior.",
      },
      {
        title: "Cartas Contempladas",
        description:
          "Análise de cartas contempladas para aquisição ou estruturação patrimonial, avaliando custo, prazo, oportunidade e aderência aos objetivos do cliente.",
      },
      {
        title: "Agronegócio",
        description:
          "Estruturas de consórcio voltadas ao agronegócio, com foco em equipamentos, expansão, capitalização e organização financeira para ciclos produtivos.",
      },
    ],
  },
]

export function EcosystemSection() {
  const [active, setActive] = useState<string>(PILLARS[0].id)
  const [selectedPillarId, setSelectedPillarId] = useState<string | null>(null)
  const [selectedOffering, setSelectedOffering] = useState(0)
  const current = PILLARS.find((p) => p.id === active) ?? PILLARS[0]
  const selectedPillar = PILLARS.find((p) => p.id === selectedPillarId) ?? null
  const currentOffering = selectedPillar?.offerings[selectedOffering]

  const openPillar = (pillar: Pillar) => {
    setActive(pillar.id)
    setSelectedPillarId(pillar.id)
    setSelectedOffering(0)
  }

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
                  onClick={() => openPillar(pillar)}
                  className={cn(
                    "group relative min-h-[10.5rem] w-full overflow-hidden rounded-sm border text-left transition-all duration-300 sm:min-h-[12rem] lg:min-h-0",
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
                        "inline-flex h-8 w-8 items-center justify-center border transition-all sm:h-9 sm:w-9 lg:h-10 lg:w-10",
                        isActive
                          ? "border-accent text-accent"
                          : "border-primary-foreground/20 text-primary-foreground/40 group-hover:border-primary-foreground/40",
                      )}
                    >
                      <Icon className="size-3.5 lg:size-4" />
                    </span>
                  </div>

                  <div className="absolute inset-x-5 top-10 bottom-14 flex items-center justify-center sm:top-12 sm:bottom-16 lg:top-16 lg:bottom-20">
                    <span
                      className={cn(
                        "font-serif text-[4.75rem] font-light leading-none tracking-normal transition-colors sm:text-[5.75rem] lg:text-[clamp(5.75rem,8vw,8.5rem)]",
                        isActive ? "text-accent" : "text-primary-foreground",
                      )}
                    >
                      {pillar.letter}
                    </span>
                  </div>

                  <div
                    className={cn(
                      "absolute inset-x-5 bottom-4 border-t pt-3 transition-colors lg:bottom-5 lg:pt-4",
                      isActive ? "border-accent/50" : "border-primary-foreground/15",
                    )}
                  >
                    <p className="text-center text-[10px] font-semibold tracking-[0.16em] uppercase sm:text-[11px] sm:tracking-[0.2em] lg:tracking-[0.24em]">
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
                onClick={(event) => {
                  event.preventDefault()
                  openPillar(current)
                }}
                className="mt-8 inline-flex cursor-pointer items-center gap-2 border-b border-accent pb-1 text-xs tracking-[0.25em] uppercase text-accent transition-colors hover:border-primary-foreground hover:text-primary-foreground"
              >
                Saber mais
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={selectedPillar !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedPillarId(null)
          }
        }}
      >
        <DialogContent className="max-h-[calc(100vh-2rem)] overflow-y-auto border-accent/30 bg-primary p-0 text-primary-foreground shadow-2xl sm:max-w-4xl">
          {selectedPillar && currentOffering ? (
            <div className="grid gap-0 md:grid-cols-[18rem_1fr]">
              <div className="border-b border-primary-foreground/10 bg-primary-foreground/[0.04] p-6 md:border-b-0 md:border-r">
                <DialogHeader>
                  <span className="font-mono text-[11px] tracking-[0.35em] text-accent">
                    CIISC
                  </span>
                  <DialogTitle className="font-serif text-4xl font-light text-primary-foreground">
                    {selectedPillar.title}
                  </DialogTitle>
                  <DialogDescription className="text-sm leading-relaxed text-primary-foreground/65">
                    Escolha uma frente para conhecer em mais detalhes.
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-8 grid gap-3">
                  {selectedPillar.offerings.map((offering, index) => (
                    <button
                      key={offering.title}
                      type="button"
                      onClick={() => setSelectedOffering(index)}
                      className={cn(
                        "rounded-sm border px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.14em] transition-colors",
                        selectedOffering === index
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-primary-foreground/15 bg-primary-foreground/[0.04] text-primary-foreground/75 hover:border-primary-foreground/35 hover:text-primary-foreground",
                      )}
                    >
                      {offering.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 sm:p-8 md:p-10">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.3em] text-accent">
                      {String(selectedOffering + 1).padStart(2, "0")} / 03
                    </p>
                    <h3 className="mt-5 font-serif text-4xl font-light leading-tight text-primary-foreground sm:text-5xl">
                      {currentOffering.title}
                    </h3>
                  </div>
                  <span className="hidden shrink-0 font-serif text-7xl font-light leading-none text-accent/80 sm:block">
                    {selectedPillar.letter}
                  </span>
                </div>

                <p className="mt-8 max-w-2xl text-base leading-relaxed text-primary-foreground/78 sm:text-lg">
                  {currentOffering.description}
                </p>

                <a
                  href={buildWhatsAppContactUrl(
                    `Olá, equipe ASETE. Tenho interesse em entender melhor como ${currentOffering.title} pode contribuir para minha organização patrimonial. Podemos conversar sobre essa frente de ${selectedPillar.title}?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedPillarId(null)}
                  className="mt-10 inline-flex items-center gap-2 border-b border-accent pb-1 text-xs tracking-[0.22em] uppercase text-accent transition-colors hover:border-primary-foreground hover:text-primary-foreground"
                >
                  Solicitar análise personalizada
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  )
}
