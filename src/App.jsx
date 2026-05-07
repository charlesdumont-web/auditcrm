import React from "react";
import "./App.css";
import logo from "./assets/synchro-logo-final.png";
import ProgressBar from "./components/ProgressBar";
import Deliverables from "./components/Deliverables";
import Guarantees from "./components/Guarantees";
import CheckoutForm from "./components/CheckoutForm";

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
            Audit CRM par l'IA
          </h1>
          <p style={{ fontSize: "20px", color: "var(--text-secondary)" }}>
            Analyse complète de votre CRM et de ses opportunités d'automatisation
          </p>
        </header>

        {/* Main Layout Grid */}
        <div className="main-grid">
          {/* Left Column (Content) */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
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
          </div>

          {/* Right Column (Checkout/Form) */}
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
              Obtenez l'analyse complète de votre CRM et un plan d'automatisation sur mesure pour seulement
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
                847${" "}
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

export default App;
