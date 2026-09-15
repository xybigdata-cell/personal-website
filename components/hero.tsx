import Image from "next/image"
import { siteConfig } from "@/lib/site-config"

export function Hero() {
  return (
    <section className="relative flex h-svh items-center justify-center overflow-hidden">
      <Image
        src="https://picsum.photos/seed/photography-hero/1920/1080"
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center text-white">
        <h1 className="font-serif text-5xl tracking-tight md:text-7xl">
          {siteConfig.name}
        </h1>
        <p className="mt-4 text-lg text-white/80 md:text-xl">
          {siteConfig.tagline}
        </p>
      </div>
    </section>
  )
}