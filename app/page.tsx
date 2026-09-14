import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Pricing />
      <Contact />
    </>
  )
}