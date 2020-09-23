import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledDesktopMenu = styled.div`
  width: 0%;
  display: none;
  @media screen and (min-width: 700px) {
    display: block;
    width: 20%;
  }
  h2 {
    margin: 0 0 30px 0;
    font-size: 0.9rem;
    letter-spacing: 2px;
  }
  ul {
    margin: 0;
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

const DesktopMenu = () => (
  <StyledDesktopMenu>
    <h2>
      <Link to="/">AKIYA MOVIE</Link>
    </h2>
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
      <a
        href="https://www.instagram.com/akiya0104/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li>Instagram</li>
      </a>
      <a
        href="https://www.youtube.com/channel/UCXeGg0Pv1hAkAUYrhyf0aVg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <li>YouTube</li>
      </a>
    </ul>
  </StyledDesktopMenu>
)

export default DesktopMenu
