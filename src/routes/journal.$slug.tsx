import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Divider } from "@/components/Divider";
import { journals } from "./journal";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const article = journals.find((j) => j.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.article.title} - Treetales Journal` },
          { name: "description", content: loaderData.article.excerpt },
          { property: "og:title", content: loaderData.article.title },
          { property: "og:description", content: loaderData.article.excerpt },
          { property: "og:image", content: loaderData.article.img },
        ]
      : [],
  }),
  errorComponent: ({ error }) => (
    <div className="min-h-screen grid place-items-center px-6 text-center">
      <div>
        <p className="font-serif italic text-2xl">{error.message}</p>
        <Link to="/journal" className="text-accent underline mt-4 inline-block">
          Kembali ke Journal
        </Link>
      </div>
    </div>
  ),
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center px-6 text-center">
      <div>
        <p className="font-display text-5xl">Halaman tidak ditemukan</p>
        <p className="text-muted-foreground mt-3">
          Halaman ini sepertinya tersesat di antara cerita.
        </p>
        <Link to="/journal" className="text-accent underline mt-6 inline-block">
          Kembali ke Journal
        </Link>
      </div>
    </div>
  ),
  component: Article,
});

function Article() {
  const { article } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <article className="pt-40 pb-20 px-6 lg:px-10">
        <header className="max-w-3xl mx-auto text-center">
          <Reveal>
            <span className="text-[10px] tracking-[0.4em] uppercase text-accent">
              {article.date} - {article.read}
            </span>
            <h1 className="font-display text-5xl sm:text-7xl mt-6 leading-[0.95] text-balance">
              {article.title}
            </h1>
          </Reveal>
        </header>

        <Reveal delay={0.1}>
          <div className="max-w-5xl mx-auto mt-16 aspect-[16/9] overflow-hidden rounded-sm">
            <img src={article.img} alt={article.title} className="h-full w-full object-cover" />
          </div>
        </Reveal>

        <div className="max-w-2xl mx-auto mt-20 space-y-7 text-lg leading-[1.85] text-foreground/80">
          {article.body.map((p: string, i: number) => (
            <Reveal key={i} delay={0.05 * i}>
              <p className={i === 0 ? "font-serif text-xl" : ""}>
                {i === 0 ? (
                  <>
                    <span className="font-display text-6xl italic float-left mr-3 mt-1 leading-none text-accent">
                      {p.charAt(0)}
                    </span>
                    {p.slice(1)}
                  </>
                ) : (
                  p
                )}
              </p>
            </Reveal>
          ))}

          <div className="pt-8 flex justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </div>

          <Divider />

          <div className="text-center pt-8">
            <Link
              to="/journal"
              data-cursor="Back"
              className="text-[11px] tracking-[0.3em] uppercase border-b border-foreground/40 hover:border-accent hover:text-accent transition-colors pb-1"
            >
              &lt;- Semua Catatan
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
