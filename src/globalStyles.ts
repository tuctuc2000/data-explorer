
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; font-family: system-ui, sans-serif; }
  body { background: ${({ theme }) => theme.colors.background}; color: ${({ theme }) => theme.colors.text}; }
  a { color: ${({ theme }) => theme.colors.primary}; text-decoration: none; }
  button { font: inherit; }
`;
