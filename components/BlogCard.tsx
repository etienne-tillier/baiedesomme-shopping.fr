import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = post.published_at
    ? new Date(post.published_at).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const category = post.categories?.[0];

  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <article className="card" style={{ height: "100%" }}>
        {/* Cover image */}
        {post.cover?.file_url ? (
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "60%",
              overflow: "hidden",
            }}
          >
            <Image
              src={post.cover.file_url}
              alt={post.cover.alt || post.h1 || post.seo_title || post.slug}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                objectFit: "cover",
                transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              className="blog-card-img"
            />
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              paddingBottom: "60%",
              background: "linear-gradient(135deg, hsl(345, 30%, 90%), hsl(28, 30%, 88%))",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-script)",
                fontSize: "2.5rem",
                color: "var(--color-primary)",
                opacity: 0.4,
              }}
            >
              ✿
            </div>
          </div>
        )}

        {/* Content */}
        <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
          {category && (
            <span
              className="badge"
              style={{ marginBottom: "0.75rem", display: "inline-block" }}
            >
              {category.label}
            </span>
          )}

          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.0625rem",
              fontWeight: 600,
              lineHeight: 1.3,
              color: "var(--color-text)",
              margin: "0 0 0.6rem",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {post.h1 || post.seo_title || post.slug}
          </h3>

          {(post.meta_description || post.excerpt) && (
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--color-text-muted)",
                lineHeight: 1.65,
                margin: "0 0 1rem",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {post.meta_description || post.excerpt}
            </p>
          )}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid var(--color-border-light)",
              paddingTop: "0.875rem",
              marginTop: "0.5rem",
            }}
          >
            {formattedDate && (
              <time
                dateTime={post.published_at}
                style={{ fontSize: "0.8125rem", color: "var(--color-text-light)" }}
              >
                {formattedDate}
              </time>
            )}
            <span
              style={{
                fontSize: "0.8125rem",
                color: "var(--color-primary)",
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              Lire l&apos;article →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
