import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions légales | Baie de Somme Shopping",
  description:
    "Mentions légales de Baie de Somme Shopping : éditeur, hébergeur, propriété intellectuelle et conditions d'utilisation du site.",
  alternates: { canonical: `${siteConfig.url}/mentions-legales` },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "760px" }}>
        {/* Fil d'ariane */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "2rem",
            fontSize: "0.8125rem",
            color: "var(--color-text-light)",
          }}
        >
          <Link href="/" style={{ color: "var(--color-text-light)", textDecoration: "none" }}>Accueil</Link>
          <span>›</span>
          <span style={{ color: "var(--color-primary)" }}>Mentions légales</span>
        </div>

        <div className="divider-rose" style={{ margin: "0 0 1.5rem" }} />
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: "var(--color-text)",
            marginBottom: "0.5rem",
          }}
        >
          Mentions légales
        </h1>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "3rem", fontSize: "0.9rem" }}>
          Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique.
        </p>

        <div
          className="prose"
          style={{ maxWidth: "none" }}
        >
          <h2>1. Éditeur du site</h2>
          <p>
            Le site <strong>{siteConfig.domain}</strong> est édité par :
          </p>
          <ul>
            <li><strong>Nom du site :</strong> Baie de Somme Shopping</li>
            <li><strong>Forme :</strong> Site de contenu indépendant — personne physique</li>
            <li><strong>Email de contact :</strong> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            <li><strong>Directeur de la publication :</strong> Marie-Claire Lefevre</li>
          </ul>

          <h2>2. Hébergeur</h2>
          <p>
            Ce site est hébergé par :
          </p>
          <ul>
            <li><strong>Société :</strong> Vercel Inc.</li>
            <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
            <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener">vercel.com</a></li>
          </ul>

          <h2>3. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels) est la propriété exclusive de <strong>Baie de Somme Shopping</strong>, sauf mentions contraires.
          </p>
          <p>
            Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l&apos;accord écrit préalable de l&apos;éditeur. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
          </p>

          <h2>4. Liens hypertextes</h2>
          <p>
            Le site <strong>{siteConfig.domain}</strong> peut contenir des liens vers d&apos;autres sites internet ou d&apos;autres ressources disponibles sur Internet. L&apos;éditeur ne peut exercer aucun contrôle sur les sites en relation avec son site internet. Il n&apos;est pas responsable des contenus publiés sur ces sites tiers.
          </p>

          <h2>5. Contenu du site</h2>
          <p>
            Les informations publiées sur ce site ont un caractère purement informatif et ne constituent pas des conseils professionnels. Baie de Somme Shopping s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées, mais ne peut garantir l&apos;exhaustivité, l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition.
          </p>

          <h2>6. Données personnelles</h2>
          <p>
            Pour toute information relative au traitement de vos données personnelles, veuillez consulter notre{" "}
            <Link href="/politique-confidentialite">politique de confidentialité</Link>.
          </p>

          <h2>7. Cookies</h2>
          <p>
            Ce site est susceptible d&apos;utiliser des cookies à des fins de mesure d&apos;audience et d&apos;amélioration des services. Vous pouvez configurer votre navigateur pour refuser les cookies.
          </p>

          <h2>8. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>

          <h2>9. Contact</h2>
          <p>
            Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter à l&apos;adresse :{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
