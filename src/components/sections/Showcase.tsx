'use client'
import { ExternalLink, Github, Globe, Plus, Search } from 'lucide-react'
import React, { useState } from 'react'
import { PROJECTS, PROJECT_CATEGORIES, type ProjectCategory } from '../../data'
import { Button } from '@/components/ui/button'

const Showcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todos')

  const filteredProjects =
    activeCategory === 'Todos'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory)

  return (
    <section id="showcase" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Secao cabecalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mural da Comunidade
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Explore projetos incríveis desenvolvidos pelos membros da nossa
              comunidade. Inspire-se, contribua e divulgue seu trabalho para o
              mundo.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Button
              icon={<Plus size={18} className="mr-2" />}
              iconPosition="left"
              size="lg"
              className="w-full md:w-auto shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-shadow duration-300"
            >
              Divulgar projeto
            </Button>
          </div>
        </div>

        {/* Filtros - com scroll no mobile */}
        <div className="mb-10 border-b border-border pb-4 overflow-x-auto hide-scrollbar">
          <div className="flex flex-nowrap md:flex-wrap gap-2 min-w-max md:min-w-0 pb-2 md:pb-0">
            {PROJECT_CATEGORIES.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-primary/10 text-primary-destaque border border-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grade de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-muted transition-all duration-300 hover:shadow-xl hover:shadow-black/50 flex flex-col h-full"
            >
              {/* Imagem de capa */}
              <div className="relative h-48 overflow-hidden bg-background-secondary">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 z-20">
                  <span className="px-2 py-1 bg-black/60 backdrop-blur-md text-[10px] font-bold text-foreground uppercase rounded border border-white/10 tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Conteudo */}
              <div className="p-5 flex flex-col grow">
                {/* Autor */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={project.authorAvatar}
                    alt={project.author}
                    className="w-8 h-8 rounded-full border border-zinc-700"
                  />
                  <span className="text-xs text-muted-foreground font-medium">
                    por <span className="text-zinc-200">{project.author}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary-destaque transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2 grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-1 rounded bg-background-secondary/50 text-muted-foreground border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Acoes */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/50">
                  <a
                    href={project.demoUrl}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-primary/10 text-primary-destaque text-xs font-medium hover:bg-primary hover:text-foreground transition-all"
                  >
                    <Globe size={14} /> Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-background-secondary text-zinc-300 text-xs font-medium hover:bg-zinc-700 hover:text-foreground transition-all"
                  >
                    <Github size={14} /> Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estado vazio */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-card rounded-xl border border-border border-dashed">
            <Search className="w-12 h-12 text-muted mx-auto mb-4" />
            <p className="text-muted-foreground">
              Nenhum projeto encontrado nesta categoria.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Button
            variant="outline-primary"
            size="lg"
            className="px-8 w-full h-10 sm:w-auto"
            onClick={() => {}}
          >
            Ver todos os projetos <ExternalLink size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Showcase
