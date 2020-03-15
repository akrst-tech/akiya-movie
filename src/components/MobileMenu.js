import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"

import { IoIosMenu } from "react-icons/io"

const StyledMenuIcon = styled(IoIosMenu)`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
  font-size: 2rem;
  :hover {
    cursor: pointer;
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`

const OverlayMobileMenu = styled.header`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  opacity: 0.5;
  /* display: flex; */
  display: none;
  justify-content: center;
  transition: all 0.5 ease;
  &.showMenu {
    display: flex;
    opacity: 1;
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`

const NavMenu = styled.ul`
  margin: auto;
`

const MenuItem = styled.li`
  font-size: 1.5rem;
  margin: 30px auto;
  list-style: none;
  text-align: center;
  letter-spacing: 2px;
  :hover {
    cursor: pointer;
  }
`

const MobileMenu = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  const navState = isOpen ? "showMenu" : ""

  return (
    <div>
      <StyledMenuIcon onClick={toggleNav} className={navState} />
      <OverlayMobileMenu className={navState}>
        <NavMenu>
          <MenuItem onClick={toggleNav}>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem onClick={toggleNav}>
            <Link to="/contact">Contact</Link>
          </MenuItem>
          <MenuItem onClick={toggleNav}>
            <a
              href="https://www.instagram.com/akiya0104/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </MenuItem>
          <MenuItem onClick={toggleNav}>
            <a
              href="https://www.youtube.com/channel/UCXeGg0Pv1hAkAUYrhyf0aVg"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </MenuItem>
        </NavMenu>
      </OverlayMobileMenu>
    </div>
  )
}

MobileMenu.propTypes = {
  siteTitle: PropTypes.string,
}

MobileMenu.defaultProps = {
  siteTitle: ``,
}

export default MobileMenu
