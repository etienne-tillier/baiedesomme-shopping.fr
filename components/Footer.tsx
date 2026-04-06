import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "hsl(340, 25%, 22%)",
        color: "hsl(345, 20%, 82%)",
        marginTop: "auto",
      }}
    >
      {/* Top footer */}
      <div
        className="container"
        style={{
          paddingTop: "4rem",
          paddingBottom: "3rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ marginBottom: "1rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "hsl(28, 45%, 88%)",
                  display: "block",
                  lineHeight: 1.1,
                }}
              >
                Baie de Somme
              </span>
              <span
                style={{
                  fontFamily: "var(--font-script)",
                  fontSize: "1.1rem",
                  color: "var(--color-accent-light)",
                  display: "block",
                  lineHeight: 1.1,
                }}
              >
                Shopping
              </span>
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.75,
                color: "hsl(345, 15%, 68%)",
                maxWidth: "280px",
              }}
            >
              Votre guide mode bienveillant pour trouver la tenue parfaite, pour chaque occasion et chaque saison.
            </p>
            <div style={{ marginTop: "1.5rem" }}>
              <a
                href={`mailto:${siteConfig.email}`}
                style={{
                  color: "var(--color-accent-light)",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          {siteConfig.footerNav.map((group) => (
            <div key={group.title}>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "hsl(28, 45%, 88%)",
                  marginBottom: "1.25rem",
                  letterSpacing: "0.02em",
                }}
              >
                {group.title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom footer */}
      <div
        style={{
          borderTop: "1px solid hsl(340, 20%, 30%)",
          padding: "1.25rem 1.5rem",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <p style={{ fontSize: "0.8125rem", color: "hsl(345, 15%, 55%)", margin: 0 }}>
            © {currentYear} {siteConfig.name}. Tous droits réservés.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/mentions-legales" className="footer-link" style={{ fontSize: "0.8125rem" }}>
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="footer-link" style={{ fontSize: "0.8125rem" }}>
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
