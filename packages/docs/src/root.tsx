import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "@magnolui/react/src/styles/tokens.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
