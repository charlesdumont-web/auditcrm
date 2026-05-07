import React from "react";

const Guarantees = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginTop: "16px",
      }}
    >
      {/* Guarantee 1 */}
      <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
        <div
          style={{
            minWidth: "28px",
            height: "28px",
            borderRadius: "50%",
            background: "var(--secondary-accent-light)",
            color: "var(--secondary-accent)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "14px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          1
        </div>
        <div>
          <h3
            style={{
              fontSize: "13px",
              fontWeight: "800",
              marginBottom: "4px",
              letterSpacing: "0.5px",
            }}
          >
            GARANTIE #1: SATISFACTION 100%
          </h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            Si on n'a pas su comprendre ton entreprise, comprendre tes processus ou les outils que tu utilises, on te rembourse. Pas de question, pas de justification.
          </p>
        </div>
      </div>

      {/* Guarantee 2 */}
      <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
        <div
          style={{
            minWidth: "28px",
            height: "28px",
            borderRadius: "50%",
            background: "var(--secondary-accent-light)",
            color: "var(--secondary-accent)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "14px",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          2
        </div>
        <div>
          <h3
            style={{
              fontSize: "13px",
              fontWeight: "800",
              marginBottom: "4px",
              letterSpacing: "0.5px",
            }}
          >
            GARANTIE #2: CRÉDIT SUR IMPLÉMENTATION
          </h3>
          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            Tu décides de continuer avec nous pour l'intégration de ton CRM ? Le montant de l'audit est crédité à 100% sur le projet d'intégration. Tu n'as aucune obligation de travailler avec nous pour la suite, mais c'est l'occasion parfaite de partir sur de bonnes bases sans risque.
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "16px",
          fontStyle: "italic",
          fontSize: "13px",
          color: "var(--text-secondary)",
          textAlign: "center",
          padding: "16px",
          borderTop: "1px dashed var(--border-color)",
        }}
      >
        "Notre succès est directement lié au tien : si cet audit ne t'aide pas concrètement à sauver un temps précieux ou à générer de nouveaux revenus, on te rembourse jusqu'au dernier sou."
      </div>
    </div>
  );
};

export default Guarantees;
