import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PreFooterCTA } from "@/components/PreFooterCTA";

// Reusable icons for situations
const situations = [
  { icon: "🏛️", title: "Lobby Monitoring", desc: "Providing a welcoming yet alert presence to manage client entry and visitor verification." },
  { icon: "👤", title: "Suspicious Person Observation", desc: "Identifying and monitoring individuals showing unusual behavior near branch doors or service counters." },
  { icon: "🏪", title: "ATM Area Concerns", desc: "Patrolling ATM enclosures to ensure safety for clients making deposits or cash withdrawals." },
  { icon: "🤝", title: "Employee Escorts", desc: "Accompanying employees during open/close procedures, transit of valuables, or dark parking lot walks." },
  { icon: "🚗", title: "Parking Lot Safety", desc: "Conducting regular drive-throughs and walking checks to deter auto theft and support guest safety." },
  { icon: "🗣️", title: "Customer Disputes", desc: "Using advanced de-escalation techniques to resolve conflicts peacefully inside bank lobbies." },
  { icon: "🔒", title: "Access Control", desc: "Enforcing building rules and restricting access to teller counters, vaults, and back-office spaces." },
  { icon: "🔑", title: "After-Hours Vendor Access", desc: "Verifying credentials and supervising third-party vendors servicing vaults or cash systems." },
  { icon: "🚨", title: "Emergency Response Support", desc: "Acting as first contact and assisting police or emergency services during branch alarms." },
  { icon: "💰", title: "Cash Handling Support", desc: "Providing visible, armed or unarmed guard presence during high-volume transfers and vault openings." },
];

const properties = [
  { icon: "🏦", label: "Banks" },
  { icon: "💳", label: "Credit Unions" },
  { icon: "🏢", label: "Financial Offices" },
  { icon: "📊", label: "Corporate Finance" },
  { icon: "🏪", label: "ATM Locations" },
  { icon: "📝", label: "Loan Offices" },
  { icon: "📈", label: "Investment Firms" },
  { icon: "🌐", label: "Financial Service Centers" },
];

const coverageOptions = [
  { service: "Lobby & Lobby Desk Presence", schedule: "Business Hours", desc: "Managing visitor logs, monitoring customer queues, and providing access control at lobby entrances." },
  { service: "After-Hours Vault & Vendor Support", schedule: "Flexible Night / Weekend", desc: "Supervising building maintenance, vault servicing, IT upgrades, and building security checks when closed." },
  { service: "Special Audits & High-Risk Operations", schedule: "On-Demand", desc: "Deploying extra support during cash deliveries, vault updates, audits, or high-risk periods." },
  { service: "ATM & Parking Patrols", schedule: "Evening & Holiday Focus", desc: "Dedicated rounds focused on ATM areas, dark corridors, and guest parking safety." },
];

