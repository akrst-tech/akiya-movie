import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.div`
  min-height: 100vh;
  width: 100vw;
  /* max-width: 1000px; */
  margin: 0 auto;
  justify-content: center;
  display: flex;
  flex-direction: column;
  /* background-color: yellow; */
  /* position: relative; */
`

const Title = styled.h1`
  width: 100%;
  text-align: center;
  /* position: absolute;
  top: 25%; */
  /* left: 50%;
  transform: translateX(-50%); */
  font-size: 1rem;
  letter-spacing: 10px;
  margin-top: 15vh;
  /* margin-top: auto; */
  margin-bottom: -50px;
  z-index: 10;
  @media screen and (min-width: 700px) {
    /* top: 20%; */
    font-size: 1.5rem;
    letter-spacing: 15px;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <Title>AKIYA MOVIE</Title>
    </StyledHeader>
  )
}

export default TopSection
