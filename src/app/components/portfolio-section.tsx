import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/app/components/ui/card"
// import { Badge } from "@/app/components/ui/badge"
import { AnimatedElement } from "@/app/components/motion/animated-element"

interface Project {
  slug: string
  image: string
  title: string
  description: string
  tags: string[]
  imageAlt: string
}

const Portfolio = () => {
  const t = useTranslations('Portfolio')

  const projects: Project[] = [
    {
      slug: 'myciecisnieniem.pl',
      image: '/images/underpressure-small-min.png',
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      tags: t.raw('projects.project1.tags') as string[],
      imageAlt: t('projects.project1.imageAlt')
    },
    {
      slug: 'kwiaciarnia-strelicja.webflow.io',
      image: '/images/kwiaciarnia-strelicja-small-min.png',
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      tags: t.raw('projects.project2.tags') as string[],
      imageAlt: t('projects.project2.imageAlt')
    }
  ]

  return (
    <section
      id='portfolio'
      className="container flex flex-col items-center gap-6 py-14 md:pb-14 sm:gap-7 scroll-mt-header"
    >
      <AnimatedElement
        className="flex flex-col gap-3"
        delay={0.2}
        viewport={{ once: true, margin: "-20% 0px" }}
      >
        <span className="font-bold uppercase text-primary text-center">
          {t('why')}
        </span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          {t('heading')}
        </h2>
        <p
          className="text-lg text-muted-foreground text-balance max-w-3xl text-center"
          dangerouslySetInnerHTML={{ __html: t.raw('subheading') }}
        />
      </AnimatedElement>

      <div className="mt-10 grid gap-8 md:grid-cols-2 w-full">
        {projects.map((project, index) => (
          <AnimatedElement
            key={project.slug}
            delay={index * 0.2}
            viewport={{ once: true, margin: "-20% 0px" }}
          >
            <Link href='/underpressure' target='_blank' rel='noopener noreferrer'>
              <Card className="overflow-hidden transition-transform hover:scale-[0.98]">
                <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={1156}
                    height={650}
                    className="object-cover max-h-[420px] object-top"
                  />
                </div>
                <CardContent className="p-6 ">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {/* {project.tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))} */}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </AnimatedElement>
        ))}
      </div>
    </section>
  )
}

export default Portfolio 
