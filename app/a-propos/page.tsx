import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "À propos — Notre histoire | Baie de Somme Shopping",
  description:
    "Découvrez l'histoire de Baie de Somme Shopping, votre guide de conseils mode bienveillant. Notre mission : aider toutes les femmes à trouver leur style.",
  alternates: { canonical: `${siteConfig.url}/a-propos` },
};

const valeurs = [
  {
    icon: "🌸",
    title: "Bienveillance",
    desc: "Nous croyons que chaque femme est belle à sa manière. Nos conseils sont toujours inclusifs, positifs et sans jugement.",
  },
  {
    icon: "✨",
    title: "Praticité",
    desc: "Pas de théorie abstraite — des conseils concrets que vous pouvez appliquer immédiatement dans votre quotidien.",
  },
  {
    icon: "💡",
    title: "Accessibilité",
    desc: "La mode pour toutes, quel que soit le budget. Nous valorisons la créativité et le bon sens plutôt que les dépenses excessives.",
  },
  {
    icon: "🎯",
    title: "Pertinence",
    desc: "Des contenus ancrés dans la réalité : météo, occasions spécifiques, morphologies variées, garde-robes réelles.",
  },
];

const stylistes = [
  {
    name: "Marie-Claire Lefevre",
    role: "Fondatrice & Styliste conseil",
    desc: "Passionnée de mode depuis l'enfance, Marie-Claire a passé 12 ans dans l'industrie de la mode avant de créer Baie de Somme Shopping. Sa mission : démocratiser les conseils styling de qualité.",
    initial: "M",
  },
  {
    name: "Isabelle Morin",
    role: "Experte morphologie & silhouette",
    desc: "Formée à l'Institut Français de la Mode, Isabelle est spécialisée dans l'art de valoriser toutes les silhouettes. Elle croit fermement que chaque corps mérite de se sentir beau.",
    initial: "I",
  },
  {
    name: "Chloé Beaumont",
    role: "Rédactrice mode & tendances",
    desc: "Journaliste mode depuis 8 ans, Chloé scrute les défilés et les rues pour dénicher les tendances les plus portables. Son credo : être à la mode sans se ruiner.",
    initial: "C",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          height: "420px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/about-hero-fashion-consultant.jpeg"
            alt="Consultante mode — équipe Baie de Somme Shopping"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            sizes="100vw"
            priority
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, hsla(345, 40%, 15%, 0.7) 0%, hsla(345, 30%, 10%, 0.35) 70%)",
            }}
          />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "1.2rem",
              color: "hsl(38, 70%, 78%)",
              marginBottom: "0.5rem",
            }}
          >
            Notre histoire
          </p>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.15,
              maxWidth: "600px",
            }}
          >
            La mode bienveillante, notre raison d&apos;être
          </h1>
        </div>
      </section>

      {/* Histoire & Mission */}
      <section className="section">
        <div className="container" style={{ maxWidth: "860px" }}>
          <div className="divider-rose" />
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              fontWeight: 700,
              color: "var(--color-text)",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Pourquoi Baie de Somme Shopping ?
          </h2>

          <div
            style={{
              fontFamily: "var(--font-editorial)",
              fontSize: "1.0625rem",
              color: "var(--color-text-muted)",
              lineHeight: 1.85,
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
          >
            <p>
              Baie de Somme Shopping est né d&apos;un constat simple : trop de femmes se sentent perdues face à leur dressing, ne savent pas quoi porter pour telle occasion, et ressentent un malaise devant les magazines de mode jugés inaccessibles ou déconnectés de leur réalité.
            </p>
            <p>
              Fondé en 2021 par Marie-Claire Lefevre, notre site s&apos;est donné une mission claire : <strong style={{ color: "var(--color-text)", fontFamily: "var(--font-body)", fontWeight: 700 }}>être la meilleure amie mode de chaque femme</strong> — celle qui connaît votre style, comprend vos contraintes et vous donne des conseils honnêtes, pratiques et bienveillants.
            </p>
            <p>
              Inspiré par la beauté sereine de la Baie de Somme — ses ciels changeants, ses lumières douces, ses saisons marquées — notre approche de la mode est celle de l&apos;élégance naturelle : s&apos;habiller en accord avec qui l&apos;on est, l&apos;endroit où l&apos;on va, le moment de vie que l&apos;on traverse.
            </p>
            <p>
              Aujourd&apos;hui, nous aidons plus de 5 000 femmes chaque mois à trouver leur style, à construire une garde-robe cohérente et à aborder chaque occasion avec confiance.
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section section-warm">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="divider-rose" />
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
                fontWeight: 700,
                color: "var(--color-text)",
              }}
            >
              Nos valeurs
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {valeurs.map((v, idx) => (
              <div
                key={idx}
                className="card"
                style={{ padding: "2rem 1.5rem", textAlign: "center" }}
              >
                <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "1rem" }}>
                  {v.icon}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--color-text)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.7 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="divider-rose" />
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
                fontWeight: 700,
                color: "var(--color-text)",
              }}
            >
              Notre équipe de stylistes
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {stylistes.map((s, idx) => (
              <div
                key={idx}
                className="card"
                style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      flexShrink: 0,
                    }}
                  >
                    {s.initial}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 600,
                        fontSize: "1rem",
                        color: "var(--color-text)",
                        margin: 0,
                      }}
                    >
                      {s.name}
                    </p>
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--color-primary)",
                        margin: 0,
                        fontWeight: 500,
                      }}
                    >
                      {s.role}
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "var(--color-primary)",
          padding: "3.5rem 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            Prête à trouver votre style ?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.83)",
              fontSize: "1rem",
              marginBottom: "1.75rem",
              maxWidth: "400px",
              margin: "0 auto 1.75rem",
            }}
          >
            Parcourez nos guides et conseils pour révéler la meilleure version de vous-même.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.875rem 2rem",
                background: "#fff",
                color: "var(--color-primary)",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                borderRadius: "var(--radius-xl)",
                textDecoration: "none",
              }}
            >
              Lire les guides mode →
            </Link>
            <Link href="/contact" className="btn-secondary" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.55)" }}>
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
