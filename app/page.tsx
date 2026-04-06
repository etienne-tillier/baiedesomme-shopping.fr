import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { siteConfig } from "@/config/site";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Conseils Mode Femme | Guide Styling & Tenues - Baie de Somme Shopping",
  description:
    "Découvrez comment vous habiller selon l'occasion. Guides mode, conseils styling et inspirations tenues pour femmes. Trouvez votre style parfait !",
  alternates: { canonical: siteConfig.url },
};

const occasions = [
  {
    icon: "💌",
    title: "Premier rendez-vous",
    desc: "Séduire avec naturel et élégance",
  },
  {
    icon: "🥂",
    title: "Soirée entre amies",
    desc: "Briller dans la bonne humeur",
  },
  {
    icon: "💼",
    title: "Entretien d'embauche",
    desc: "Inspirer confiance et professionnalisme",
  },
  {
    icon: "💍",
    title: "Mariage",
    desc: "Tenue invitée parfaite, sans faute de goût",
  },
  {
    icon: "🌿",
    title: "Week-end détente",
    desc: "Chic et confortable à la fois",
  },
  {
    icon: "🌸",
    title: "Sortie culturelle",
    desc: "Élégance décontractée et affirmée",
  },
];

const conseils = [
  {
    icon: "🌙",
    title: "Tenues de soirée",
    desc: "Du cocktail au gala, trouvez la robe qui vous sublimera",
    href: "/blog/categorie/occasions-speciales",
  },
  {
    icon: "👔",
    title: "Look professionnel",
    desc: "S'habiller avec style sans négliger l'autorité",
    href: "/blog/categorie/conseils-styling",
  },
  {
    icon: "☀️",
    title: "Style décontracté",
    desc: "Casual chic pour les journées au quotidien",
    href: "/blog/categorie/tendances",
  },
  {
    icon: "❤️",
    title: "Tenues de rendez-vous",
    desc: "L'art de séduire avec authenticité",
    href: "/blog/categorie/occasions-speciales",
  },
];

const temoignages = [
  {
    name: "Camille B.",
    city: "Amiens",
    text: "J'étais perdue avant chaque occasion. Grâce à Baie de Somme Shopping, je me sens enfin à l'aise dans mes tenues. Mes conseils de style sont clairs et applicables !",
    initial: "C",
  },
  {
    name: "Nathalie R.",
    city: "Paris",
    text: "Un guide mode qui comprend vraiment les femmes. Pas de jugement, des conseils bienveillants et concrets. Je reviens chaque semaine pour m'inspirer.",
    initial: "N",
  },
  {
    name: "Sophie M.",
    city: "Lille",
    text: "Enfin un site qui parle de mode pour toutes les morphologies, tous les budgets. Je me suis réconciliée avec mon dressing grâce à ces articles !",
    initial: "S",
  },
];

