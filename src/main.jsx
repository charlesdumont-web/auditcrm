import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import OffrePage from "./OffrePage.jsx";
import SuccessPage from "./SuccessPage.jsx";

const Router = () => {
  const path = window.location.pathname;
  if (path === "/merci" || path === "/merci/") {
    return <SuccessPage />;
  }
  if (path === "/offre" || path === "/offre/") {
    return <OffrePage />;
  }
  return <App />;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
