import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Logo from "../components/layout/Logo"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Logo />
      <h1>Design and code React apps</h1>
      <p>
        Don’t skip design. Learn design and code by building real apps with
        React and Swift. Complete courses about the best tools.
      </p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  )
}

export default IndexPage
