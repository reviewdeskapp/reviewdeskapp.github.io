import type { ReactNode } from "react";
import { Logo } from "./logo";

/** Shared shell for the plain-text pages linked from App Store Connect (privacy, support). */
export function LegalPage({
  title,
  updated,
  children,
}: Readonly<{ title: string; updated?: string; children: ReactNode }>) {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <header className="border-b border-line/70">
        <nav className="mx-auto flex h-16 max-w-3xl items-center px-5">
          <a href="/" className="flex items-center gap-2.5">
            <Logo className="size-7 rounded-lg" />
            <span className="text-[15px] font-semibold">ReviewDesk</span>
          </a>
        </nav>
      </header>
      <article className="mx-auto max-w-3xl px-5 py-14 text-[15px] leading-relaxed text-muted [&_a]:text-ink [&_a]:underline [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-[1.15rem] [&_h2]:font-semibold [&_h2]:text-ink [&_li]:mt-1.5 [&_p]:mt-3 [&_strong]:text-ink [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
        <h1 className="text-[2.2rem] font-semibold tracking-tight text-ink">{title}</h1>
        {updated && <p className="font-mono text-[12px] text-faint">Last updated: {updated}</p>}
        {children}
      </article>
    </main>
  );
}
