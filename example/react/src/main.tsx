import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SwitchPage from "./Switch.tsx";

createRoot(document.getElementById("root")!).render(<SwitchPage />);
