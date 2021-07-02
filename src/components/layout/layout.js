import React from "react"
import "./layout.css"
import { GlobalStyle } from "../styles/GlobalStyle"

function Layout({ children }) {
  return (
    <>
      {/*  Place GlobalStyle at the top of React tree */}
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

export default Layout