export default function FinancialInstitutionSecurityPage() {
  return (
    <main className={styles.main}>
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== SECTION 1: HERO ===== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg}>
          <Image
            src="https://cms.secureguardservices.com/wp-content/uploads/2026/09/fin1.png"
            alt="Secure Guard officer standing in front of a sleek financial institution branch at twilight"
            fill
            className={styles.heroBgImg}
            priority
            quality={90}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroWrapper}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge} id="hero-badge">
              <span className={styles.heroBadgeDot} />
              Financial Institution Security
            </div>
            <h1 className={styles.heroTitle} id="hero-title">
              Protect Customers, Staff, Cash Handling Areas, <span className={styles.heroTitleAccent}>and Sensitive Financial Operations</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Secure Guard Security Services delivers highly professional, de-escalation-focused security officers tailored for banks, credit unions, and financial centers. Achieve maximum visibility, trust, and absolute control.
            </p>
            <div className={styles.heroCtas}>
              <a 
                href="https://www.secureguardservices.com/contact" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.btnPrimary} 
                id="hero-cta-primary"
              >
                Request a Free Quote
              </a>
              <a 
                href="#solution" 
                className={styles.btnOutline} 
                id="hero-cta-secondary"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
        <div className={styles.heroScroll} aria-hidden="true">
          <span className={styles.heroScrollDot} />
        </div>
      </section>

      {/* ===== SECTION 2: REAL-LIFE PROBLEM ===== */}
      <section className={styles.whySection} id="problem">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Real-Life Problem</span>
            <h2 className={styles.sectionTitle}>
              Challenges of <span className={styles.titleAccent}>Financial Institution Security</span>
            </h2>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyText}>
              <p className={styles.bodyText}>
                Financial institutions require a higher level of professionalism, visibility, and control. Banks, credit unions, and financial offices handle sensitive customer information, cash activity, employee safety concerns, and access control needs.
              </p>
              <p className={styles.bodyText}>
                Clients need security officers who can maintain a calm presence, support staff, observe suspicious behavior, monitor entrances, and respond quickly to safety concerns.
              </p>
            </div>
            <div className={styles.whyCards}>
              {[
                { icon: "💳", title: "Access Control Needs", desc: "Preventing unauthorized entry into sensitive zones, vaults, and teller corridors." },
                { icon: "💰", title: "Cash Activity Risks", desc: "Deterring theft or robbery during cash transport, vault checks, and teller window operations." },
                { icon: "🚶", title: "ATM Security Concerns", desc: "Ensuring customer safety during cash withdrawals in outdoor or open ATM areas." },
                { icon: "🤝", title: "Employee Escorts", desc: "Protecting staff during opening, closing, and high-risk operational transitions." },
              ].map((c) => (
                <div key={c.title} className={styles.whyCard}>
                  <div className={styles.whyCardIconWrapper}>
                    <span className={styles.whyCardIcon}>{c.icon}</span>
                  </div>
                  <div className={styles.whyCardContent}>
                    <h3 className={styles.whyCardTitle}>{c.title}</h3>
                    <p className={styles.whyCardDesc}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: SECURE GUARD SOLUTION ===== */}
      <section className={styles.addonSection} id="solution">
        <div className="container">
          <div className={styles.addonGrid}>
            <div className={styles.addonImageCol}>
              <Image 
                src="https://cms.secureguardservices.com/wp-content/uploads/2026/09/fin2.png" 
                alt="Secure Guard officer checking security access at a financial institution lobby" 
                width={600} 
                height={500} 
                className={styles.addonImage} 
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.addonContent}>
              <span className={styles.sectionTag}>Secure Guard Solution</span>
              <h2 className={styles.sectionTitle}>
                Calm Presence & <span className={styles.titleAccent}>Comprehensive Branch Protection</span>
              </h2>
              <p className={styles.bodyText}>
                Secure Guard provides financial institution security officers for lobby presence, access control, customer support, employee escort, ATM area monitoring, parking lot checks, incident reporting, and emergency response support.
              </p>
              <p className={styles.bodyText}>
                Our highly-trained officers bring an elite level of professionalism and calm authority to your site. We are dedicated to ensuring a secure branch environment while respecting customer relations and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: CUSTOMIZABLE COVERAGE (TOWER SECTION APPROACH) ===== */}
      <section className={styles.towerSection} id="coverage">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTagLight}>Customizable Coverage</span>
            <h2 className={styles.sectionTitleLight}>
              Flexible Scheduling <span className={styles.titleAccentGold}>for Financial Branches</span>
            </h2>
          </div>
          <p className={styles.bodyTextCenteredLight}>
            Security coverage can be scheduled during business hours, after-hours servicing, special operations, or high-risk periods. We adapt our protection strategy to match your institution&apos;s specific hours and operational needs.
          </p>

          {/* Coverage Options Table */}
          <div className={styles.tableWrapper} id="coverage-table">
            <table className={styles.pricingTable}>
              <thead>
                <tr>
                  <th>Coverage Type</th>
                  <th>Schedule Focus</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {coverageOptions.map((row) => (
                  <tr key={row.service}>
                    <td className={styles.tdComponent}>{row.service}</td>
                    <td>
                      <span className={styles.badgeOptional}>{row.schedule}</span>
                    </td>
                    <td className={styles.tdDesc}>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: WHAT THIS MEANS FOR THE CLIENT ===== */}
      <section className={styles.opsSection} id="benefits">
        <div className="container">
          <div className={styles.opsGrid}>
            <div className={styles.opsText}>
              <span className={styles.sectionTagLight}>Client Value</span>
              <h2 className={styles.sectionTitleLight}>
                What This Means <span className={styles.titleAccentGold}>for the Client</span>
              </h2>
              <p className={styles.bodyTextLight}>
                By deploying Secure Guard officers, your branch receives a reliable, highly professional presence that boosts customer trust, protects assets, and secures daily transactions.
              </p>
            </div>
            <div className={styles.opsFeatures}>
              {[
                "Professional security presence for customers and staff",
                "Improved monitoring of entrances and lobby areas",
                "Support for employee safety",
                "Reduced risk of suspicious activity escalating",
                "Documented incidents and activity logs",
                "Better protection around ATM and parking areas",
                "Flexible coverage for branches and corporate offices",
              ].map((benefit, idx) => (
                <div key={idx} className={styles.opsFeatureItem}>
                  <span className={styles.opsFeatureIcon}>🛡️</span>
                  <span className={styles.opsFeatureLabel}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: COMMON SITUATIONS ===== */}
      <section className={styles.addonSectionAlt} id="situations">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Field Expertise</span>
            <h2 className={styles.sectionTitle}>
              Common Financial Institution <span className={styles.titleAccent}>Security Situations We Handle</span>
            </h2>
          </div>
          <div className={styles.situationsGrid}>
            {situations.map((sit, index) => (
              <div key={index} className={styles.situationCard}>
                <div className={styles.situationHeader}>
                  <span className={styles.situationIcon}>{sit.icon}</span>
                  <h3 className={styles.situationTitle}>{sit.title}</h3>
                </div>
                <p className={styles.situationDesc}>{sit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: BEST FIT FOR ===== */}
      <section className={`${styles.gallerySection} ${styles.bestFitSection}`} id="best-fit">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTagLight}>Best Fit For</span>
            <h2 className={styles.sectionTitleLight}>
              Financial Settings We <span className={styles.titleAccentGold}>Secure & Protect</span>
            </h2>
            <p className={styles.sectionSubtextLight}>
              Our security coverage is optimized for all types of financial service hubs, from retail branches to corporate investment suites.
            </p>
          </div>
          <div className={styles.propertiesGrid}>
            {properties.map((prop, idx) => (
              <div key={idx} className={styles.propertyCard}>
                <div className={styles.propertyIcon}>{prop.icon}</div>
                <span className={styles.propertyLabel}>{prop.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRE-FOOTER CTA ===== */}
      <PreFooterCTA />

      {/* ===== FOOTER ===== */}
      <Footer />
    </main>
  );
}
