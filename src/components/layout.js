import React from "react"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"
import TopSection from "../components/TopSection"

// import NavBar from "./NavBar"

import "./layout.css"

const Wrapper = styled.div`
  min-height: 100vh;
  width: 90vw;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

const Layout = ({ children }) => {
  return (
    <div>
      <TopSection />
      <Wrapper>
        <Header />
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </div>
  )
}

export default Layout
