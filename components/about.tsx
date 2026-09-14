export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          {/* <!-- About portrait — replace with your own photo --> */}
          <img
            src="https://picsum.photos/seed/photographer-portrait/600/750"
            alt="Photographer portrait"
            className="h-auto w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            About
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a photographer based in the Pacific Northwest, drawn to
              the quiet moments between things — the way light falls across a
              landscape, the unguarded expression in a portrait, the texture of
              a place at dusk.
            </p>
            <p>
              My work spans landscapes and portraits, with a focus on natural
              light and honest composition. I believe the best photographs don&apos;t
              shout — they invite you to look a little closer.
            </p>
            <p>
              Whether I&apos;m hiking to a ridge before dawn or spending an afternoon
              with a subject in their own space, my approach is the same: slow
              down, observe, and let the image find itself.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}