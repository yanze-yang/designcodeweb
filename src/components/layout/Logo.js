import React from "react"
import { Link } from "gatsby"

export default function Logo() {
  return (
    <Link to="/">
      <img src="/images/logos/logo.svg" alt="logo" />
    </Link>
  )
}
