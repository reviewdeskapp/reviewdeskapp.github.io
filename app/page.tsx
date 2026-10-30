import Image from "next/image";
import {
  GitPullRequestIcon,
  ClockCountdownIcon,
  LockKeyIcon,
  KeyIcon,
  UsersThreeIcon,
  FingerprintIcon,
  BroadcastIcon,
  ArrowRightIcon,
  CheckIcon,
  DownloadSimpleIcon,
  CommandIcon,
  TagIcon,
  ArrowsClockwiseIcon,
  KanbanIcon,
  BellRingingIcon,
  LightningIcon,
} from "@phosphor-icons/react/dist/ssr";

import { Reveal } from "./components/reveal";
import { Faq } from "./components/faq";
import { Logo } from "./components/logo";
import {
  GithubMark,
  JiraMark,
  AtlassianMark,
  AppleMark,
  SwiftMark,
} from "./components/brand-icons";

const DOWNLOAD_LABEL = "Download for macOS";

/* =========================================================
   NAV
   ========================================================= */
function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo className="size-7 rounded-lg" />
          <span className="text-[15px] font-semibold tracking-tight">
            ReviewDesk
          </span>
        </a>
        <div className="hidden items-center gap-8 text-[13.5px] text-muted md:flex">
          <a href="#features" className="transition-colors hover:text-ink">
            Features
          </a>
          <a href="#how" className="transition-colors hover:text-ink">
            How it works
          </a>
          <a href="#faq" className="transition-colors hover:text-ink">
            FAQ
          </a>
        </div>
        <a
          href="#download"
          className="cta inline-flex items-center gap-2 rounded-full bg-merge px-4 py-2 text-[13px] font-semibold text-[#04140a] hover:bg-[#4cc766]"
        >
          <AppleMark title="Apple" className="size-3.5" />
          {DOWNLOAD_LABEL}
        </a>
      </nav>
    </header>
  );
}

/* =========================================================
   HERO  (layout family: asymmetric split)
   ========================================================= */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="glow-merge pointer-events-none absolute inset-x-0 top-0 h-[520px]" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 pb-20 pt-16 lg:grid-cols-[1.05fr_1fr] lg:pt-24">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            <CommandIcon size={13} className="text-merge" />
            Native macOS menu bar app
          </p>
          <h1 className="text-balance text-[2.7rem] font-semibold leading-[1.05] tracking-tight sm:text-[3.4rem]">
            The reviews that need you, always in sight.
          </h1>
          <p className="mt-6 max-w-lg text-[1.06rem] leading-relaxed text-muted">
            ReviewDesk watches GitHub and Jira and keeps the pull requests that need
            you one glance away, right on your Mac.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#download"
              className="cta inline-flex items-center gap-2 rounded-full bg-merge px-6 py-3 text-[15px] font-semibold text-[#04140a] shadow-[0_16px_40px_-16px_rgba(63,185,80,0.7)] hover:bg-[#4cc766]"
            >
              <DownloadSimpleIcon size={18} weight="bold" />
              {DOWNLOAD_LABEL}
            </a>
            <a
              href="#features"
              className="cta inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-6 py-3 text-[15px] font-medium text-ink hover:border-muted"
            >
              See how it works
              <ArrowRightIcon size={17} />
            </a>
          </div>
        </div>

        <Reveal className="relative lg:-mr-16 xl:-mr-28">
          <div className="glow-merge pointer-events-none absolute -inset-6 opacity-70" />
          <div className="edge-hl shadow-panel relative overflow-hidden rounded-[var(--radius)] border border-line">
            <Image
              src="/shots/board.png"
              alt="The ReviewDesk window showing pull requests grouped into Waiting for My Review, My Open PRs and Team PRs, each with its Jira status"
              width={2560}
              height={1600}
              priority
              sizes="(max-width: 1024px) 100vw, 760px"
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   CONNECTS TO  (layout family: logo marquee)
   ========================================================= */
