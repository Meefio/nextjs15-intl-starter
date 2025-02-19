"use client"

import Image from "next/image"
import { AnimatedElement } from "@/app/components/motion/animated-element"
import { useTranslations } from 'next-intl'

export function About() {
  const t = useTranslations('About')

  return (
    <section
      id="o-nas"
      className="container py-14 md:py-20 scroll-mt-header"
    >
      <div className="text-center mb-12">
        <AnimatedElement
          className="flex flex-col gap-3"
          delay={0.2}
          viewport={{ once: true, margin: "-20% 0px" }}
        >
          <span className="font-bold uppercase text-primary">
            {t('why')}
          </span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance max-w-[800px] mx-auto">
            {t('heading')}
          </h2>
          <p className="text-lg text-muted-foreground text-balance max-w-[800px] mx-auto">
            {t('subheading')}
          </p>
        </AnimatedElement>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-5xl mx-auto">
        <AnimatedElement
          className="lg:w-2/3"
          delay={0.3}
          viewport={{ once: true, margin: "-20% 0px" }}
        >
          <div className="space-y-4">
            <p className="text-muted-foreground">{t('description1')}</p>
            <p className="text-muted-foreground">{t('description2')}</p>
            <p className="text-muted-foreground">{t('description3')}</p>
          </div>
        </AnimatedElement>

        <AnimatedElement
          className="lg:w-1/3"
          delay={0.4}
          viewport={{ once: true, margin: "-20% 0px" }}
        >
          <div className="flex justify-center flex-col items-center">
            <Image
              src="/images/my-photo.png"
              alt={t('imageAlt')}
              width={225}
              height={300}
              className="object-cover px-4 md:px-6 w-full max-w-[180px] md:max-w-[225px]"
              priority
            />
            <p className="mt-2 text-sm font-medium text-muted-foreground text-center">
              Michał Rowiński - CEO NextGen Sites
            </p>
          </div>
        </AnimatedElement>
      </div>
    </section>
  )
} 
