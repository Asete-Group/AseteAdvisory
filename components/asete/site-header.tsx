"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "Como Atuamos", href: "#como-atuamos" },
  { label: "Cliente", href: "#cliente" },
  { label: "Diferenciais", href: "#diferenciais" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-baseline gap-2" aria-label="ASETE Advisory">
          <span
            className={cn(
              "font-serif text-2xl tracking-[0.18em] transition-colors",
              scrolled ? "text-primary" : "text-primary-foreground",
            )}
          >
            ASETE
          </span>
          <span
            className={cn(
              "text-[10px] tracking-[0.4em] uppercase transition-colors",
              scrolled ? "text-muted-foreground" : "text-primary-foreground/70",
            )}
          >
            Advisory
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-wide transition-colors",
                scrolled
                  ? "text-foreground/80 hover:text-primary"
                  : "text-primary-foreground/85 hover:text-primary-foreground",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className={cn(
              "hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.2em] uppercase border transition-colors",
              scrolled
                ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                : "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary",
            )}
          >
            Falar com especialista
          </a>

          <button
            type="button"
            className={cn(
              "lg:hidden inline-flex items-center justify-center h-10 w-10 transition-colors",
              scrolled ? "text-primary" : "text-primary-foreground",
            )}
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden bg-background border-b border-border transition-[max-height,opacity] duration-500",
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-6 py-6 gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base text-foreground/85 hover:text-primary border-b border-border/60 last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center px-5 py-3 text-xs tracking-[0.2em] uppercase border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Falar com especialista
          </a>
        </nav>
      </div>
    </header>
  )
}
