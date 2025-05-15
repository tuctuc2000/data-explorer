// src/main.tsx
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyle } from "./globalStyles";
import { DataProvider } from "./context/DataContext";

const rootEl = document.getElementById("root")!;

function Root() {
  // Initialize theme mode from localStorage (default to light)
  const [mode, setMode] = useState<"light" | "dark">(
    () => (localStorage.getItem("theme") as "light" | "dark") || "light"
  );

  // Persist mode changes to localStorage
  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  // Choose the appropriate theme object
  const theme = mode === "light" ? lightTheme : darkTheme;

  // Toggle function to flip between light and dark
  const toggleTheme = () => setMode((m) => (m === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DataProvider>
        <App themeMode={mode} toggleTheme={toggleTheme} />
      </DataProvider>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

);
