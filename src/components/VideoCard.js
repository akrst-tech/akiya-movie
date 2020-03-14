import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const VideoCardWrapper = styled.div`
  width: 100%;
  height: 50vw;
  background: white;
  margin-bottom: 4%;
  position: relative;
  .image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .hover-link {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .title {
    text-align: left;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 2px 0;
  }
  :hover {
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.2s ease;
  }
  @media screen and (min-width: 800px) {
    width: 48%;
    height: 18vw;
    max-height: 200px;
  }
`

const VideoCard = ({ video }) => {
  const { title, slug, coverImage } = video

  return (
    <VideoCardWrapper>
      <Link className="hover-link" to={`/videos/${slug}`}>
        <Img className="image" fluid={coverImage.fluid} />
        <h3 className="title">{title}</h3>
      </Link>
    </VideoCardWrapper>
  )
}

export default VideoCard
