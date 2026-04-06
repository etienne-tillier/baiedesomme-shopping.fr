import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Baie de Somme Shopping",
  description:
    "Politique de confidentialité de Baie de Somme Shopping : données collectées, droits des utilisateurs, cookies et contact DPO.",
  alternates: { canonical: `${siteConfig.url}/politique-confidentialite` },
  robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialitePage() {
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
          <span style={{ color: "var(--color-primary)" }}>Politique de confidentialité</span>
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
          Politique de confidentialité
        </h1>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "3rem", fontSize: "0.9rem" }}>
          Dernière mise à jour : janvier 2025 — Conforme au Règlement Général sur la Protection des Données (RGPD).
        </p>

        <div className="prose" style={{ maxWidth: "none" }}>
          <h2>1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données personnelles collectées sur le site <strong>{siteConfig.domain}</strong> est :
          </p>
          <ul>
            <li><strong>Dénomination :</strong> Baie de Somme Shopping</li>
            <li><strong>Email (DPO) :</strong> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
          </ul>

          <h2>2. Données collectées</h2>
          <p>
            Dans le cadre de votre navigation sur notre site, nous pouvons collecter les données suivantes :
          </p>
          <h3>2.1 Données de navigation (automatiques)</h3>
          <ul>
            <li>Adresse IP (anonymisée)</li>
            <li>Type et version de navigateur</li>
            <li>Pages visitées, durée de visite</li>
            <li>Provenance (moteur de recherche, lien direct, réseaux sociaux)</li>
          </ul>
          <h3>2.2 Données transmises volontairement</h3>
          <p>
            Lorsque vous nous contactez par email, vous nous transmettez votre adresse email et les informations que vous souhaitez partager. Ces données sont utilisées uniquement pour répondre à votre demande.
          </p>

          <h2>3. Finalités du traitement</h2>
          <p>Vos données sont utilisées pour :</p>
          <ul>
            <li>Améliorer le contenu et l&apos;ergonomie du site</li>
            <li>Répondre à vos demandes de contact</li>
            <li>Mesurer l&apos;audience et analyser les statistiques de visite</li>
            <li>Assurer la sécurité et le bon fonctionnement du site</li>
          </ul>

          <h2>4. Base légale du traitement</h2>
          <ul>
            <li><strong>Intérêt légitime</strong> : analyse d&apos;audience, amélioration du service</li>
            <li><strong>Consentement</strong> : pour les cookies analytiques non essentiels</li>
            <li><strong>Exécution d&apos;une mesure précontractuelle</strong> : pour les demandes de contact</li>
          </ul>

          <h2>5. Cookies</h2>
          <p>
            Notre site utilise des cookies pour ameliorer votre expérience de navigation. Deux catégories de cookies sont utilisées :
          </p>
          <h3>5.1 Cookies essentiels</h3>
          <p>Nécessaires au fonctionnement du site. Ils ne peuvent pas être désactivés.</p>

          <h3>5.2 Cookies analytiques (avec consentement)</h3>
          <p>
            Utilisés pour mesurer l&apos;audience (ex : Google Analytics en mode anonymisé). Ces cookies requièrent votre consentement et peuvent être refusés via les paramètres de votre navigateur.
          </p>

          <h2>6. Durée de conservation</h2>
          <ul>
            <li><strong>Données de navigation :</strong> 13 mois maximum</li>
            <li><strong>Emails de contact :</strong> 3 ans à compter de la dernière interaction</li>
          </ul>

          <h2>7. Vos droits</h2>
          <p>
            Conformément au RGPD, vous bénéficiez des droits suivants concernant vos données personnelles :
          </p>
          <ul>
            <li><strong>Droit d&apos;accès</strong> : obtenir une copie de vos données</li>
            <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
            <li><strong>Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
            <li><strong>Droit à la portabilité</strong> : récupérer vos données dans un format lisible</li>
            <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement de vos données</li>
            <li><strong>Droit à la limitation</strong> : limiter l&apos;utilisation de vos données</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez notre DPO à l&apos;adresse :{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
          <p>
            Vous pouvez également introduire une réclamation auprès de la <strong>CNIL</strong> (Commission Nationale de l&apos;Informatique et des Libertés) sur le site{" "}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener">www.cnil.fr</a>.
          </p>

          <h2>8. Partage des données</h2>
          <p>
            Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées avec :
          </p>
          <ul>
            <li><strong>Vercel</strong> (hébergement) dans le cadre de la fourniture du service</li>
            <li><strong>Prestataires d&apos;analyse</strong> (Google Analytics) avec anonymisation IP</li>
          </ul>

          <h2>9. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, destruction ou divulgation.
          </p>

          <h2>10. Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité :{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>

          <div
            style={{
              marginTop: "2.5rem",
              padding: "1.5rem",
              background: "var(--color-bg-warm)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border)",
            }}
          >
            <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", margin: 0 }}>
              Voir également :{" "}
              <Link href="/mentions-legales" style={{ color: "var(--color-primary)" }}>
                Mentions légales
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
