'use client'

import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-background border-t border-subtle py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="mb-8 md:mb-10">
          <a
            href="#home"
            onClick={scrollToTop}
            className="flex flex-col items-center gap-2 cursor-pointer group hover:opacity-80 transition-opacity"
          >
            <img
              src="/logo.svg"
              alt="RR Fullstack Developers"
              className="h-12 w-12 transition-transform group-hover:scale-110 duration-500"
            />
            <div className="flex flex-col items-center mt-2">
              <span className="font-bold text-[10px] tracking-widest text-muted-secondary group-hover:text-zinc-300 transition-colors">
                FULLSTACK DEVELOPERS
              </span>
              <span className="font-bold text-[10px] tracking-widest text-primrary group-hover:text-primary-destaque transition-colors">
                RORAIMA
              </span>
            </div>
          </a>
        </div>

        <div className="flex gap-4 md:gap-6 mb-8 md:mb-12 flex-wrap justify-center">
          {[Linkedin, Twitter, Github, Instagram, Facebook].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="p-2.5 bg-background-secondary text-zinc-300 rounded-full hover:bg-primary hover:text-foreground transition-all hover:scale-110 duration-300 hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 text-center">
          <p className="text-muted text-xs md:text-sm">
            © {new Date().getFullYear()} RR Fullstack Developers.
          </p>
          <span className="hidden md:block text-zinc-800">•</span>
          <p className="text-muted text-xs md:text-sm">
            Desenvolvido com ❤️ em Roraima.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
