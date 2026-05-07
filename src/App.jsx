import React from "react";
import "./App.css";
import logo from "./assets/synchro-logo-final.png";
import ProgressBar from "./components/ProgressBar";
import Deliverables from "./components/Deliverables";
import Guarantees from "./components/Guarantees";
import { ArrowRight } from "lucide-react";

function App() {
  return (
    <>
      <header style={{ backgroundColor: "var(--primary-accent)", padding: "20px 0", textAlign: "center", boxShadow: "var(--shadow-md)" }}>
        <img src={logo} alt="Synchro IA" style={{ height: "96px", objectFit: "contain", transform: "scale(1.5) translateY(8px)" }} />
      </header>

      <div
        className="container"
        style={{ marginTop: "40px", marginBottom: "80px" }}
      >
        <ProgressBar />

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
            ✦ Audit d'Automatisation
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
            On analyse ton entreprise pour te recommander le bon CRM et en faire l'intégration
          </p>
        </header>

        {/* Single Column Content */}
        <div style={{ maxWidth: "720px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
          <div className="card">
            <h2
              style={{
                fontSize: "16px",
                fontWeight: "800",
                marginBottom: "24px",
              }}
            >
              VOICI EXACTEMENT CE QUE TU OBTIENS:
            </h2>
            <Deliverables />
          </div>

          <div className="card">
            <h2
              style={{
                fontSize: "16px",
                fontWeight: "800",
                marginBottom: "24px",
              }}
            >
              GARANTIES — ZÉRO RISQUE:
            </h2>
            <Guarantees />
          </div>

          {/* CTA Button */}
          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <a
              href="/offre"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "var(--primary-accent)",
                color: "white",
                padding: "18px 40px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "700",
                textDecoration: "none",
                boxShadow: "var(--shadow-md)",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "var(--primary-accent-hover)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "var(--shadow-xl)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "var(--primary-accent)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
              }}
            >
              Voir l'offre et réserver mon audit <ArrowRight size={20} />
            </a>
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

export default App;
