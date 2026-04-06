import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { MarkdownLink } from "@/components/MarkdownLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getBlogPostBySlug } from "@/lib/blog";
import { injectDofollowMarker } from "@/lib/dofollow";
import { siteConfig } from "@/config/site";

export const revalidate = 21600;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  const normalizeLocale = (value: string) => value.toLowerCase().split("-")[0];
  const defaultLocale = normalizeLocale(post.default_locale || "fr");
  const languages: Record<string, string> = {
    [defaultLocale]: `${siteConfig.url}/blog/${post.slug}`,
  };

  try {
    const translationsRaw = post.translations;
    const translations =
      typeof translationsRaw === "string"
        ? JSON.parse(translationsRaw)
        : (translationsRaw || {});

    if (translations && typeof translations === "object") {
      Object.entries(translations).forEach(([dbLocale, translation]) => {
        if (!translation || typeof translation !== "object") return;
        const translatedSlug = (translation as { slug?: unknown }).slug;
        if (typeof translatedSlug !== "string" || !translatedSlug) return;
        languages[normalizeLocale(dbLocale)] = `${siteConfig.url}/blog/${translatedSlug}`;
      });
    }
  } catch {
    // noop
  }

  languages["x-default"] = languages[defaultLocale] || `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: post.seo_title || post.h1,
    description: post.meta_description,
    alternates: {
      canonical: `${siteConfig.url}/blog/${slug}`,
      languages,
    },
    openGraph: {
      title: post.seo_title || post.h1,
      description: post.meta_description,
      type: "article",
      publishedTime: post.published_at,
      ...(post.cover?.file_url && { images: [{ url: post.cover.file_url }] }),
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) return notFound();

  // Traduction
  let displayH1 = post.h1;
  let displayBody = post.body_md;
  if (post.slug !== slug && post.translations) {
    for (const val of Object.values(post.translations)) {
      if ((val as { slug?: string }).slug === slug) {
        displayH1 = (val as { h1?: string }).h1 || displayH1;
        displayBody = (val as { body_md?: string }).body_md || displayBody;
        break;
      }
    }
  }

  const bodyMd = injectDofollowMarker(displayBody || "");

  const formattedDate = post.published_at
    ? new Date(post.published_at).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const category = post.categories?.[0];

  return (
    <article>
      {/* Hero article */}
      <div
        style={{
          background: "var(--color-bg-section)",
          borderBottom: "1px solid var(--color-border-light)",
          padding: "3rem 0 2rem",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          {/* Fil d'ariane */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1.5rem",
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
            {category && (
              <>
                <span>›</span>
                <Link
                  href={`/blog/categorie/${category.slug}`}
                  style={{ color: "var(--color-primary)", textDecoration: "none" }}
                >
                  {category.label}
                </Link>
              </>
            )}
          </div>

          {/* Catégorie */}
          {category && (
            <Link
              href={`/blog/categorie/${category.slug}`}
              style={{ textDecoration: "none" }}
            >
              <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>
                {category.label}
              </span>
            </Link>
          )}

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.875rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "var(--color-text)",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            {displayH1 || post.seo_title || post.slug}
          </h1>

          {post.meta_description && (
            <p
              style={{
                fontFamily: "var(--font-editorial)",
                fontSize: "1.0625rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}
            >
              {post.meta_description}
            </p>
          )}

          {/* Meta ligne */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            {formattedDate && (
              <time
                dateTime={post.published_at}
                style={{ fontSize: "0.875rem", color: "var(--color-text-light)" }}
              >
                {formattedDate}
              </time>
            )}
            {post.reading_time && (
              <span style={{ fontSize: "0.875rem", color: "var(--color-text-light)" }}>
                · {post.reading_time} min de lecture
              </span>
            )}
            {/* Language switcher */}
            <LanguageSwitcher post={post} currentSlug={slug} />
          </div>
        </div>
      </div>

      {/* Cover image */}
      {post.cover?.file_url && (
        <div
          style={{
            position: "relative",
            width: "100%",
            maxHeight: "520px",
            aspectRatio: "16/9",
            overflow: "hidden",
          }}
        >
          <Image
            src={post.cover.file_url}
            alt={post.cover.alt || displayH1 || post.slug}
            width={1200}
            height={630}
            priority
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="container" style={{ maxWidth: "800px", padding: "3rem 1.5rem" }}>
        <div className="prose">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{ a: MarkdownLink }}
          >
            {bodyMd}
          </ReactMarkdown>
        </div>

        {/* FAQs */}
        {post.faqs && post.faqs.length > 0 && (
          <div
            style={{
              marginTop: "3rem",
              padding: "2rem",
              background: "var(--color-bg-section)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border-light)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.375rem",
                fontWeight: 600,
                marginBottom: "1.5rem",
                color: "var(--color-text)",
              }}
            >
              Questions fréquentes
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {post.faqs.map((faq, idx) => (
                <div key={idx}>
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                      color: "var(--color-primary)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {faq.question}
                  </p>
                  <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, fontSize: "0.9375rem" }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Author */}
        {post.author && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--color-border)",
            }}
          >
            {post.author.avatar_url && (
              <Image
                src={post.author.avatar_url}
                alt={post.author.name}
                width={64}
                height={64}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
            )}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  color: "var(--color-text)",
                  marginBottom: "0.25rem",
                }}
              >
                {post.author.name}
              </p>
              {post.author.bio && (
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-text-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {post.author.bio}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Back link */}
        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--color-border-light)" }}>
          <Link href="/blog" className="btn-secondary">
            ← Retour au blog
          </Link>
        </div>
      </div>
    </article>
  );
}
