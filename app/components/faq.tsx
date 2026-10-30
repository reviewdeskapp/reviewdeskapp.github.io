"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@phosphor-icons/react";

type QA = { q: string; a: string };

const ITEMS: QA[] = [
  {
    q: "Does ReviewDesk need a server or a background daemon?",
    a: "No. It talks straight to the GitHub and Jira APIs from your Mac, stores a small JSON snapshot in a shared App Group, and runs from the menu bar with no Dock icon.",
  },
  {
    q: "What happens if I do not use Jira?",
    a: "The app degrades gracefully. Without Atlassian configured you still get every pull request, its state and its age. The ticket status column and the MERGE badge simply stay quiet.",
  },
  {
    q: "Where are my tokens kept?",
    a: "In the macOS Keychain, behind an access group shared only between the app and its widgets. GitHub uses OAuth Device Flow by default, Atlassian uses OAuth with PKCE, and each workspace profile keeps its credentials isolated.",
  },
  {
    q: "Can I watch more than one organization at once?",
    a: "Yes. Workspace profiles keep repositories, GitHub identity and Jira site fully separate, the way Safari keeps profiles apart. Switch between them without signing out.",
  },
  {
    q: "How fresh are the desktop widgets?",
    a: "A background scheduler refreshes on an interval you choose, default five minutes or manual only. The widgets read the snapshot with zero networking, so they open instantly and never spin.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line-soft rounded-[var(--radius)] border border-line bg-surface/60">
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            >
              <span className="text-[1.02rem] font-medium text-ink">
                {item.q}
              </span>
              <span className="grid size-7 shrink-0 place-items-center rounded-full border border-line text-muted">
                {isOpen ? (
                  <MinusIcon size={14} weight="bold" />
                ) : (
                  <PlusIcon size={14} weight="bold" />
                )}
              </span>
            </button>
            <div
              className="grid px-6 transition-all duration-300 ease-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                opacity: isOpen ? 1 : 0,
                paddingBottom: isOpen ? "1.25rem" : 0,
              }}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl text-[0.95rem] leading-relaxed text-muted">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
