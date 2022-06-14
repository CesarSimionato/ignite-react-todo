import React from "react"
import ReactDOM from "react-dom/client"

import { ThemeProvider } from "styled-components"

import THEME from "./theme"

import App from "./App"

import "./styles/global.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
