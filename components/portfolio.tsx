const photos = [
  { seed: "portfolio-01", width: 800, height: 1000, span: "row-span-2" },
  { seed: "portfolio-02", width: 800, height: 600, span: "" },
  { seed: "portfolio-03", width: 800, height: 600, span: "" },
  { seed: "portfolio-04", width: 800, height: 1000, span: "row-span-2" },
  { seed: "portfolio-05", width: 800, height: 600, span: "" },
  { seed: "portfolio-06", width: 800, height: 600, span: "" },
]

export function Portfolio() {
  return (
    <section id="work" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
          My Work
        </h2>
        <p className="mt-3 text-muted-foreground">
          A selection of recent projects and personal work.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          {photos.map((photo) => (
            <div key={photo.seed} className={`overflow-hidden ${photo.span}`}>
              {/* <!-- Portfolio image — replace with your own photograph --> */}
              <img
                src={`https://picsum.photos/seed/${photo.seed}/${photo.width}/${photo.height}`}
                alt=""
                className="h-full w-full object-cover transition-opacity duration-300 hover:opacity-90"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}