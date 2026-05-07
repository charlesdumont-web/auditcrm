import React from "react";
import { Calendar, FileText, CheckCircle2 } from "lucide-react";

const Deliverables = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Session 1 */}
      <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
        <div
          style={{
            background: "var(--secondary-accent-light)",
            padding: "12px",
            borderRadius: "8px",
            color: "var(--secondary-accent)",
          }}
        >
          <Calendar size={24} />
        </div>
        <div>
          <h3
            style={{
              fontSize: "14px",
              fontWeight: "800",
              marginBottom: "4px",
              letterSpacing: "0.5px",
            }}
          >
            LIVRABLE 1: ANALYSE COMPLÈTE DE VOTRE CRM
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px", color: "var(--text-secondary)" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px" }}>
              <CheckCircle2 size={16} color="var(--primary-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
              <span><strong>Rencontres stratégiques</strong> avec nos ingénieurs IA.</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px" }}>
              <CheckCircle2 size={16} color="var(--primary-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
              <span><strong>Analyse approfondie</strong> de votre pipeline, vos contacts et vos automatisations actuelles.</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px" }}>
              <CheckCircle2 size={16} color="var(--primary-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
              <span>Cartographie des <strong>opportunités d'automatisation par l'IA</strong> dans votre CRM.</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px" }}>
              <CheckCircle2 size={16} color="var(--primary-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
              <span>Identification des <strong>fuites de revenus</strong> et des suivis manqués.</span>
            </div>
          </div>
        </div>
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--border-color)",
          margin: "4px 0",
        }}
      />

      {/* Session 2 */}
      <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
        <div
          style={{
            background: "var(--secondary-accent-light)",
            padding: "12px",
            borderRadius: "8px",
            color: "var(--secondary-accent)",
          }}
        >
          <FileText size={24} />
        </div>
        <div>
          <h3
            style={{
              fontSize: "14px",
              fontWeight: "800",
              marginBottom: "4px",
              letterSpacing: "0.5px",
            }}
          >
            LIVRABLE 2: PLAN D'OPTIMISATION CRM + IA
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px", color: "var(--text-secondary)" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px" }}>
              <CheckCircle2 size={16} color="var(--primary-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
              <span>Un rapport ciblé sur l'<strong>optimisation de votre processus de vente</strong>.</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px" }}>
              <CheckCircle2 size={16} color="var(--primary-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
              <span><strong>Architecture technique</strong> proposée pour intégrer l'IA à votre CRM.</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px" }}>
              <CheckCircle2 size={16} color="var(--primary-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
              <span>Mise en évidence des <strong>gains de revenus et de temps</strong> potentiels.</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px" }}>
              <CheckCircle2 size={16} color="var(--primary-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
              <span>Roadmap claire de déploiement et <strong>ROI anticipé</strong>.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliverables;
