import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";

function AnalyticsDeferred() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);
  if (!ready) return null;
  return <Analytics />;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <AnalyticsDeferred />
  </React.StrictMode>,
);
