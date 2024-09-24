import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Documents } from "./Documents.tsx";
import { store } from "./app/store.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Documents />
    </Provider>
  </StrictMode>
);
