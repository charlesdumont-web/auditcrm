import React, { useState } from "react";
import { ArrowRight, Lock } from "lucide-react";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    tel: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const STRIPE_PAYMENT_LINK = ""; // TODO: INSERER LE NOUVEAU LIEN STRIPE A 847$
    
    if (!STRIPE_PAYMENT_LINK) {
      alert("ATTENTION : Veuillez insérer le nouveau lien Stripe à 847$ dans src/components/CheckoutForm.jsx (ligne 19) avant d'accepter les paiements.");
      return;
    }

    // Optionnel: Envoyer vers Zapier/Webhook ici avant de rediriger
    // fetch("VOTRE_WEBHOOK_ZAPIER", { method: "POST", body: JSON.stringify(formData) });

    // Redirection vers Stripe en pré-remplissant l'email
    const redirectUrl = `${STRIPE_PAYMENT_LINK}?prefilled_email=${encodeURIComponent(formData.email)}`;
    
    // Redirection immédiate vers le paiement sécurisé
    window.location.href = redirectUrl;
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div className="name-grid">
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label
            style={{
              fontSize: "13px",
              fontWeight: "500",
              color: "var(--text-secondary)",
            }}
          >
            Prénom
          </label>
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
            placeholder="Jean"
            className="form-input"
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label
            style={{
              fontSize: "13px",
              fontWeight: "500",
              color: "var(--text-secondary)",
            }}
          >
            Nom
          </label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            placeholder="Tremblay"
            className="form-input"
          />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <label
          style={{
            fontSize: "13px",
            fontWeight: "500",
            color: "var(--text-secondary)",
          }}
        >
          Ton courriel
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="prenom@entreprise.com"
          className="form-input"
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <label
          style={{
            fontSize: "13px",
            fontWeight: "500",
            color: "var(--text-secondary)",
          }}
        >
          Téléphone
        </label>
        <input
          type="tel"
          name="tel"
          value={formData.tel}
          onChange={handleChange}
          required
          placeholder="514-555-1234"
          className="form-input"
        />
      </div>

      <button
        type="submit"
        style={{
          marginTop: "8px",
          background: "var(--primary-accent)",
          color: "white",
          padding: "16px",
          borderRadius: "8px",
          border: "none",
          fontSize: "16px",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          boxShadow: "0 4px 14px 0 rgba(0, 85, 255, 0.39)",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.background = "var(--primary-accent-hover)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.background = "var(--primary-accent)")
        }
      >
        Obtenir mon Audit CRM <ArrowRight size={18} />
      </button>

      <p
        style={{
          fontSize: "11px",
          textAlign: "center",
          color: "var(--text-secondary)",
          marginTop: "8px",
        }}
      >
        Tu seras redirigé vers Stripe pour payer en sécurité.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "6px",
          marginTop: "16px",
          opacity: 0.6,
        }}
      >
        <Lock size={14} />
        <span style={{ fontSize: "12px" }}>Paiement sécurisé via Stripe</span>
      </div>
    </form>
  );
};

export default CheckoutForm;
