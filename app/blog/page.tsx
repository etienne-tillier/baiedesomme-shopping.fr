import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { siteConfig } from "@/config/site";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Blog Mode & Conseils Styling | Baie de Somme Shopping",
  description:
    "Tous nos articles mode, guides styling et inspirations tenues. Tenues par occasion, morphologie, tendances, accessoires — des conseils pour toutes les femmes.",
  alternates: { canonical: `${siteConfig.url}/blog` },
};

const categories = [
  { label: "Tous les articles", slug: null },
  { label: "Occasions spéciales", slug: "occasions-speciales" },
  { label: "Conseils styling", slug: "conseils-styling" },
  { label: "Tendances", slug: "tendances" },
  { label: "Accessoires", slug: "accessoires" },
  { label: "Morphologie", slug: "morphologie" },
];

export default async function BlogPage() {
  const posts = await getPublishedBlogPosts(24, 0);

  return (
    <>
      {/* Hero blog */}
      <section
        style={{
          position: "relative",
          height: "320px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/images/blog-hero-fashion-magazine.jpeg"
            alt="Magazine de mode — blog conseils styling"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="100vw"
            priority
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, hsla(345, 40%, 15%, 0.55), hsla(345, 40%, 10%, 0.75))",
            }}
          />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "1.1rem",
              color: "hsl(38, 70%, 78%)",
              display: "block",
              marginBottom: "0.5rem",
            }}
          >
            Nos inspirations
          </span>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "0.75rem",
            }}
          >
            Guides mode & conseils styling
          </h1>
          <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1rem", maxWidth: "500px" }}>
            Des articles pratiques pour vous aider à vous habiller avec confiance, au quotidien.
          </p>
        </div>
      </section>

      {/* Catégories */}
      <section
        style={{
          background: "var(--color-bg-card)",
          borderBottom: "1px solid var(--color-border-light)",
          padding: "1.25rem 0",
          position: "sticky",
          top: "72px",
          zIndex: 50,
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <Link
              key={cat.slug ?? "all"}
              href={cat.slug ? `/blog/categorie/${cat.slug}` : "/blog"}
              className={`category-pill ${cat.slug === null ? "active" : ""}`}
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="section">
        <div className="container">
          {posts.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "5rem 2rem",
                background: "var(--color-bg-warm)",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--color-border)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-script)",
                  fontSize: "2rem",
                  color: "var(--color-primary-light)",
                  marginBottom: "1rem",
                }}
              >
                ✿
              </p>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.25rem",
                  color: "var(--color-text)",
                  marginBottom: "0.5rem",
                }}
              >
                Aucun article publié pour le moment.
              </p>
              <p style={{ color: "var(--color-text-muted)", fontSize: "0.9375rem" }}>
                Revenez bientôt pour découvrir nos premiers guides mode !
              </p>
            </div>
          ) : (
            <>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-text-muted)",
                  marginBottom: "2rem",
                }}
              >
                {posts.length} article{posts.length > 1 ? "s" : ""} publié{posts.length > 1 ? "s" : ""}
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "1.75rem",
                }}
              >
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
