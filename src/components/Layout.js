import React from "react"
import styled from "styled-components"

import MobileMenu from "./MobileMenu"
import Footer from "./Footer"
import TopSection from "./TopSection"
import DesktopMenu from "./DesktopMenu"

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

const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
`

const VideoSection = styled.div`
  width: 100%;
  @media screen and (min-width: 700px) {
    width: 80%;
  }
`

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let topSection

  if (location.pathname === rootPath) {
    topSection = <TopSection />
  } else {
    topSection = null
  }
  return (
    <div>
      <div>{topSection}</div>
      <MobileMenu />
      <Wrapper>
        <BottomSection>
          <DesktopMenu />
          <VideoSection>{children}</VideoSection>
        </BottomSection>
        <Footer />
      </Wrapper>
    </div>
  )
}

export default Layout