export default async function HomePage() {
  const posts = await getPublishedBlogPosts(6, 0);

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        style={{
          position: "relative",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/hero-fashion-wardrobe.jpeg"
            alt="Dressing mode élégant — inspiration tenues femme"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center top" }}
            sizes="100vw"
          />
          <div className="gradient-hero" style={{ position: "absolute", inset: 0 }} />
        </div>

        {/* Content */}
        <div
          className="container"
          style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "5rem" }}
        >
          <div style={{ maxWidth: "680px" }}>
            {/* Eyebrow */}
            <p
              className="animate-fadeInUp"
              style={{
                fontFamily: "var(--font-script)",
                fontSize: "1.2rem",
                color: "hsl(38, 70%, 78%)",
                marginBottom: "0.75rem",
              }}
            >
              Votre guide mode personnel
            </p>

            {/* H1 */}
            <h1
              className="animate-fadeInUp delay-100"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: "1.25rem",
              }}
            >
              Trouvez la tenue parfaite{" "}
              <em style={{ fontStyle: "italic", color: "hsl(38, 70%, 78%)" }}>
                pour chaque occasion
              </em>
            </h1>

            <p
              className="animate-fadeInUp delay-200"
              style={{
                fontSize: "1.125rem",
                color: "hsla(0, 0%, 100%, 0.87)",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: "520px",
              }}
            >
              Conseils mode personnalisés, guides styling et inspirations pour révéler votre style unique — à chaque saison, chaque humeur, chaque moment de vie.
            </p>

            <div
              className="animate-fadeInUp delay-300"
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <Link href="/blog" className="btn-primary">
                Découvrir mes conseils mode
              </Link>
              <Link href="/a-propos" className="btn-secondary" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.55)" }}>
                Notre approche →
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
          className="animate-float"
        >
          <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Défiler</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "rgba(255,255,255,0.6)" }}>
            <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ===== CONSEILS MODE ===== */}
      <section className="section" style={{ background: "var(--color-bg)" }}>
        <div className="container">
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="divider-rose" />
            <p className="font-script" style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
              Notre expertise
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--color-text)",
                marginBottom: "1rem",
              }}
            >
              Des conseils mode adaptés à votre quotidien
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-muted)",
                maxWidth: "560px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Parce que chaque femme mérite de se sentir belle et confiante, quel que soit le contexte.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            {conseils.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="occasion-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "2rem 1.5rem",
                  }}
                >
                  <span style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{item.icon}</span>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "var(--color-text)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Image */}
          <div
            style={{
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              position: "relative",
              height: "380px",
            }}
          >
            <Image
              src="/images/conseils-woman-styling.jpeg"
              alt="Femme élégante recevant des conseils mode"
              fill
              style={{ objectFit: "cover" }}
              sizes="100vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, hsla(345, 30%, 20%, 0.65) 0%, transparent 60%)",
                display: "flex",
                alignItems: "center",
                padding: "3rem",
              }}
            >
              <div style={{ maxWidth: "380px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-script)",
                    fontSize: "1.75rem",
                    color: "hsl(38, 70%, 78%)",
                    marginBottom: "0.5rem",
                  }}
                >
                  &ldquo;Le style, c&apos;est une façon d&apos;être soi.&rdquo;
                </p>
                <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
                  — Baie de Somme Shopping
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OCCASIONS ===== */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="divider-rose" />
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--color-text)",
                marginBottom: "1rem",
              }}
            >
              Une tenue pour chaque moment de votre vie
            </h2>
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-muted)",
                maxWidth: "540px",
                margin: "0 auto",
              }}
            >
              De la routine quotidienne aux grandes occasions, nous avons le conseil qu&apos;il vous faut.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            {/* Image côté gauche */}
            <div
              style={{
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                position: "relative",
                height: "440px",
              }}
            >
              <Image
                src="/images/occasions-evening-dress.jpeg"
                alt="Robe de soirée élégante pour occasions spéciales"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Grille occasions */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {occasions.map((occ, idx) => (
                <div key={idx} className="occasion-card">
                  <span style={{ fontSize: "1.75rem", display: "block", marginBottom: "0.6rem" }}>
                    {occ.icon}
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
                    {occ.title}
                  </h3>
                  <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", lineHeight: 1.55 }}>
                    {occ.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TENDANCES / BLOG ===== */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "2.5rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <div className="divider-rose" style={{ margin: "0 0 0.75rem" }} />
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "0.5rem",
                }}
              >
                Les tendances mode du moment
              </h2>
              <p style={{ fontSize: "1rem", color: "var(--color-text-muted)" }}>
                Découvrez nos derniers guides et inspirations
              </p>
            </div>
            <Link href="/blog" className="btn-secondary">
              Voir tous les articles →
            </Link>
          </div>

          {/* Image tendances */}
          <div
            style={{
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              position: "relative",
              height: "260px",
              marginBottom: "2.5rem",
            }}
          >
            <Image
              src="/images/tendances-fashion-accessories.jpeg"
              alt="Accessoires de mode tendance — sacs, bijoux, chaussures"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="100vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, hsla(345, 40%, 20%, 0.6) 0%, transparent 60%)",
                display: "flex",
                alignItems: "flex-end",
                padding: "2rem 2.5rem",
              }}
            >
              <div>
                <span
                  className="badge"
                  style={{
                    background: "var(--color-primary)",
                    color: "#fff",
                    marginBottom: "0.5rem",
                  }}
                >
                  Tendances
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.25rem",
                    color: "#fff",
                    fontWeight: 600,
                  }}
                >
                  Accessoires : les indispensables de la saison
                </p>
              </div>
            </div>
          </div>

          {/* Articles blog */}
          {posts.length === 0 ? (
            <div
              style={{
                background: "var(--color-bg-warm)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "3rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-script)",
                  fontSize: "1.5rem",
                  color: "var(--color-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                ✿
              </p>
              <p style={{ color: "var(--color-text-muted)", fontSize: "1rem" }}>
                Aucun article publié pour le moment.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== TÉMOIGNAGES ===== */}
      <section className="section section-warm">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="divider-rose" />
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--color-text)",
                marginBottom: "0.75rem",
              }}
            >
              Elles ont trouvé leur style grâce à nos conseils
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2.5rem",
              alignItems: "center",
            }}
          >
            {/* Témoignages */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {temoignages.map((t, idx) => (
                <div
                  key={idx}
                  className="card"
                  style={{ padding: "1.5rem" }}
                >
                  <p className="testimonial-quote" style={{ marginBottom: "0.5rem" }}>❝</p>
                  <p
                    style={{
                      fontFamily: "var(--font-editorial)",
                      fontSize: "0.9375rem",
                      fontStyle: "italic",
                      color: "var(--color-text)",
                      lineHeight: 1.7,
                      marginBottom: "1rem",
                    }}
                  >
                    {t.text}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: "var(--color-primary)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "1rem",
                        flexShrink: 0,
                      }}
                    >
                      {t.initial}
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--color-text)", margin: 0 }}>
                        {t.name}
                      </p>
                      <p style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)", margin: 0 }}>
                        {t.city}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image témoignages */}
            <div
              style={{
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                position: "relative",
                height: "520px",
              }}
            >
              <Image
                src="/images/temoignages-happy-woman.jpeg"
                alt="Femme heureuse et confiante dans sa tenue mode"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Stat card overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  right: "1.5rem",
                  background: "white",
                  borderRadius: "var(--radius-lg)",
                  padding: "1rem 1.5rem",
                  boxShadow: "var(--shadow-card)",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "var(--color-primary)",
                    margin: 0,
                  }}
                >
                  +5 000
                </p>
                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", margin: 0 }}>
                  femmes inspirées
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section
        style={{
          background: "var(--color-primary)",
          padding: "4rem 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "1.3rem",
              color: "hsl(38, 70%, 82%)",
              marginBottom: "0.5rem",
            }}
          >
            Commencez dès aujourd&apos;hui
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "1.25rem",
            }}
          >
            Votre style, votre signature
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.83)",
              maxWidth: "480px",
              margin: "0 auto 2rem",
              lineHeight: 1.7,
            }}
          >
            Explorez nos guides, trouvez votre style et révélez la meilleure version de vous-même.
          </p>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.9rem 2.5rem",
              background: "#fff",
              color: "var(--color-primary)",
              fontWeight: 700,
              fontSize: "0.9375rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              borderRadius: "var(--radius-xl)",
              textDecoration: "none",
              transition: "all var(--transition-base)",
              boxShadow: "0 4px 20px -4px rgba(0,0,0,0.2)",
            }}
          >
            Explorer les guides mode →
          </Link>
        </div>
      </section>
    </>
  );
}
