export const site = {
  name: "GrandTux Security Labs",
  shortName: "GRANDTUX",
  tagline: "RESEARCH • SECURE • PROTECT",
  closingLine: "Identify. Report. Secure.",
  email: "contact@grandtux.com",
  website: "grandtux.com",
  websiteUrl: "https://grandtux.com",
  description:
    "Independent Offensive Security & Cybersecurity Services. We research vulnerabilities, secure infrastructure, and protect digital futures.",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/labs", label: "Labs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    id: "web-app",
    title: "Web Application Security Assessment",
    shortTitle: "Web App Security",
    description:
      "Identify vulnerabilities across your web applications before attackers do — from authentication flaws to injection and business-logic abuse.",
    icon: "search" as const,
  },
  {
    id: "mobile-app",
    title: "Mobile Application Security Assessment",
    shortTitle: "Mobile App Security",
    description:
      "Assess iOS and Android apps for insecure storage, API misuse, reverse-engineering risks, and client-side attack surfaces.",
    icon: "mobile" as const,
  },
  {
    id: "api-network",
    title: "API Security Testing & External Network Assessment",
    shortTitle: "API & Network",
    description:
      "Probe APIs and external network exposure to uncover misconfigurations, weak auth, and reachable attack paths.",
    icon: "network" as const,
  },
  {
    id: "manual-report",
    title: "Manual Security Testing & Comprehensive Vulnerability Report",
    shortTitle: "Manual Testing & Reporting",
    description:
      "Hands-on manual testing with clear, actionable reports — severity, evidence, impact, and prioritized remediation guidance.",
    icon: "report" as const,
  },
  {
    id: "remediation",
    title: "Remediation Recommendations & Final Review Discussion",
    shortTitle: "Remediation & Review",
    description:
      "Practical fix guidance and a final review discussion so your team can close findings with confidence.",
    icon: "shield" as const,
  },
] as const;

export const homeServiceCards = [
  {
    title: "Web & Mobile Assessment",
    description: "Discover vulnerabilities before attackers do.",
    icon: "search" as const,
  },
  {
    title: "API & Network Testing",
    description: "Simulate real-world attacks and strengthen defenses.",
    icon: "target" as const,
  },
  {
    title: "Manual Testing & Reporting",
    description: "Clear evidence, severity, and actionable findings.",
    icon: "code" as const,
  },
  {
    title: "Remediation & Review",
    description: "Practical guidance from identify to secure.",
    icon: "tools" as const,
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Authorize",
    description: "Written authorization before any testing begins.",
  },
  {
    step: "02",
    title: "Scope",
    description: "Agree targets, rules of engagement, and deliverables.",
  },
  {
    step: "03",
    title: "Test",
    description: "Manual-led assessment with controlled, non-destructive methods.",
  },
  {
    step: "04",
    title: "Report",
    description: "Comprehensive findings with evidence and risk context.",
  },
  {
    step: "05",
    title: "Remediate",
    description: "Recommendations and a final review discussion.",
  },
] as const;

export const engagementPrinciples = [
  "Testing is performed only with prior written authorization.",
  "Scope must be agreed before the engagement begins.",
  "No destructive testing is performed.",
  "DoS/DDoS testing is excluded unless explicitly approved.",
  "All findings and credentials are treated as strictly confidential.",
] as const;

export const platforms = [
  "Linux",
  "Docker",
  "AWS",
  "Cloudflare",
  "Debian",
  "Nginx",
] as const;

export const labFocus = [
  {
    title: "Vulnerability Research",
    description:
      "Methodical discovery and analysis of weaknesses across applications, APIs, and exposed infrastructure.",
  },
  {
    title: "Assessment Methodology",
    description:
      "Repeatable, evidence-driven testing aligned with real attacker techniques — without unnecessary risk to production.",
  },
  {
    title: "Defender-Focused Tooling",
    description:
      "A practical toolkit mindset for assessments, reporting, and helping teams harden systems after findings land.",
  },
  {
    title: "Responsible Practice",
    description:
      "Authorized testing only. Clear communication. Confidential handling of every detail from kickoff to closeout.",
  },
] as const;

export const aboutPoints = [
  {
    title: "Research-led",
    description:
      "Assessments start from how attackers actually think — not checkbox scans alone.",
  },
  {
    title: "Practical remediation",
    description:
      "Findings come with guidance your engineers can act on, not just a severity score.",
  },
  {
    title: "Clear reporting",
    description:
      "Evidence, impact, and priorities — written so technical and business stakeholders both understand the risk.",
  },
] as const;