function ConnectsTo() {
  const items = [
    { mark: <GithubMark title="GitHub" className="size-5" />, label: "GitHub" },
    { mark: <JiraMark title="Jira" className="size-5" />, label: "Jira" },
    {
      mark: <AtlassianMark title="Atlassian" className="size-5" />,
      label: "Atlassian",
    },
    { mark: <AppleMark title="macOS" className="size-5" />, label: "macOS" },
    { mark: <SwiftMark title="Swift" className="size-5" />, label: "Swift" },
  ];
  // duplicated once for a seamless marquee loop; keys carry the copy index
  const loop = [...items, ...items].map((it, i) => ({
    ...it,
    key: `${it.label}-${i < items.length ? "a" : "b"}`,
  }));
  return (
    <section className="border-y border-line-soft bg-surface/30 py-8">
      <div className="mx-auto max-w-6xl px-5">
        <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
          Connects to the tools you already use
        </p>
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-14">
            {loop.map((it) => (
              <div
                key={it.key}
                className="flex shrink-0 items-center gap-2.5 text-muted"
              >
                {it.mark}
                <span className="text-[15px] font-medium">{it.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   BENTO  (layout family: bento grid)
   ========================================================= */
function MiniRow({
  title,
  repo,
  chip,
  merge,
}: Readonly<{
  title: string;
  repo: string;
  chip?: string;
  merge?: boolean;
}>) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-line-soft bg-bg/50 px-3 py-2">
      <div className="min-w-0 flex-1">
        <div className="truncate text-[12.5px] text-ink">{title}</div>
        <div className="font-mono text-[10px] text-faint">{repo}</div>
      </div>
      {chip ? (
        <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[9.5px] text-muted">
          {chip}
        </span>
      ) : null}
      {merge ? (
        <span className="rounded-full bg-merge px-2 py-0.5 font-mono text-[9.5px] font-semibold text-[#04140a]">
          MERGE?
        </span>
      ) : null}
    </div>
  );
}

function Bento() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal className="max-w-2xl">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-merge">
          What you see
        </p>
        <h2 className="text-balance text-[2rem] font-semibold leading-tight tracking-tight sm:text-[2.5rem]">
          Three lists that answer one question: what needs me now?
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
        {/* large cell */}
        <Reveal className="lg:col-span-2">
          <div className="relative h-full overflow-hidden rounded-[var(--radius)] border border-line bg-surface p-7">
            <div className="glow-merge pointer-events-none absolute -top-24 right-0 h-64 w-64 opacity-60" />
            <div className="relative">
              <span className="grid size-10 place-items-center rounded-xl bg-surface2 text-merge">
                <BellRingingIcon size={20} />
              </span>
              <h3 className="mt-5 text-[1.35rem] font-semibold">
                Waiting for My Review
              </h3>
              <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-muted">
                Every pull request that named you as a reviewer, pulled from all
                your repositories and sorted by what has waited longest.
              </p>
              <div className="mt-6 space-y-2">
                <MiniRow
                  title="Idempotency keys for refund endpoint"
                  repo="harbor/payments-api"
                  chip="5h"
                />
                <MiniRow
                  title="Fix layout shift on settings route"
                  repo="harbor/web-app"
                  chip="3d"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* tall stat cell */}
        <Reveal delay={80} className="lg:row-span-2">
          <div className="bg-grid relative flex h-full flex-col justify-between overflow-hidden rounded-[var(--radius)] border border-line bg-surface2 p-7">
            <div>
              <span className="grid size-10 place-items-center rounded-xl bg-bg text-merge">
                <ClockCountdownIcon size={20} />
              </span>
              <h3 className="mt-5 text-[1.35rem] font-semibold">Aging, in color</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                The older a request gets, the louder its row reads, so nothing
                quietly rots at the bottom of a queue.
              </p>
            </div>
            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-muted">Fresh</span>
                <span className="font-mono text-[var(--color-faint)]">under 1d</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-muted">Getting old</span>
                <span className="font-mono text-[var(--color-age-warn)]">3d</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-muted">Stale</span>
                <span className="font-mono text-[var(--color-age-stale)]">6d+</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* my open prs */}
        <Reveal delay={40}>
          <div className="relative h-full overflow-hidden rounded-[var(--radius)] border border-merge/40 bg-surface p-7">
            <div className="glow-merge pointer-events-none absolute inset-x-0 -bottom-10 h-40 opacity-70" />
            <div className="relative">
              <span className="grid size-10 place-items-center rounded-xl bg-surface2 text-merge">
                <GitPullRequestIcon size={20} />
              </span>
              <h3 className="mt-5 text-[1.35rem] font-semibold">My Open PRs</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                Your own work, with a MERGE badge that lights up the moment the
                ticket is done and the branch is ready.
              </p>
              <div className="mt-6">
                <MiniRow
                  title="Batch Jira lookups behind one call"
                  repo="harbor/core"
                  merge
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* pr needing review */}
        <Reveal delay={120}>
          <div className="relative h-full overflow-hidden rounded-[var(--radius)] border border-line bg-surface p-7">
            <span className="grid size-10 place-items-center rounded-xl bg-surface2 text-merge">
              <UsersThreeIcon size={20} />
            </span>
            <h3 className="mt-5 text-[1.35rem] font-semibold">
              PR Needing Review
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
              The team&apos;s open pull requests that still have nobody looking,
              so you can unblock a colleague before they ask.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   MERGE FEATURE  (layout family: full-width centered feature)
   ========================================================= */
function MergeFeature() {
  return (
    <section className="relative overflow-hidden border-y border-line-soft bg-surface/40">
      <div className="glow-merge pointer-events-none absolute inset-x-0 top-0 h-72 opacity-80" />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center">
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-merge/40 bg-bg px-4 py-2">
          <span className="merge-pulse rounded-full bg-merge px-2.5 py-1 font-mono text-[12px] font-semibold text-[#04140a]">
            MERGE?
          </span>
          <span className="text-[13px] text-muted">
            ticket done, branch open, not a draft
          </span>
        </div>
        <h2 className="text-balance text-[2.1rem] font-semibold leading-tight tracking-tight sm:text-[2.7rem]">
          One badge tells you the pull request is ready to merge.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[1.02rem] leading-relaxed text-muted">
          ReviewDesk reads the linked Jira ticket, the draft flag and the branch
          state, then lights the badge only when all three line up. No more
          opening a PR just to find out it was never ready.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-[13px] text-muted">
          {["Ticket status: Done", "Not a draft", "Branch open"].map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-4 py-2"
            >
              <CheckIcon size={14} className="text-merge" weight="bold" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   AGENT + WIDGETS  (layout family: image-led split #1)
   ========================================================= */
function AgentWidgets() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        {/* real product shot: the PR detail popover */}
        <Reveal className="relative">
          <div className="glow-merge pointer-events-none absolute -inset-4 opacity-50" />
          <div className="edge-hl shadow-panel relative overflow-hidden rounded-[var(--radius)] border border-line">
            <Image
              src="/shots/detail.png"
              alt="A pull request card expanded to show its Jira ticket, branch, review state and one-click links to GitHub and Jira"
              width={2560}
              height={1600}
              sizes="(max-width: 1024px) 100vw, 620px"
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <div>
          <h2 className="text-balance text-[2rem] font-semibold leading-tight tracking-tight sm:text-[2.4rem]">
            Every pull request, with its whole story attached.
          </h2>
          <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-muted">
            Hover a card to see the linked ticket, the branch, the review state,
            and one-click jumps to GitHub or Jira. The menu bar and desktop
            widgets keep the same lists a glance away.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              {
                icon: <CommandIcon size={18} />,
                t: "Menu bar first",
                d: "Show the window, refresh or quit from one icon. Launch at login optional.",
              },
              {
                icon: <ArrowsClockwiseIcon size={18} />,
                t: "Refreshes itself",
                d: "A background scheduler updates on your interval, default five minutes.",
              },
              {
                icon: <LightningIcon size={18} />,
                t: "Instant widgets",
                d: "Widgets read a shared snapshot, so they open with no spinner and no fetch.",
              },
            ].map((f) => (
              <li key={f.t} className="flex gap-4">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg border border-line bg-surface text-merge">
                  {f.icon}
                </span>
                <div>
                  <div className="text-[15px] font-semibold">{f.t}</div>
                  <div className="mt-1 text-[14px] leading-relaxed text-muted">
                    {f.d}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   JIRA STEPS  (layout family: horizontal process timeline)
   ========================================================= */
function JiraSteps() {
  const steps = [
    {
      icon: <TagIcon size={20} />,
      t: "Parse",
      d: "The ticket key, like PAY-482, is read straight from the pull request title.",
    },
    {
      icon: <KanbanIcon size={20} />,
      t: "Fetch",
      d: "Its Jira status is pulled in one batched call and mapped to a color by category.",
    },
    {
      icon: <LightningIcon size={20} />,
      t: "Signal",
      d: "Done plus open plus not a draft turns the row into a live MERGE badge.",
    },
  ];
  return (
    <section id="how" className="border-y border-line-soft bg-surface/30 py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-merge">
            The Jira link
          </p>
          <h2 className="text-balance text-[2rem] font-semibold leading-tight tracking-tight sm:text-[2.4rem]">
            From a pull request title to a merge signal, automatically.
          </h2>
        </div>

        <ol className="relative grid gap-10 md:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-line to-transparent md:block" />
          {steps.map((s, i) => (
            <Reveal as="li" key={s.t} delay={i * 90} className="relative">
              <div className="relative z-10 grid size-12 place-items-center rounded-full border border-line bg-bg text-merge">
                {s.icon}
              </div>
              <div className="mt-5 flex items-center gap-2">
                <span className="font-mono text-[12px] text-faint">
                  0{i + 1}
                </span>
                <h3 className="text-[1.2rem] font-semibold">{s.t}</h3>
              </div>
              <p className="mt-2 max-w-xs text-[0.95rem] leading-relaxed text-muted">
                {s.d}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* =========================================================
   WORKSPACES  (layout family: image-led split #2, reversed)
   ========================================================= */
function Workspaces() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
        <div className="order-2 lg:order-1">
          <h2 className="text-balance text-[2rem] font-semibold leading-tight tracking-tight sm:text-[2.4rem]">
            One app, every organization, kept apart.
          </h2>
          <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-muted">
            Workspace profiles isolate repositories, GitHub identity and Jira
            site the way Safari keeps profiles separate. Switch context without
            ever signing out.
          </p>
          <div className="mt-8 space-y-3">
            {[
              { name: "harbor / core", meta: "GitHub · jira.harbor.dev" },
              { name: "raindrop / app", meta: "GitHub · personal PAT" },
              { name: "meridian / platform", meta: "GitHub · meridian.atlassian.net" },
            ].map((w, i) => (
              <div
                key={w.name}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 ${
                  i === 0
                    ? "border-merge/50 bg-surface"
                    : "border-line bg-surface/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-lg bg-surface2 text-muted">
                    <UsersThreeIcon size={16} />
                  </span>
                  <div>
                    <div className="text-[14px] font-medium">{w.name}</div>
                    <div className="font-mono text-[10.5px] text-faint">
                      {w.meta}
                    </div>
                  </div>
                </div>
                {i === 0 ? (
                  <span className="rounded-full bg-merge/15 px-2.5 py-0.5 font-mono text-[10px] text-merge">
                    active
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <Reveal className="order-1 lg:order-2">
          <div className="edge-hl shadow-panel relative overflow-hidden rounded-[var(--radius)] border border-line">
            <Image
              src="/shots/repositories.png"
              alt="The Repositories screen with a workspace picker and the list of monitored repositories"
              width={2560}
              height={1600}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =========================================================
   SECURITY  (layout family: two-column feature panel)
   ========================================================= */
function Security() {
  const items = [
    {
      icon: <KeyIcon size={18} />,
      t: "Keychain, always",
      d: "Every token lives in the macOS Keychain, never in plain files or logs.",
    },
    {
      icon: <FingerprintIcon size={18} />,
      t: "OAuth Device Flow",
      d: "GitHub signs in through Device Flow by default, with a token as fallback.",
    },
    {
      icon: <LockKeyIcon size={18} />,
      t: "PKCE for Atlassian",
      d: "Jira uses OAuth with PKCE, so no long-lived secret ever sits on disk.",
    },
    {
      icon: <BroadcastIcon size={18} />,
      t: "Shared access group",
      d: "The app and its widgets read one snapshot through a private App Group.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-balance text-[2rem] font-semibold leading-tight tracking-tight sm:text-[2.4rem]">
            Your credentials never leave the Mac.
          </h2>
          <p className="mt-5 max-w-sm text-[1.02rem] leading-relaxed text-muted">
            There is no backend and no telemetry. ReviewDesk talks to GitHub and
            Jira directly, and keeps every secret where macOS keeps yours.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((it) => (
            <Reveal key={it.t}>
              <div className="edge-hl h-full rounded-[var(--radius)] border border-line bg-surface p-6">
                <span className="grid size-10 place-items-center rounded-xl bg-surface2 text-merge">
                  {it.icon}
                </span>
                <h3 className="mt-4 text-[1.05rem] font-semibold">{it.t}</h3>
                <p className="mt-1.5 text-[0.92rem] leading-relaxed text-muted">
                  {it.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FAQ  (layout family: accordion)
   ========================================================= */
function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-24">
      <h2 className="mb-10 text-center text-[2rem] font-semibold tracking-tight sm:text-[2.4rem]">
        Questions, answered.
      </h2>
      <Faq />
    </section>
  );
}

/* =========================================================
   DOWNLOAD CTA  (layout family: centered band)
   ========================================================= */
function DownloadCta() {
  return (
    <section
      id="download"
      className="relative overflow-hidden border-t border-line-soft"
    >
      <div className="glow-merge pointer-events-none absolute inset-x-0 top-0 h-full opacity-80" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-3xl px-5 py-28 text-center">
        <h2 className="text-balance text-[2.4rem] font-semibold leading-tight tracking-tight sm:text-[3rem]">
          Stop hunting for the review that matters.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[1.05rem] leading-relaxed text-muted">
          ReviewDesk is a native Mac app. Download it, connect GitHub, and watch
          your pull requests settle into place.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href="#top"
            className="cta inline-flex items-center gap-2.5 rounded-full bg-merge px-8 py-4 text-[16px] font-semibold text-[#04140a] shadow-[0_20px_50px_-18px_rgba(63,185,80,0.75)] hover:bg-[#4cc766]"
          >
            <AppleMark title="Apple" className="size-4" />
            {DOWNLOAD_LABEL}
          </a>
        </div>
        <p className="mt-6 font-mono text-[12px] text-faint">
          Requires macOS 14 Sonoma or later
        </p>
      </div>
    </section>
  );
}

/* =========================================================
   FOOTER
   ========================================================= */
function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <Logo className="size-7 rounded-lg" />
          <span className="text-[14px] font-semibold">ReviewDesk</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[13px] text-muted">
          <a href="#features" className="hover:text-ink">
            Features
          </a>
          <a href="#how" className="hover:text-ink">
            How it works
          </a>
          <a href="#faq" className="hover:text-ink">
            FAQ
          </a>
          <a href="/privacy" className="hover:text-ink">
            Privacy
          </a>
          <a href="/support" className="hover:text-ink">
            Support
          </a>
          <span className="flex items-center gap-1.5 text-faint">
            <SwiftMark title="Swift" className="size-3.5" />
            Built in SwiftUI
          </span>
        </div>
        <p className="font-mono text-[12px] text-faint">2026 ReviewDesk</p>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <ConnectsTo />
      <Bento />
      <MergeFeature />
      <AgentWidgets />
      <JiraSteps />
      <Workspaces />
      <Security />
      <FaqSection />
      <DownloadCta />
      <Footer />
    </main>
  );
}
