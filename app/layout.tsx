import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "Conseils Mode Femme | Guide Styling & Tenues - Baie de Somme Shopping",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Découvrez comment vous habiller selon l'occasion. Guides mode, conseils styling et inspirations tenues pour femmes. Trouvez votre style parfait !",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Votre Guide Mode Personnel | Baie de Somme Shopping",
    description:
      "Conseils mode personnalisés pour toutes les occasions. Inspirez-vous et trouvez votre style idéal avec nos guides styling.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Votre Guide Mode Personnel | Baie de Somme Shopping",
    description:
      "Conseils mode personnalisés pour toutes les occasions. Inspirez-vous et trouvez votre style idéal.",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          background: "var(--color-bg)",
        }}
      >
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
