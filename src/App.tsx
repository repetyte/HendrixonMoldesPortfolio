import { useState, useEffect, useRef, useCallback } from "react"

/* ─── Reveal hook ───────────────────────────────────────────── */

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  const setRef = useCallback((node: HTMLElement | null) => {
    ref.current = node
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref: setRef, visible }
}

function rv(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

/* ─── Data ─────────────────────────────────────────────────── */

const NAV_LINKS = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Certifications",
  "Contact",
]

const SKILLS: Record<string, string[]> = {
  "Frontend & Mobile": [
    "Flutter",
    "Dart",
    "React JS",
    "HTML / CSS",
    "JavaScript",
    "Figma",
  ],
  "Backend & Database": [
    "PHP",
    "MySQL",
    "Firebase",
    "REST APIs",
    "Git / GitHub",
  ],
  "Cloud Platforms": [
    "AWS EC2 / S3 / IAM",
    "AWS Architecting",
    "AWS Operations",
    "Google Cloud",
    "Vertex AI",
  ],
  "Salesforce CRM": [
    "Apex",
    "Lightning Web Components",
    "Visualforce",
    "Record-Triggered Flows",
    "Process Automation",
  ],
  "Networking & Security": [
    "Cisco CCNA",
    "Cyber Threat Mgmt",
    "Cybersecurity",
    "VPN & Connectivity",
  ],
  "Soft Skills": [
    "Leadership",
    "Agile / Scrum",
    "Problem-Solving",
    "Adaptability",
    "Team Collaboration",
  ],
}

const EXPERIENCE = [
  {
    role: "Sales and Retention Representative",
    company: "Quantrics Enterprises",
    location: "Naga City, Philippines",
    period: "Sep 2025 — Present",
    badge: "Full-time",
    badgeColor: "#22d3ee",
    highlights: [
      "Achieved 95% Customer Retention Rate and 94% First Quality Score",
      "Frontline technical support for telecommunications connectivity & account issues",
      "Root cause analysis and guided step-by-step problem resolution",
      "Maintained detailed service documentation for SLA-driven continuity",
    ],
  },
  {
    role: "Salesforce Developer",
    company: "TheSmartBridge",
    location: "Telangana, India (Virtual)",
    period: "Mar 2025 — May 2025",
    badge: "Internship",
    badgeColor: "var(--c-accent)",
    highlights: [
      "Built automation that reduced manual operational tasks by 80%",
      "Configured Salesforce CRM with Apex, Visualforce, and Lightning Web Components",
      "Delivered capstone integrating automation tools and Lightning components",
      "Agile sprint cycles with cross-functional team requirement validation",
    ],
  },
  {
    role: "SPES Student Intern",
    company: "Local Government Unit of Pamplona",
    location: "Pamplona, Camarines Sur",
    period: "May 2021 — Aug 2021",
    badge: "Internship",
    badgeColor: "var(--c-accent)",
    highlights: [
      "Validated and processed 50+ AICS beneficiary applications",
      "Conducted weekly needs assessments for 40+ beneficiaries",
      "Developed empathy-driven communication in public service context",
    ],
  },
]

