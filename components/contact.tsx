import { siteConfig } from "@/lib/site-config"

export function Contact() {
  return (
    <section id="contact" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-3 text-muted-foreground">
          Available for commissioned work and collaborations.
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-8 inline-block border border-foreground px-8 py-3 text-sm tracking-wide transition-colors hover:bg-foreground hover:text-background"
        >
          {siteConfig.email}
        </a>
      </div>
    </section>
  )
}