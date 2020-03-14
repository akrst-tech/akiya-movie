import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { IoIosMenu } from "react-icons/io"

const StyledMobileMenu = styled.header`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
`

const StyledMenuIcon = styled(IoIosMenu)`
  font-size: 2rem;
`

const Header = () => (
  <StyledMobileMenu>
    <StyledMenuIcon />
  </StyledMobileMenu>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
