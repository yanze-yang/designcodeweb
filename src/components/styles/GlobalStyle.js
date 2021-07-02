import { createGlobalStyle } from "styled-components"
import { themes } from "./ColorStyles"

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${themes.light.backgroundColor};
    h1: ${themes.light.text1};
    @media (prefers-color-scheme: dark) {
        background: ${themes.dark.backgroundColor};
        h1: ${themes.dark.text1};
    }
  }
`