const PROJECTS = [
  {
    title: "CareerPathLink",
    subtitle: "Career Center Management System (CCMS)",
    period: "2024 — 2025",
    context: "Capstone Project · University of Nueva Caceres",
    description:
      "End-to-end full-stack platform modernizing career services for students, graduates, employers, and administrators. Four integrated modules: Recruitment & Placement, Career Coaching, Work-Integrated Learning, and Employment Tracking. Passed ISO 25010 User Acceptance Testing.",
    stack: [
      "Flutter",
      "PHP",
      "MySQL",
      "Agile Scrum",
      "ISO 25010",
      "BPMN / DFD",
    ],
    accent: "var(--c-accent)",
    accentHex: "#7c5fff",
    image:
      // "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=420&fit=crop&auto=format",
      "https://media.licdn.com/dms/image/v2/D562DAQH4gIAG9YNs8g/profile-treasury-image-shrink_1920_1920/B56ZjhbomOH8Ak-/0/1756128778017?e=1790762400&v=beta&t=sm9bedaLGQZqUhP7wYjFuKkbFIaFVFco3Nd0FHtUocM",
  },
  {
    title: "HandsMen Threads",
    subtitle: "Elevating the Art of Sophistication in Men's Fashion",
    period: "Apr 2025 — May 2025",
    context: "Salesforce Developer Internship · TheSmartBridge",
    description:
      "Custom Salesforce CRM solution for a men's fashion retailer. Centralized customer, order, and inventory data; automated 80% of manual operations via Record-Triggered Flows, Scheduled Apex, and email alerts for low-stock notifications.",
    stack: [
      "Salesforce",
      "Apex",
      "LWC",
      "Record-Triggered Flows",
      "Scheduled Apex",
    ],
    accent: "var(--c-accent-cyan)",
    accentHex: "#22d3ee",
    image:
      //"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=420&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=420&fit=crop&auto=format",
  },
]

const CERTIFICATIONS = [
  {
    name: "AWS Academy Cloud Architecting",
    issuer: "Amazon Web Services",
    date: "Feb 2025",
    color: "#ff9900",
  },
  {
    name: "AWS Academy Cloud Operations",
    issuer: "Amazon Web Services",
    date: "Feb 2025",
    color: "#ff9900",
  },
  {
    name: "AWS Academy Cloud Developing",
    issuer: "Amazon Web Services",
    date: "Feb 2025",
    color: "#ff9900",
  },
  {
    name: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "Oct 2024",
    color: "#ff9900",
  },
  {
    name: "Salesforce Virtual Internship Program",
    issuer: "TheSmartBridge / Salesforce",
    date: "May 2025",
    color: "#00a1e0",
  },
  {
    name: "Cyber Threat Management",
    issuer: "Cisco",
    date: "Feb 2025",
    color: "#00bceb",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "Dec 2024",
    color: "#00bceb",
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "Jan 2024",
    color: "#00bceb",
  },
  {
    name: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    date: "Jun 2024",
    color: "#4285f4",
  },
]

/* ─── Helpers ───────────────────────────────────────────────── */

function SectionTag({
  children,
  center,
}: {
  children: React.ReactNode
  center?: boolean
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        justifyContent: center ? "center" : "flex-start",
        marginBottom: "0.75rem",
      }}
    >
      <span
        style={{
          width: 22,
          height: 2,
          borderRadius: 2,
          background: "var(--c-accent)",
          display: "inline-block",
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          color: "var(--c-accent)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {children}
      </span>
    </div>
  )
}

function Chip({
  label,
  variant = "accent",
}: {
  label: string
  variant?: "accent" | "cyan" | "amber" | "teal"
}) {
  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    accent: {
      bg: "rgba(124,95,255,0.10)",
      border: "rgba(124,95,255,0.22)",
      text: "var(--c-accent-light)",
    },
    cyan: {
      bg: "rgba(34,211,238,0.10)",
      border: "rgba(34,211,238,0.22)",
      text: "var(--c-accent-cyan)",
    },
    amber: {
      bg: "rgba(245,158,11,0.10)",
      border: "rgba(245,158,11,0.22)",
      text: "#f59e0b",
    },
    teal: {
      bg: "rgba(0,188,235,0.10)",
      border: "rgba(0,188,235,0.22)",
      text: "#00bceb",
    },
  }
  const c = colorMap[variant]
  return (
    <span
      style={{
        background: c.bg,
        border: `1px solid ${c.border}`,
        borderRadius: 5,
        padding: "4px 9px",
        fontSize: "0.72rem",
        color: c.text,
        fontFamily: "var(--font-mono)",
        display: "inline-block",
      }}
    >
      {label}
    </span>
  )
}

