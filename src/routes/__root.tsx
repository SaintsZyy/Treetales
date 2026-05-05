import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";
import { Intro } from "@/components/Intro";
import { PageTransition } from "@/components/PageTransition";
import hero from "@/assets/hero.jpg";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Halaman tidak ditemukan</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Halaman yang kamu cari tidak ada atau sudah dipindahkan.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Kembali ke beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Treetales Coffee & Eatery - by Taman Teduh, Semarang" },
      {
        name: "description",
        content: "Tempat untuk melambat, menikmati kopi, dan menemukan suasana teduh di Semarang.",
      },
      { name: "author", content: "Treetales" },
      { property: "og:title", content: "Treetales Coffee & Eatery - by Taman Teduh, Semarang" },
      {
        property: "og:description",
        content: "Tempat untuk melambat, menikmati kopi, dan menemukan suasana teduh di Semarang.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@treetales.coffee" },
      { name: "twitter:title", content: "Treetales Coffee & Eatery - by Taman Teduh, Semarang" },
      {
        name: "twitter:description",
        content: "Tempat untuk melambat, menikmati kopi, dan menemukan suasana teduh di Semarang.",
      },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SmoothScroll />
      <Intro />
      <PageTransition />
      <Cursor />
      <Outlet />
    </>
  );
}
