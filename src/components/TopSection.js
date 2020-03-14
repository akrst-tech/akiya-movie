import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { IoIosArrowDown } from "react-icons/io"

const StyledTopSection = styled.div`
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

const HomeTitle = styled.h1`
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

const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  /* position: absolute;
  top: 90%; */
  font-size: 0.8rem;
  align-items: center;
  span {
    margin: 5px;
  }
  margin-top: auto;
  margin-bottom: 10px;
`

const AkiyaPortrait = styled.img`
  width: 80%;
  max-width: 500px;
  /* position: absolute;
  top: 50%;
  left: 50%; */
  /* right: 50%; */
  /* transform: translateX(-50%);
  transform: translateY(-50%); */
  margin: auto;
`

const getPortrait = graphql`
  query {
    akiyaImage: contentfulHomeImage {
      image {
        title
        fluid(maxWidth: 600) {
          sizes
          src
          srcSet
        }
      }
    }
  }
`

const TopSection = () => {
  const response = useStaticQuery(getPortrait)

  return (
    <StyledTopSection>
      <HomeTitle>AKIYA MOVIE</HomeTitle>
      <AkiyaPortrait src={response.akiyaImage.image.fluid.src} />
      <Scroll>
        Scroll
        <span>
          <IoIosArrowDown />
        </span>
      </Scroll>
    </StyledTopSection>
  )
}

export default TopSection
