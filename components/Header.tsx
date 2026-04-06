"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        background: "var(--color-bg-card)",
        borderBottom: "1px solid var(--color-border-light)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--color-primary)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            Baie de Somme
          </span>
          <span
            style={{
              fontFamily: "var(--font-script)",
              fontSize: "0.95rem",
              color: "var(--color-accent-dark)",
              lineHeight: 1.1,
            }}
          >
            Shopping
          </span>
        </Link>

        {/* Navigation Desktop */}
        <nav
          aria-label="Navigation principale"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
          className="hidden md:flex"
        >
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="header-link"
              style={{ padding: "0.5rem 0.875rem" }}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: "1rem" }}>
          <Link href="/blog" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.8rem" }}>
            Mes conseils mode →
          </Link>
        </div>

        {/* Burger Mobile */}
        <button
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "var(--color-text)",
              transition: "all 0.3s",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "var(--color-text)",
              transition: "all 0.3s",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "var(--color-text)",
              transition: "all 0.3s",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div
          style={{
            background: "var(--color-bg-card)",
            borderTop: "1px solid var(--color-border-light)",
            padding: "1rem 1.5rem",
          }}
          className="md:hidden"
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="header-link"
                style={{ padding: "0.75rem 0", display: "block", borderBottom: "1px solid var(--color-border-light)" }}
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/blog"
              className="btn-primary"
              style={{ marginTop: "1rem", justifyContent: "center" }}
              onClick={() => setMenuOpen(false)}
            >
              Mes conseils mode →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
