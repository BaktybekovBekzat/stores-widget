import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const WidgetDivs = document.querySelectorAll(".stores-int");

WidgetDivs.forEach((Div) => {
    const root = createRoot(Div);
    root.render(<App />);
});
