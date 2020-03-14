import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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

const BottomSection = styled.div`
  display: flex;
  flex-direction: row;
`

const DesktopMenuSection = styled.div`
  width: 0%;
  display: none;
  @media screen and (min-width: 700px) {
    display: block;
    width: 20%;
  }
  ul {
    margin: 50px 0;
  }
  li {
    margin: 10px 0;
    list-style: none;
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    :hover {
      opacity: 60%;
    }
  }
`

const VideoSection = styled.div`
  width: 100%;
  @media screen and (min-width: 700px) {
    width: 80%;
  }
`

const Layout = ({ children }) => {
  return (
    <div>
      <TopSection />
      <Header />
      <Wrapper>
        <BottomSection>
          <DesktopMenuSection>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/">
                <li>Contact</li>
              </Link>
              <a href="https://www.instagram.com/akiya0104/" target="_blank">
                <li>Instagram</li>
              </a>
              <a
                href="https://www.youtube.com/channel/UCXeGg0Pv1hAkAUYrhyf0aVg"
                target="_blank"
              >
                <li>YouTube</li>
              </a>
            </ul>
          </DesktopMenuSection>
          <VideoSection>{children}</VideoSection>
        </BottomSection>
        <Footer />
      </Wrapper>
    </div>
  )
}

export default Layout
