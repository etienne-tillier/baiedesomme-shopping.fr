import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact — Baie de Somme Shopping",
  description:
    "Contactez l'équipe de Baie de Somme Shopping pour toute question sur nos conseils mode, partenariats ou collaborations.",
  alternates: { canonical: `${siteConfig.url}/contact` },
};

const themes = [
  { icon: "💌", title: "Question mode", desc: "Vous avez une question sur une tenue, occasion ou tendance ?" },
  { icon: "🤝", title: "Partenariat", desc: "Marques, e-commerçants mode : parlons affiliation et collaboration." },
  { icon: "✍️", title: "Rédaction", desc: "Proposer un sujet article ou rejoindre notre équipe de rédactrices." },
  { icon: "🐛", title: "Bug / Suggestion", desc: "Un problème sur le site ou une idée d'amélioration ?" },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "var(--color-bg-section)",
          borderBottom: "1px solid var(--color-border-light)",
          padding: "3.5rem 0 3rem",
        }}
      >
        <div className="container" style={{ maxWidth: "720px", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "1.2rem",
              color: "var(--color-primary)",
              marginBottom: "0.5rem",
            }}
          >
            Écrivez-nous
          </p>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "var(--color-text)",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Contactez notre équipe mode
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.7,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Une question sur vos tenues, un projet de collaboration ou simplement l&apos;envie d&apos;échanger ? Nous sommes à votre écoute.
          </p>
        </div>
      </section>

      {/* Contact principal */}
      <section className="section">
        <div className="container" style={{ maxWidth: "760px" }}>
          {/* Email bien visible */}
          <div
            style={{
              background: "linear-gradient(135deg, hsl(345, 35%, 95%), hsl(38, 40%, 93%))",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              padding: "2.5rem",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-script)",
                fontSize: "1.1rem",
                color: "var(--color-primary)",
                marginBottom: "0.5rem",
              }}
            >
              Notre adresse
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "var(--color-text)",
                marginBottom: "1rem",
              }}
            >
              Contactez-nous par email
            </h2>
            <a
              href={`mailto:${siteConfig.email}`}
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--color-primary)",
                textDecoration: "none",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              {siteConfig.email}
            </a>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--color-text-muted)",
              }}
            >
              Copiez-collez cet email dans votre client de messagerie. Nous répondons sous 48h (hors week-end).
            </p>
          </div>

          {/* Thèmes de contact */}
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.375rem",
              fontWeight: 600,
              color: "var(--color-text)",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Pour quel sujet souhaitez-vous nous écrire ?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.25rem",
              marginBottom: "3rem",
            }}
          >
            {themes.map((t, idx) => (
              <div key={idx} className="occasion-card" style={{ textAlign: "left" }}>
                <span style={{ fontSize: "1.75rem", display: "block", marginBottom: "0.6rem" }}>
                  {t.icon}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.975rem",
                    fontWeight: 600,
                    color: "var(--color-text)",
                    marginBottom: "0.35rem",
                  }}
                >
                  {t.title}
                </h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Infos pratiques */}
          <div
            style={{
              background: "var(--color-bg-warm)",
              borderRadius: "var(--radius-lg)",
              padding: "2rem",
              border: "1px solid var(--color-border-light)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--color-text)",
                marginBottom: "1rem",
              }}
            >
              Informations pratiques
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.9375rem", color: "var(--color-text-muted)" }}>
                <span style={{ color: "var(--color-primary)", flexShrink: 0 }}>⏰</span>
                <span>Délai de réponse : <strong style={{ color: "var(--color-text)" }}>48h ouvrées</strong></span>
              </li>
              <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.9375rem", color: "var(--color-text-muted)" }}>
                <span style={{ color: "var(--color-primary)", flexShrink: 0 }}>🌍</span>
                <span>Nous traitons les demandes en <strong style={{ color: "var(--color-text)" }}>français uniquement</strong></span>
              </li>
              <li style={{ display: "flex", gap: "0.75rem", fontSize: "0.9375rem", color: "var(--color-text-muted)" }}>
                <span style={{ color: "var(--color-primary)", flexShrink: 0 }}>📍</span>
                <span>Baie de Somme Shopping — Guide mode indépendant, France</span>
              </li>
            </ul>
          </div>

          {/* Liens utiles */}
          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <p style={{ color: "var(--color-text-muted)", marginBottom: "1rem", fontSize: "0.9375rem" }}>
              En attendant notre réponse, explorez nos guides :
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/blog" className="btn-primary">
                Lire le blog mode →
              </Link>
              <Link href="/a-propos" className="btn-secondary">
                En savoir plus sur nous
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
