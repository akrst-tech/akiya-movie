import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.div`
  min-height: 72px;
  width: 100vw;
  /* max-width: 1000px; */
  margin: 0 auto;
  /* background-color: yellow; */
  /* position: relative; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  width: 100%;
  text-align: left;
  margin-left: 10vw;
  /* position: absolute;
  top: 25%; */
  /* left: 50%;
  transform: translateX(-50%); */
  font-size: 1rem;
  letter-spacing: 4px;

  /* margin-top: 15vh; */
  /* margin-bottom: -50px; */
  z-index: 10;
  @media screen and (min-width: 700px) {
    display: none;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <Title>
        <Link to="/">AKIYA MOVIE</Link>
      </Title>
    </StyledHeader>
  )
}

export default Header