function ThemeToggle({
  dark,
  onToggle,
}: {
  dark: boolean
  onToggle: () => void
}) {
  return (
    <button
      onClick={onToggle}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      style={{
        background: "var(--c-surface)",
        border: "1px solid var(--c-border)",
        borderRadius: 8,
        width: 36,
        height: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "1rem",
        transition: "border-color 0.2s, background 0.2s",
        flexShrink: 0,
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor = "var(--c-accent)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.borderColor = "var(--c-border)")
      }
    >
      {dark ? "☀️" : "🌙"}
    </button>
  )
}

/* ─── Main ──────────────────────────────────────────────────── */

export default function App() {
  const [dark, setDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredExp, setHoveredExp] = useState<number | null>(null)
  const [hoveredProj, setHoveredProj] = useState<number | null>(null)

  // Section reveal hooks
  const heroReveal   = useReveal(0.05)
  const aboutReveal  = useReveal(0.1)
  const skillsReveal = useReveal(0.1)
  const expReveal    = useReveal(0.1)
  const projReveal   = useReveal(0.1)
  const certReveal   = useReveal(0.1)
  const ctaReveal    = useReveal(0.15)

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark)
  }, [dark])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  const T = {
    bg: "var(--c-bg)",
    surface: "var(--c-surface)",
    surfaceAlt: "var(--c-surface-alt)",
    border: "var(--c-border)",
    text: "var(--c-text)",
    muted: "var(--c-muted)",
    dim: "var(--c-dim)",
    accent: "var(--c-accent)",
    accentLight: "var(--c-accent-light)",
    cyan: "var(--c-accent-cyan)",
  }

  const navBg = scrolled
    ? dark ? "rgba(7,7,14,0.88)" : "rgba(245,245,250,0.88)"
    : "transparent"

  return (
    <div
      style={{
        background: T.bg,
        color: T.text,
        minHeight: "100vh",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      {/* ── Nav ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: 64,
          background: navBg,
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled
            ? `1px solid ${T.border}`
            : "1px solid transparent",
          transition: "all 0.35s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1160,
            margin: "0 auto",
            padding: "0 2rem",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-display)",
              fontSize: "1.15rem",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: T.text,
            }}
          >
            HM<span style={{ color: T.accent }}>.</span>
          </button>

          {/* Desktop links */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
            className="nav-desktop"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: T.muted,
                  transition: "color 0.2s",
                  padding: "4px 0",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = T.text)
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = T.muted)
                }
                onClick={() => scrollTo(link)}
              >
                {link}
              </button>
            ))}
            <ThemeToggle dark={dark} onToggle={() => setDark(!dark)} />
            <a
              href="mailto:hendrixonnolloramoldes@gmail.com"
              style={{
                background: T.accent,
                color: "#fff",
                borderRadius: 7,
                padding: "8px 18px",
                fontSize: "0.82rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.82")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "1")
              }
            >
              Hire Me
            </a>
          </div>

          {/* Mobile row: toggle + burger */}
          <div
            style={{ display: "none", alignItems: "center", gap: "0.75rem" }}
            className="nav-mobile-row"
          >
            <ThemeToggle dark={dark} onToggle={() => setDark(!dark)} />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: T.text,
                fontSize: "1.4rem",
                lineHeight: 1,
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            style={{
              background: T.surface,
              borderTop: `1px solid ${T.border}`,
              padding: "1rem 2rem 1.5rem",
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                style={{
                  display: "block",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: T.muted,
                  fontSize: "0.95rem",
                  padding: "10px 0",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section
        id="hero"
        ref={heroReveal.ref as React.RefCallback<HTMLElement>}
        style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "7rem 2rem 4rem" }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto", width: "100%" }}>
          <div className="hero-grid">
            <div>
              {/* Badge */}
              <div
                className={rv("reveal reveal-fade", heroReveal.visible && "visible delay-1")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: dark ? "rgba(124,95,255,0.08)" : "rgba(98,68,240,0.07)",
                  border: `1px solid ${dark ? "rgba(124,95,255,0.28)" : "rgba(98,68,240,0.25)"}`,
                  borderRadius: 100,
                  padding: "6px 14px",
                  marginBottom: "2rem",
                }}
              >
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: T.accent, display: "inline-block", animation: "pulse-dot 2s infinite" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: T.accentLight, letterSpacing: "0.06em" }}>
                  available for opportunities
                </span>
              </div>

              <p
                className={rv("reveal reveal-up", heroReveal.visible && "visible delay-2")}
                style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", fontWeight: "bolder", color: T.accent, marginBottom: "1.25rem", lineHeight: 1.5 }}
              >
                Hello! I am
              </p>

              <h1
                className={rv("reveal reveal-up", heroReveal.visible && "visible delay-3")}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3.2rem, 7vw, 5.8rem)",
                  fontWeight: 700,
                  lineHeight: 0.98,
                  letterSpacing: "-0.04em",
                  color: T.text,
                  marginBottom: "1.25rem",
                }}
              >
                Hendrixon<br />
                <span style={{ color: T.accent }}>Moldes</span>
              </h1>

              <p
                className={rv("reveal reveal-up", heroReveal.visible && "visible delay-4")}
                style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: T.muted, marginBottom: "1.25rem", lineHeight: 1.5 }}
              >
                IT Graduate · Flutter Developer · Salesforce CRM · UI/UX Designer
              </p>

              <p
                className={rv("reveal reveal-up", heroReveal.visible && "visible delay-5")}
                style={{ color: T.dim, fontSize: "0.95rem", lineHeight: 1.9, maxWidth: 460, marginBottom: "2.5rem" }}
              >
                Versatile technologist from the Philippines building cross-platform apps,
                CRM automation, and intuitive user experiences. Certified in AWS, Cisco, and Google Cloud.
              </p>

              <div
                className={rv("reveal reveal-up", heroReveal.visible && "visible delay-6")}
                style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}
              >
                <button
                  onClick={() => scrollTo("Projects")}
                  style={{ background: T.accent, color: "#fff", border: "none", borderRadius: 8, padding: "13px 26px", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer", transition: "opacity 0.2s, transform 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)" }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)" }}
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollTo("Contact")}
                  style={{ background: "transparent", color: T.text, border: `1px solid ${T.border}`, borderRadius: 8, padding: "13px 26px", fontSize: "0.9rem", fontWeight: 600, cursor: "pointer", transition: "border-color 0.2s, transform 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--c-accent)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)" }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.border; (e.currentTarget as HTMLElement).style.transform = "translateY(0)" }}
                >
                  Get In Touch
                </button>
              </div>

              {/* Stats */}
              <div style={{ display: "flex", gap: "2.5rem", marginTop: "3rem", paddingTop: "2rem", borderTop: `1px solid ${T.border}`, flexWrap: "wrap" }}>
                {[["9+", "Certifications"], ["2", "Key Projects"], ["95%", "Retention Rate"], ["80%", "Task Automation"]].map(([num, label], si) => (
                  <div
                    key={label}
                    className={rv("stat-item", heroReveal.visible && "visible")}
                    style={{ transitionDelay: `${0.55 + si * 0.1}s` }}
                  >
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem", fontWeight: 700, color: T.accent, letterSpacing: "-0.03em" }}>
                      {num}
                    </div>
                    <div style={{ fontSize: "0.7rem", color: T.muted, textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Portrait */}
            <div
              className={rv("hero-portrait reveal reveal-right float-card", heroReveal.visible && "visible delay-3")}
              style={{ position: "relative" }}
            >
              <div style={{ width: 320, height: 410, borderRadius: 18, overflow: "hidden", border: `1px solid ${T.border}`, position: "relative", background: T.surface, boxShadow: "0 32px 80px rgba(0,0,0,0.35)" }}>
                <img
                  src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/816123958_122288891870193305_8695639908882119195_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1254x1254&ctp=s1254x1254&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHoSy2goYxuke1HWzUJJXwsAKllKDoOmEcAqWUoOg6YR7KjKNeeCPDfBlcnevOqTKlWIA0FlHlx1bb5ZxC4LaEH&_nc_ohc=CLz9TDchhVAQ7kNvwGCSaW9&_nc_oc=AdpEbrrVZEhV6eHYI2NCH4pro-Z9QFHqH39NGy4-wLhlqDLtHMQ3Jzvaj_EyWnJopu_wOpfFbPnlUJGH3VqABHW4&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=bSzH3U7ToxQX7qoX8jekZg&_nc_ss=7b2a8&oh=00_AQJtk_YlGwHCl807GSQXYfAw6uhO9dVgDn-9AGKboVEISg&oe=6AB987CD"
                  alt="Professional developer portrait"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.transform = "scale(1)")}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,7,14,0.75) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: 18, left: 18, right: 18 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", fontWeight: 700, color: "#e2e2f0" }}>Hendrixon Moldes</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: T.accent, marginTop: 3 }}>BSIT · University of Nueva Caceres</div>
                </div>
              </div>
              {/* Floating chip */}
              <div
                className={rv("reveal reveal-scale", heroReveal.visible && "visible delay-7")}
                style={{ position: "absolute", bottom: -18, right: -18, background: T.surface, border: `1px solid ${T.border}`, borderRadius: 10, padding: "12px 16px", minWidth: 150, boxShadow: "0 8px 24px rgba(0,0,0,0.2)" }}
              >
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: T.dim, marginBottom: 4 }}>Currently at</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: T.text }}>Quantrics Enterprises</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: T.cyan, marginTop: 3 }}>● Active</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section
        id="about"
        ref={aboutReveal.ref as React.RefCallback<HTMLElement>}
        style={{ padding: "5rem 2rem", background: T.surfaceAlt }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div className={rv("reveal reveal-fade", aboutReveal.visible && "visible delay-1")}>
            <SectionTag>Biography</SectionTag>
          </div>
          <div className="about-grid">
            <div style={{ gridColumn: "span 2" }}>
              <h2
                className={rv("reveal reveal-up", aboutReveal.visible && "visible delay-2")}
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.03em", color: T.text, marginBottom: "1.25rem", lineHeight: 1.1 }}
              >
                Building technology<br />
                <span style={{ color: T.accent }}>that matters</span>
              </h2>
              <p
                className={rv("reveal reveal-up", aboutReveal.visible && "visible delay-3")}
                style={{ color: T.muted, fontSize: "1rem", lineHeight: 1.9, marginBottom: "1rem", maxWidth: 640 }}
              >
                I am a motivated and versatile IT graduate from the University of Nueva Caceres
                in Naga City, Philippines. My work spans cross-platform Flutter development,
                Salesforce CRM customization, cloud architecture, and user-centered design —
                always with a focus on clean, efficient solutions.
              </p>
              <p
                className={rv("reveal reveal-up", aboutReveal.visible && "visible delay-4")}
                style={{ color: T.dim, fontSize: "0.95rem", lineHeight: 1.9, maxWidth: 620 }}
              >
                Beyond engineering, I have served as a Student Council member and UNC Band
                President (Newbies), sharpening leadership, organization, and adaptability.
                Recognized as a Dean&apos;s Lister and MQUAP Achiever — Top 2 at UNC for 2024–2025.
              </p>
            </div>
            {[
              { label: "Education", value: "BS Information Technology", sub: "University of Nueva Caceres · June 2025" },
              { label: "Location", value: "Camarines Sur, Region V", sub: "Philippines · Open to remote" },
              { label: "Recognition", value: "Dean's Lister · MQUAP Top 2", sub: "University of Nueva Caceres · 2024–2025" },
              { label: "Leadership", value: "Student Council · UNC Band", sub: "President (Newbies) · Councilor" },
            ].map((item, ci) => (
              <div
                key={item.label}
                className={rv("reveal reveal-scale", aboutReveal.visible && "visible")}
                style={{
                  background: T.surface,
                  border: `1px solid ${T.border}`,
                  borderRadius: 12,
                  padding: "1.4rem 1.5rem",
                  transition: "background 0.3s, border-color 0.3s, transform 0.25s",
                  animationDelay: `${0.28 + ci * 0.1}s`,
                  cursor: "default",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--c-accent)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)" }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.border; (e.currentTarget as HTMLElement).style.transform = "translateY(0)" }}
              >
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: T.accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: "0.92rem", fontWeight: 600, color: T.text, marginBottom: 4 }}>{item.value}</div>
                <div style={{ fontSize: "0.78rem", color: T.muted }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section
        id="skills"
        ref={skillsReveal.ref as React.RefCallback<HTMLElement>}
        style={{ padding: "5rem 2rem", background: T.bg }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div className={rv("reveal reveal-fade", skillsReveal.visible && "visible delay-1")}>
            <SectionTag>Technical Expertise</SectionTag>
          </div>
          <h2
            className={rv("reveal reveal-up", skillsReveal.visible && "visible delay-2")}
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.03em", color: T.text, marginBottom: "2.5rem" }}
          >
            Skills & Technologies
          </h2>
          <div className="skills-grid">
            {Object.entries(SKILLS).map(([category, items], ki) => {
              const variant =
                category === "Soft Skills" ? "cyan"
                : category === "Cloud Platforms" ? "amber"
                : category === "Networking & Security" ? "teal"
                : "accent"
              return (
                <div
                  key={category}
                  className={rv("reveal reveal-up", skillsReveal.visible && "visible")}
                  style={{
                    background: T.surface,
                    border: `1px solid ${T.border}`,
                    borderRadius: 12,
                    padding: "1.5rem",
                    transition: "background 0.3s, border-color 0.3s, transform 0.25s",
                    animationDelay: `${0.15 + ki * 0.08}s`,
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--c-accent)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)" }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.border; (e.currentTarget as HTMLElement).style.transform = "translateY(0)" }}
                >
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.88rem", fontWeight: 600, color: T.text, marginBottom: "1rem" }}>{category}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {items.map((s) => <Chip key={s} label={s} variant={variant as "accent" | "cyan" | "amber" | "teal"} />)}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section
        id="experience"
        ref={expReveal.ref as React.RefCallback<HTMLElement>}
        style={{ padding: "5rem 2rem", background: T.surfaceAlt }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div className={rv("reveal reveal-fade", expReveal.visible && "visible delay-1")}>
            <SectionTag>Work History</SectionTag>
          </div>
          <h2
            className={rv("reveal reveal-up", expReveal.visible && "visible delay-2")}
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.03em", color: T.text, marginBottom: "2.5rem" }}
          >
            Experience
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {EXPERIENCE.map((exp, i) => (
              <div
                key={i}
                className={rv("reveal reveal-left", expReveal.visible && "visible")}
                onMouseEnter={() => setHoveredExp(i)}
                onMouseLeave={() => setHoveredExp(null)}
                style={{
                  background: T.surface,
                  border: `1px solid ${hoveredExp === i ? exp.badgeColor + "55" : T.border}`,
                  borderRadius: 14,
                  padding: "1.75rem 2rem",
                  transition: "border-color 0.25s, background 0.3s, transform 0.25s, box-shadow 0.25s",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "1rem",
                  alignItems: "start",
                  animationDelay: `${0.2 + i * 0.12}s`,
                  transform: hoveredExp === i ? "translateX(4px)" : "translateX(0)",
                  boxShadow: hoveredExp === i ? `0 8px 32px rgba(0,0,0,0.15)` : "none",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 6,
                      flexWrap: "wrap",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: T.text,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <span
                      style={{
                        background: `color-mix(in srgb, ${exp.badgeColor} 12%, transparent)`,
                        border: `1px solid color-mix(in srgb, ${exp.badgeColor} 30%, transparent)`,
                        borderRadius: 4,
                        padding: "2px 8px",
                        fontSize: "0.68rem",
                        color: exp.badgeColor,
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {exp.badge}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "0.88rem",
                      color: exp.badgeColor,
                      fontWeight: 500,
                      marginBottom: 3,
                    }}
                  >
                    {exp.company}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: T.muted,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {exp.location}
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          fontSize: "0.86rem",
                          color: T.muted,
                          lineHeight: 1.65,
                        }}
                      >
                        <span
                          style={{
                            color: exp.badgeColor,
                            flexShrink: 0,
                            marginTop: 1,
                          }}
                        >
                          →
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: T.dim,
                    whiteSpace: "nowrap",
                    textAlign: "right",
                  }}
                >
                  {exp.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section
        id="projects"
        ref={projReveal.ref as React.RefCallback<HTMLElement>}
        style={{ padding: "5rem 2rem", background: T.bg }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div className={rv("reveal reveal-fade", projReveal.visible && "visible delay-1")}>
            <SectionTag>Featured Work</SectionTag>
          </div>
          <h2
            className={rv("reveal reveal-up", projReveal.visible && "visible delay-2")}
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.03em", color: T.text, marginBottom: "2.5rem" }}
          >
            Projects
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {PROJECTS.map((proj, i) => (
              <div
                key={i}
                className={rv("project-card reveal reveal-scale", projReveal.visible && "visible")}
                onMouseEnter={() => setHoveredProj(i)}
                onMouseLeave={() => setHoveredProj(null)}
                style={{
                  background: T.surface,
                  border: `1px solid ${hoveredProj === i ? proj.accentHex + "66" : T.border}`,
                  borderRadius: 16,
                  overflow: "hidden",
                  transition: "border-color 0.3s, background 0.3s, box-shadow 0.3s",
                  display: "grid",
                  gridTemplateColumns: "1fr 340px",
                  animationDelay: `${0.2 + i * 0.15}s`,
                  boxShadow: hoveredProj === i ? `0 16px 48px rgba(0,0,0,0.2), 0 0 0 1px ${proj.accentHex}22` : "none",
                }}
              >
                <div style={{ padding: "2rem" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: T.dim,
                      marginBottom: 8,
                    }}
                  >
                    {proj.context}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: T.text,
                      letterSpacing: "-0.025em",
                      marginBottom: 4,
                    }}
                  >
                    {proj.title}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: proj.accent,
                      fontWeight: 500,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {proj.subtitle}
                  </div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: T.muted,
                      lineHeight: 1.8,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {proj.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {proj.stack.map((t) => (
                      <Chip
                        key={t}
                        label={t}
                        variant={i === 0 ? "accent" : "cyan"}
                      />
                    ))}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: T.dim,
                    }}
                  >
                    {proj.period}
                  </div>
                </div>
                <div
                  className="project-img"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    background: T.surfaceAlt,
                  }}
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: dark ? 0.55 : 0.65,
                      transition: "opacity 0.3s",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(to right, ${T.surface} 0%, transparent 40%)`,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: proj.accentHex,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.9rem",
                    }}
                  >
                    {i === 0 ? "⚡" : "☁"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section
        id="certifications"
        ref={certReveal.ref as React.RefCallback<HTMLElement>}
        style={{ padding: "5rem 2rem", background: T.surfaceAlt }}
      >
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div className={rv("reveal reveal-fade", certReveal.visible && "visible delay-1")}>
            <SectionTag>Credentials</SectionTag>
          </div>
          <h2
            className={rv("reveal reveal-up", certReveal.visible && "visible delay-2")}
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.03em", color: T.text, marginBottom: "2.5rem" }}
          >
            Certifications
          </h2>
          <div className="cert-grid">
            {CERTIFICATIONS.map((cert, i) => (
              <div
                key={i}
                className={rv("cert-card reveal reveal-up", certReveal.visible && "visible")}
                style={{
                  background: T.surface,
                  border: `1px solid ${T.border}`,
                  borderRadius: 10,
                  padding: "1.1rem 1.4rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  transition: "border-color 0.2s, background 0.3s, transform 0.2s",
                  animationDelay: `${0.1 + i * 0.06}s`,
                  cursor: "default",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = cert.color + "66"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)" }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.border; (e.currentTarget as HTMLElement).style.transform = "translateY(0)" }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: cert.color,
                    flexShrink: 0,
                    boxShadow: `0 0 8px ${cert.color}66`,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: "0.86rem",
                      fontWeight: 600,
                      color: T.text,
                      marginBottom: 3,
                    }}
                  >
                    {cert.name}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: T.muted }}>
                    {cert.issuer} · {cert.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        id="contact"
        ref={ctaReveal.ref as React.RefCallback<HTMLElement>}
        style={{ padding: "6rem 2rem 5rem", background: T.bg }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <div className={rv("reveal reveal-fade", ctaReveal.visible && "visible delay-1")}>
            <SectionTag center>Get In Touch</SectionTag>
          </div>
          <h2
            className={rv("reveal reveal-up", ctaReveal.visible && "visible delay-2")}
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700, letterSpacing: "-0.04em", color: T.text, marginBottom: "1rem", lineHeight: 1.05 }}
          >
            Let&apos;s work<br />
            <span style={{ color: T.accent }}>together</span>
          </h2>
          <p
            className={rv("reveal reveal-up", ctaReveal.visible && "visible delay-3")}
            style={{ color: T.muted, fontSize: "1rem", lineHeight: 1.85, maxWidth: 500, margin: "0 auto 2.5rem" }}
          >
            Open to full-time roles, freelance engagements, and collaborative projects.
            Whether you need Flutter development, Salesforce CRM, or UI/UX design — I would love to hear from you.
          </p>
          <div
            className={rv("reveal reveal-scale", ctaReveal.visible && "visible delay-4")}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
          >
            <a
              href="mailto:hendrixonnolloramoldes@gmail.com"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, background: T.accent, color: "#fff", borderRadius: 10, padding: "15px 32px", fontSize: "0.95rem", fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s, transform 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)" }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)" }}
            >
              hendrixonnolloramoldes@gmail.com
            </a>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
              <a
                href="tel:+639667663499"
                style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, padding: "11px 18px", fontSize: "0.82rem", color: T.text, textDecoration: "none", fontFamily: "var(--font-mono)", transition: "background 0.3s, border-color 0.3s, transform 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--c-accent)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)" }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.border; (e.currentTarget as HTMLElement).style.transform = "translateY(0)" }}
              >
                +639 66 766 3499
              </a>
              <a
                href="https://www.linkedin.com/in/hendrixon-moldes/"
                target="_blank"
                rel="noreferrer"
                style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 8, padding: "11px 18px", fontSize: "0.82rem", color: T.text, textDecoration: "none", transition: "border-color 0.2s, background 0.3s, transform 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--c-accent)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)" }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = T.border; (e.currentTarget as HTMLElement).style.transform = "translateY(0)" }}
              >
                LinkedIn →
              </a>
            </div>
          </div>
          <div
            className={rv("reveal reveal-fade", ctaReveal.visible && "visible delay-5")}
            style={{ marginTop: "2.5rem", fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: T.dim }}
          >
            Pamplona, Camarines Sur · Philippines · Open to remote worldwide
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: `1px solid ${T.border}`,
          padding: "1.75rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1160,
          margin: "0 auto",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "-0.02em",
            color: T.text,
          }}
        >
          HM<span style={{ color: T.accent }}>.</span>
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: T.dim,
          }}
        >
          © 2026 Hendrixon Moldes · Built with React & Tailwind CSS
        </span>
      </footer>

      {/* ── Layout & responsive ── */}
      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile-row { display: none; }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 4rem;
          align-items: center;
        }
        .hero-portrait { display: block; }
        .about-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .about-grid > div:first-child { grid-column: 1 / 3; }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
        }
        .project-card { grid-template-columns: 1fr 340px; }
        .project-img { display: block; }

        @media (max-width: 1024px) {
          .hero-portrait { display: none; }
          .hero-grid { grid-template-columns: 1fr; }
          .about-grid { grid-template-columns: repeat(2, 1fr); }
          .about-grid > div:first-child { grid-column: 1 / 3; }
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
          .project-card { grid-template-columns: 1fr; }
          .project-img { display: none; }
        }

        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-row { display: flex !important; }
          .about-grid { grid-template-columns: 1fr; }
          .about-grid > div:first-child { grid-column: 1; }
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}
