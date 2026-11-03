import React from "react";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

const App: React.FC = () => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* About / Intro Section */}
        <Hero />

        {/* Imprint Section (mapped to Wrapper Style 2) */}
        <article id="imprint" className="wrapper style2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <header className="mb-16">
              <h2 className="text-4xl font-extrabold text-deep-navy mb-4">
                Legal Notice
              </h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                Transparency and legal information regarding our business
                operations.
              </p>
            </header>

            <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 text-left text-gray-500 text-sm leading-relaxed space-y-4 mb-16">
              <p className="font-bold text-base text-deep-navy">Imprint</p>
              <p>Information according to § 5 DDG</p>
              <p>
                O. Abrouk
                <br />
                Neugartenstr. 30b, 65843 Sulzbach, Germany
              </p>
              <p>
                <span className="font-semibold text-deep-navy">Contact</span>
                <br />
                E-mail:{" "}
                <a
                  href="mailto:info@creo-mar.com"
                  className="text-brand-blue hover:underline"
                >
                  info(at)creo-mar.com
                </a>
                <br />
                per{" "}
                <a href="#contact" className="text-brand-blue hover:underline">
                  contact form
                </a>
              </p>
              <p>
                <span className="font-semibold text-deep-navy">
                  Person responsible for content:
                </span>
                <br />
                O. Abrouk
              </p>
              <p>
                <span className="font-semibold text-deep-navy">
                  EU Dispute Resolution
                </span>
                <br />
                The European Commission provides a platform for online dispute
                resolution (ODR):{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Our e-mail address can be found above in the legal disclosure.
              </p>
              <p>
                <span className="font-semibold text-deep-navy">
                  Consumer Dispute Resolution/Universal Arbitration Board
                </span>
                <br />
                We are not willing or obliged to participate in dispute
                resolution proceedings before a consumer arbitration board.
              </p>
              <p>
                <span className="font-semibold text-deep-navy">
                  Liability for Content
                </span>
                <br />
                As a service provider, we are responsible for our own content on
                these pages in accordance with general laws pursuant to § 7
                Para. 1 TMG. However, according to §§ 8 to 10 TMG, as a service
                provider, we are not obliged to monitor transmitted or stored
                third-party information or to investigate circumstances that
                indicate illegal activity. Obligations to remove or block the
                use of information in accordance with general laws remain
                unaffected by this. However, liability in this regard is only
                possible from the time of knowledge of a specific legal
                infringement. Upon notification of such violations, we will
                remove this content immediately.
              </p>
              <p>
                <span className="font-semibold text-deep-navy">
                  Liability for Links
                </span>
                <br />
                Our offer contains links to external websites of third parties,
                over whose content we have no influence. Therefore, we cannot
                assume any liability for this external content. The respective
                provider or operator of the pages is always responsible for the
                content of the linked pages. The linked pages were checked for
                possible legal violations at the time of linking. Illegal
                content was not recognizable at the time of linking. However,
                permanent monitoring of the content of the linked pages is not
                reasonable without concrete evidence of a legal violation. Upon
                notification of legal violations, we will remove such links
                immediately.
              </p>
              <p>
                <span className="font-semibold text-deep-navy">Copyright</span>
                <br />
                The content and works created by the site operators on these
                pages are subject to German copyright law. Duplication,
                processing, distribution, and any kind of exploitation outside
                the limits of copyright law require the written consent of the
                respective author or creator. Downloads and copies of this site
                are only permitted for private, non-commercial use. Insofar as
                the content on this site was not created by the operator, the
                copyrights of third parties are respected. In particular,
                third-party content is identified as such. Should you
                nevertheless become aware of a copyright infringement, please
                inform us accordingly. Upon notification of legal violations, we
                will remove such content immediately.
              </p>
            </div>

            <footer>
              <p className="text-gray-400 mb-8">
                Want to see how we protect your data?
              </p>
              <a
                href="#private-policy"
                onClick={(e) => handleScroll(e, "private-policy")}
                className="scrolly-btn cursor-pointer"
              >
                Privacy Policy
              </a>
            </footer>
          </div>
        </article>

        {/* Private Policy Section (mapped to Wrapper Style 3) */}
        <article id="private-policy" className="wrapper style3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-deep-navy mb-4">
                Privacy Policy
              </h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                Your privacy is our priority. We handle your data with extreme
                care.
              </p>
            </header>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 text-left text-gray-500 text-sm leading-relaxed space-y-4 mb-16">
              <p className="font-bold text-base text-deep-navy">
                Privacy Policy
              </p>
              <p>
                <span className="font-semibold text-deep-navy">
                  Last Updated:
                </span>{" "}
                January 2026
              </p>

              <p>
                <span className="font-semibold text-deep-navy">
                  1. Privacy at a Glance
                </span>
                <br />
                The protection of your personal data is our highest priority. We
                do not use third-party analysis or tracking tools (such as
                Google Analytics, Matomo, or Facebook Pixel). Personal data is
                processed only to the extent technically necessary or on the
                basis of your express consent (e.g., for personalized
                advertising).
              </p>

              <p>
                <span className="font-semibold text-deep-navy">
                  2. Controller
                </span>
                <br />
                O. Abrouk
                <br />
                Neugartenstr. 30b, 65843 Sulzbach, Germany
                <br />
                Email:{" "}
                <a
                  href="mailto:info@creo-mar.com"
                  className="text-brand-blue hover:underline"
                >
                  info(at)creo-mar.com
                </a>
              </p>

              <p>
                <span className="font-semibold text-deep-navy">
                  3. Hosting and Data Collection
                </span>
                <br />
                <span className="font-semibold">
                  External Hosting (GitHub Pages) &amp; SSL
                </span>
                <br />
                Our website is hosted as a static page via GitHub Pages (GitHub
                Inc., 88 Colin P. Kelly Jr. St, San Francisco, CA 94107, USA).
                For security reasons, the site is transmitted exclusively via an
                encrypted HTTPS connection.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-semibold">Server Log Files:</span>{" "}
                  GitHub automatically collects data (IP address, time of
                  access, browser type, referrer URL). This data serves to
                  ensure system security and stability.
                </li>
                <li>
                  <span className="font-semibold">Retention Period:</span> These
                  logs are processed automatically by GitHub and are generally
                  deleted after 30 days at the latest.
                </li>
                <li>
                  <span className="font-semibold">Legal Basis:</span> Art. 6 (1)
                  (f) GDPR. GitHub is certified under the EU-US Data Privacy
                  Framework.
                </li>
              </ul>

              <p>
                <span className="font-semibold">
                  Contact via Email and Contact Form
                </span>
                <br />
                Communication takes place via the infrastructure of ALL-INKL
                (Provider: ALL-INKL.COM - Neue Medien Münnich, Germany).
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-semibold">Processing:</span> When you
                  contact us, we store your details to process the request. A
                  Data Processing Agreement (DPA) pursuant to Art. 28 GDPR is in
                  place.
                </li>
                <li>
                  <span className="font-semibold">Retention Period:</span> Your
                  data will be deleted as soon as your request has been
                  conclusively processed, provided that no statutory retention
                  obligations (e.g., under the German Commercial Code (HGB) or
                  Tax Code (AO) for up to 10 years) exist.
                </li>
                <li>
                  <span className="font-semibold">Legal Basis:</span> Art. 6 (1)
                  (b) GDPR.
                </li>
              </ul>

              <p>
                <span className="font-semibold text-deep-navy">
                  4. Mobile Applications (Apps) and Advertising
                </span>
                <br />
                <span className="font-semibold">
                  Google AdMob &amp; Consent Management (CMP)
                </span>
                <br />
                In our apps, we use Google AdMob for advertising revenue (Google
                Ireland Limited, Gordon House, Barrow Street, Dublin 4,
                Ireland).
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-semibold">Certified CMP:</span> We use a
                  Google-certified Consent Management Platform (CMP) that
                  supports the IAB Transparency &amp; Consent Framework (TCF).
                </li>
                <li>
                  <span className="font-semibold">Consent:</span> Personalized
                  advertising and access to advertising IDs (e.g., Android
                  Advertising ID) occur exclusively after your express consent
                  via the consent banner at app startup (Art. 6 (1) (a) GDPR).
                  Without consent, only non-personalized ads will be displayed.
                </li>
                <li>
                  <span className="font-semibold">Withdrawal:</span> You can
                  change or withdraw your privacy settings at any time within
                  the app settings or via the CMP menu.
                </li>
                <li>
                  <span className="font-semibold">Retention Period:</span> The
                  storage duration of advertising data is defined by Google (see
                  Google Privacy Policy).
                </li>
              </ul>

              <p>
                <span className="font-semibold">
                  In-House Advertisements and Customer Links
                </span>
                <br />
                Additionally, we display our own advertising banners that link
                to the websites of third-party customers.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-semibold">Personalization:</span> If
                  these ads are displayed in a personalized manner, this only
                  occurs after your consent via the CMP.
                </li>
                <li>
                  <span className="font-semibold">External Links:</span> Upon
                  clicking, you leave our app. The privacy policies of the
                  respective target site apply.
                </li>
              </ul>

              <p>
                <span className="font-semibold">
                  Social Media Links &amp; Children&apos;s Policy
                </span>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <span className="font-semibold">Links:</span> Our apps contain
                  simple hyperlinks to Facebook, Instagram, X (Twitter), and
                  TikTok. No tracking takes place simply by displaying the
                  buttons.
                </li>
                <li>
                  <span className="font-semibold">Minors:</span> Our services
                  are not directed at children under the age of 16. Should we
                  become aware of unauthorized data processing involving a
                  child, we will delete this data immediately (Art. 8 GDPR).
                </li>
              </ul>

              <p>
                <span className="font-semibold text-deep-navy">
                  5. Your Rights
                </span>
                <br />
                You have the right at any time to access, rectification,
                erasure, and data portability of your data. To exercise your
                rights, please contact us at{" "}
                <a
                  href="mailto:info@creo-mar.com"
                  className="text-brand-blue hover:underline"
                >
                  info@creo-mar.com
                </a>
                . Furthermore, you have the right to lodge a complaint with the
                competent data protection supervisory authority.
              </p>

              <p>
                <span className="font-semibold text-deep-navy">
                  6. Subject to Change
                </span>
                <br />
                We adapt this policy as necessary to comply with current
                technical or legal standards. The current version is always
                accessible via our website and within the apps.
              </p>
            </div>

            <footer className="text-center">
              <p className="text-gray-400 mb-8">
                Ready to start a project with us?
              </p>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="scrolly-btn cursor-pointer"
              >
                Get in touch
              </a>
            </footer>
          </div>
        </article>

        {/* Contact Section (mapped to Wrapper Style 4) */}
        <Contact />
      </main>
    </div>
  );
};

export default App;
