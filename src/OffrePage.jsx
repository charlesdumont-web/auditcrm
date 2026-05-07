import React from "react";
import "./App.css";
import logo from "./assets/synchro-logo-final.png";
import CheckoutForm from "./components/CheckoutForm";
import { CheckCircle2 } from "lucide-react";

const inclusions = [
  "Rencontres stratégiques pour comprendre ton entreprise",
  "Cartographie complète de tes processus de vente et de suivi client",
  "Identification des pertes de revenus liées à l'absence d'un CRM",
  "Évaluation de tes outils actuels et de leurs limites",
  "Recommandation du CRM idéal pour ton modèle d'affaires",
  "Comparatif détaillé des options avec avantages, inconvénients et coûts",
  "Plan d'intégration clé en main avec étapes concrètes",
  "Estimation du ROI anticipé et des gains de temps attendus",
  "Garantie satisfaction 100% ou remboursement",
  "Crédit applicable à 100% sur le projet d'intégration",
];

function OffrePage() {
  return (
    <>
      <header style={{ backgroundColor: "var(--primary-accent)", padding: "20px 0", textAlign: "center", boxShadow: "var(--shadow-md)" }}>
        <img src={logo} alt="Synchro IA" style={{ height: "96px", objectFit: "contain", transform: "scale(1.5) translateY(8px)" }} />
      </header>

      <div
        className="container"
        style={{ marginTop: "40px", marginBottom: "80px" }}
      >
        <header style={{ textAlign: "center", margin: "60px 0" }}>
          <span
            style={{
              background: "var(--primary-accent-light)",
              color: "var(--primary-accent-hover)",
              padding: "6px 16px",
              borderRadius: "24px",
              fontSize: "14px",
              fontWeight: "700",
              display: "inline-block",
              marginBottom: "20px",
              border: "1px solid var(--primary-accent)",
            }}
          >
            ✦ Récapitulatif de l'offre
          </span>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "800",
              letterSpacing: "-1px",
              marginBottom: "16px",
            }}
          >
            Audit CRM
          </h1>
          <p style={{ fontSize: "20px", color: "var(--text-secondary)" }}>
            Tout ce qui est inclus dans ton audit
          </p>
        </header>

        {/* Main Layout Grid */}
        <div className="main-grid">
          {/* Left Column — Inclusions Recap */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div className="card">
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "800",
                  marginBottom: "24px",
                }}
              >
                CE QUI EST INCLUS:
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {inclusions.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      color="var(--primary-accent)"
                      style={{ marginTop: "2px", flexShrink: 0 }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="/"
              style={{
                fontSize: "13px",
                color: "var(--primary-accent)",
                textDecoration: "none",
                textAlign: "center",
              }}
              onMouseOver={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              ← Retour aux détails de l'audit
            </a>
          </div>

          {/* Right Column — Checkout */}
          <div
            className="card"
            style={{
              position: "sticky",
              top: "24px",
              boxShadow: "var(--shadow-xl)",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "800",
                marginBottom: "12px",
              }}
            >
              JE VEUX OBTENIR MON AUDIT CRM
            </h2>
            <p
              style={{
                fontSize: "14px",
                marginBottom: "24px",
                color: "var(--text-secondary)",
              }}
            >
              Obtenez l'analyse complète de votre entreprise et la recommandation du CRM idéal pour seulement
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: "var(--primary-accent)",
                }}
              >
                795${" "}
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: "normal",
                    color: "var(--text-secondary)",
                  }}
                >
                  +tx
                </span>
              </span>
            </div>
            <CheckoutForm />
          </div>
        </div>

        <footer
          style={{
            marginTop: "80px",
            textAlign: "center",
            fontSize: "12px",
            color: "var(--text-secondary)",
            borderTop: "1px solid var(--border-color)",
            paddingTop: "24px",
          }}
        >
          © {new Date().getFullYear()} Synchro IA inc. — Tous droits réservés
        </footer>
      </div>
    </>
  );
}

export default OffrePage;
