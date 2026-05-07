import React from "react";
import logo from "./assets/synchro-logo-final.png";
import { CheckCircle, Calendar, ArrowRight } from "lucide-react";
import "./App.css";

const SuccessPage = () => {
  return (
    <div style={{ backgroundColor: "var(--bg-subtle)", minHeight: "100vh", paddingBottom: "80px" }}>
      <header style={{ backgroundColor: "var(--primary-accent)", padding: "20px 0", textAlign: "center", boxShadow: "var(--shadow-md)" }}>
        <img src={logo} alt="Synchro IA" style={{ height: "96px", objectFit: "contain", transform: "scale(1.5) translateY(8px)" }} />
      </header>

      <div className="container" style={{ marginTop: "60px", maxWidth: "800px" }}>
        <div className="card" style={{ textAlign: "center", padding: "60px 40px" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
            <CheckCircle size={64} color="var(--primary-accent)" />
          </div>
          <h1 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "16px", color: "var(--text-primary)" }}>
            Félicitations ! Ton paiement est confirmé.
          </h1>
          <p style={{ fontSize: "18px", color: "var(--text-secondary)", marginBottom: "40px", maxWidth: "600px", margin: "0 auto 40px auto" }}>
            Bienvenue dans l'Audit CRM par l'IA. Ton équipe et toi êtes sur le point de transformer votre gestion de la relation client et de maximiser vos revenus.
          </p>

          <div style={{ backgroundColor: "var(--primary-accent-light)", padding: "32px", borderRadius: "12px", border: "1px solid rgba(0, 85, 255, 0.2)", marginBottom: "40px", textAlign: "left" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "16px", color: "var(--primary-accent-hover)" }}>
              ÉTAPE SUIVANTE : RÉSERVE TA PREMIÈRE RENCONTRE
            </h2>
            <p style={{ fontSize: "15px", color: "var(--text-secondary)", marginBottom: "24px" }}>
              Pour démarrer l'audit, nous devons planifier notre appel de lancement. Clique sur le bouton ci-dessous pour choisir un bloc de 30 minutes dans mon calendrier.
            </p>
            <a
              href="https://calendly.com/charles-dumont-synchroia/appel-de-lancement-audit-sia"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                backgroundColor: "var(--primary-accent)",
                color: "white",
                padding: "16px 32px",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "16px",
                textDecoration: "none",
                boxShadow: "0 4px 14px 0 rgba(0, 85, 255, 0.39)",
                transition: "all 0.2s",
                width: "100%",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "var(--primary-accent-hover)")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "var(--primary-accent)")}
            >
              <Calendar size={20} />
              Réserver mon Appel de Lancement (30 min) <ArrowRight size={18} />
            </a>
          </div>

          <div style={{ textAlign: "left" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "800", marginBottom: "16px" }}>Ce qui va suivre ensuite :</h3>
            <ul style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.8", paddingLeft: "20px" }}>
              <li>Tu recevras un courriel de confirmation avec ta facture d'ici quelques minutes.</li>
              <li>Tu recevras également accès à la formation "Vision de l'IA" par courriel.</li>
              <li>L'Agent Auditeur IA sera configuré pour ton entreprise sous peu.</li>
            </ul>
          </div>
        </div>

        <footer style={{ marginTop: "40px", textAlign: "center", fontSize: "12px", color: "var(--text-secondary)" }}>
          © {new Date().getFullYear()} Synchro IA inc. — Tous droits réservés
        </footer>
      </div>
    </div>
  );
};

export default SuccessPage;
