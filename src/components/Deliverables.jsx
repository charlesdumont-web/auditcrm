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
            LIVRABLE 1: ANALYSE DE TES BESOINS D'AFFAIRES
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px", color: "var(--text-secondary)" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px" }}>
              <CheckCircle2 size={16} color="var(--primary-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
              <span><strong>Rencontres stratégiques</strong> avec nos ingénieurs pour comprendre ton entreprise.</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px" }}>
              <CheckCircle2 size={16} color="var(--primary-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
              <span><strong>Cartographie complète</strong> de tes processus de vente, de suivi client et de prospection.</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px" }}>
              <CheckCircle2 size={16} color="var(--primary-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
              <span>Identification des <strong>pertes de revenus</strong> causées par l'absence d'un CRM structuré.</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px" }}>
              <CheckCircle2 size={16} color="var(--primary-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
              <span>Évaluation de tes outils actuels et de leurs <strong>limites</strong>.</span>
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
            LIVRABLE 2: RECOMMANDATION CRM + PLAN D'INTÉGRATION
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px", color: "var(--text-secondary)" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px" }}>
              <CheckCircle2 size={16} color="var(--primary-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
              <span><strong>Recommandation du CRM idéal</strong> pour ton modèle d'affaires et ton budget.</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px" }}>
              <CheckCircle2 size={16} color="var(--primary-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
              <span><strong>Comparatif détaillé</strong> des options avec avantages, inconvénients et coûts.</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px" }}>
              <CheckCircle2 size={16} color="var(--primary-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
              <span>Plan d'intégration clé en main avec <strong>étapes concrètes</strong> de déploiement.</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px" }}>
              <CheckCircle2 size={16} color="var(--primary-accent)" style={{ marginTop: "3px", flexShrink: 0 }} />
              <span>Estimation du <strong>ROI anticipé</strong> et des gains de temps attendus.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliverables;
