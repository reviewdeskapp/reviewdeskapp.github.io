import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — ReviewDesk",
  description: "How ReviewDesk handles your data.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="October 28, 2026">
      <p>
        ReviewDesk is a native macOS app that shows your GitHub pull requests and, optionally, the
        status of linked Jira issues. It is built so that your data stays between your Mac and the
        services you connect. <strong>ReviewDesk has no servers, no accounts and no analytics.</strong>
      </p>

      <h2>Data the app does not collect</h2>
      <p>
        The developer does not collect, store or sell any personal data. The app contains no
        analytics, advertising or tracking SDKs, and it does not track you across apps or websites.
      </p>

      <h2>Services you connect</h2>
      <p>
        When you sign in, ReviewDesk talks directly to the services you choose, using their official
        APIs over HTTPS:
      </p>
      <ul>
        <li>
          <strong>GitHub</strong> (api.github.com) to read pull requests, reviews and repositories,
          and to perform the actions you trigger (for example approving or merging a pull request).
        </li>
        <li>
          <strong>Atlassian Jira</strong> (auth.atlassian.com, api.atlassian.com or your Jira site),
          optional, to read the status of issues referenced in pull request titles and to run the
          Jira actions you configure.
        </li>
      </ul>
      <p>
        This data is processed only to display it to you and to carry out your requests. Your use of
        these services is governed by the privacy policies of GitHub and Atlassian.
      </p>

      <h2>Data stored on your Mac</h2>
      <ul>
        <li>
          Access tokens and API tokens are stored in the macOS Keychain, separately for each profile.
        </li>
        <li>
          Settings and a cached snapshot of your pull requests (used by the desktop widgets) are
          stored in the app’s sandboxed containers on your Mac.
        </li>
        <li>
          Notifications are generated locally on your Mac; no push service is involved.
        </li>
      </ul>
      <p>Deleting the app or signing out of a profile removes this data.</p>

      <h2>Feedback</h2>
      <p>
        If you choose to send feedback from inside the app, the form is provided by{" "}
        <a href="https://tally.so/help/privacy-policy">Tally</a>. It receives only what you type,
        plus the app version, build number and macOS version to help diagnose issues. Feedback is
        used solely to support and improve ReviewDesk.
      </p>

      <h2>Children</h2>
      <p>ReviewDesk is a developer tool and is not directed at children.</p>

      <h2>Changes</h2>
      <p>
        If this policy changes, the updated version will be published on this page with a new date.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy? Reach out through the <a href="/support">support page</a>.
      </p>
    </LegalPage>
  );
}
