import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";

const FEEDBACK_FORM = "https://tally.so/r/RGE5Ev";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with ReviewDesk.",
  alternates: { canonical: "/support/" },
};

export default function SupportPage() {
  return (
    <LegalPage title="Support">
      <p>
        Found a bug, have a question or want to suggest a feature? Use{" "}
        <strong>Send Feedback</strong> at the bottom of the ReviewDesk sidebar, or fill in the{" "}
        <a href={FEEDBACK_FORM}>feedback form</a>. Every message is read.
      </p>

      <h2>Getting started</h2>
      <ul>
        <li>ReviewDesk requires macOS 14 Sonoma or later.</li>
        <li>
          Sign in to GitHub with the browser-based device flow, or paste a personal access token
          with the <code>repo</code>, <code>read:user</code> and{" "}
          <code>read:org</code> scopes.
        </li>
        <li>
          Jira is optional: connect it with Atlassian sign-in or an API token to see ticket status
          next to each pull request.
        </li>
        <li>
          ReviewDesk lives in the menu bar. Choose <strong>Show ReviewDesk</strong> to open the main
          window, and add the widgets from the macOS widget gallery.
        </li>
      </ul>

      <h2>Common questions</h2>
      <p>
        <strong>A pull request is missing.</strong> Make sure its repository is selected in
        Settings › Profiles › Repositories, then use Refresh Now from the menu bar.
      </p>
      <p>
        <strong>Jira status is not shown.</strong> The issue key (for example ABC-123) must appear in
        the pull request title, and the Jira account must have access to that project.
      </p>
      <p>
        <strong>Widgets look empty.</strong> Open ReviewDesk once so it can fetch data; widgets
        update after each refresh.
      </p>

      <h2>Privacy</h2>
      <p>
        ReviewDesk talks only to GitHub and Atlassian. Read the <a href="/privacy">privacy policy</a>.
      </p>
    </LegalPage>
  );
}
