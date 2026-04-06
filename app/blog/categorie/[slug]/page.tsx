import Link from "next/link";
import type { Metadata } from "next";
import { getBlogPostsByCategory, getCategoryInfo } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import { siteConfig } from "@/config/site";

export const revalidate = 21600;

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryInfo(slug);
  const label = category?.label || slug;

  return {
    title: `${label} — Conseils Mode | Baie de Somme Shopping`,
    description: `Tous nos articles mode sur la thématique "${label}". Conseils styling, guides et inspirations tenues.`,
    alternates: { canonical: `${siteConfig.url}/blog/categorie/${slug}` },
  };
}

export default async function BlogCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const [posts, category] = await Promise.all([
    getBlogPostsByCategory(slug, 24, 0),
    getCategoryInfo(slug),
  ]);

  const label = category?.label || slug;

  return (
    <>
      {/* Header catégorie */}
      <section
        style={{
          background: "var(--color-bg-section)",
          borderBottom: "1px solid var(--color-border-light)",
          padding: "3rem 0 2.5rem",
        }}
      >
        <div className="container">
          {/* Fil d'ariane */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.25rem",
              fontSize: "0.8125rem",
              color: "var(--color-text-light)",
            }}
          >
            <Link href="/" style={{ color: "var(--color-text-light)", textDecoration: "none" }}>
              Accueil
            </Link>
            <span>›</span>
            <Link href="/blog" style={{ color: "var(--color-text-light)", textDecoration: "none" }}>
              Blog
            </Link>
            <span>›</span>
            <span style={{ color: "var(--color-primary)" }}>{label}</span>
          </div>

          <div className="divider-rose" style={{ margin: "0 0 1rem" }} />

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 700,
              color: "var(--color-text)",
              marginBottom: "0.75rem",
            }}
          >
            {label}
          </h1>

          {category?.description && (
            <p
              style={{
                fontSize: "1.0625rem",
                color: "var(--color-text-muted)",
                maxWidth: "580px",
                lineHeight: 1.7,
              }}
            >
              {category.description}
            </p>
          )}
        </div>
      </section>

      {/* Articles */}
      <section className="section">
        <div className="container">
          {/* Navigation catégories */}
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              marginBottom: "2.5rem",
            }}
          >
            <Link href="/blog" className="category-pill">
              Tous les articles
            </Link>
            {[
              { label: "Occasions spéciales", slug: "occasions-speciales" },
              { label: "Conseils styling", slug: "conseils-styling" },
              { label: "Tendances", slug: "tendances" },
              { label: "Accessoires", slug: "accessoires" },
              { label: "Morphologie", slug: "morphologie" },
            ].map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/categorie/${cat.slug}`}
                className={`category-pill${cat.slug === slug ? " active" : ""}`}
              >
                {cat.label}
              </Link>
            ))}
          </div>

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
              <p style={{ color: "var(--color-text-muted)", marginBottom: "1.5rem" }}>
                Explorez nos autres thématiques mode.
              </p>
              <Link href="/blog" className="btn-primary">
                ← Voir tous les articles
              </Link>
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
                {posts.length} article{posts.length > 1 ? "s" : ""} dans cette catégorie
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
