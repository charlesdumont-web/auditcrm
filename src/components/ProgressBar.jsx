import React from "react";

const ProgressBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
        margin: "32px 0 48px",
        borderBottom: "1px solid var(--border-color)",
        paddingBottom: "24px",
      }}
    >
      {/* Step 1 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "var(--secondary-accent)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          1
        </div>
        <span
          style={{
            fontSize: "12px",
            color: "var(--secondary-accent)",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
        >
          Tes infos
        </span>
      </div>

      <div
        style={{
          height: "1px",
          width: "40px",
          background: "var(--border-color)",
          marginTop: "-20px",
        }}
      ></div>

      {/* Step 2 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "var(--bg-subtle)",
            border: "1px solid var(--border-color)",
            color: "var(--text-secondary)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          2
        </div>
        <span
          style={{
            fontSize: "12px",
            color: "var(--text-secondary)",
            textTransform: "uppercase",
          }}
        >
          Paiement
        </span>
      </div>

      <div
        style={{
          height: "1px",
          width: "40px",
          background: "var(--border-color)",
          marginTop: "-20px",
        }}
      ></div>

      {/* Step 3 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "var(--bg-subtle)",
            border: "1px solid var(--border-color)",
            color: "var(--text-secondary)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          3
        </div>
        <span
          style={{
            fontSize: "12px",
            color: "var(--text-secondary)",
            textTransform: "uppercase",
          }}
        >
          Confirmation
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
