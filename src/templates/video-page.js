import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 50px 0;
  .type {
    color: grey;
    letter-spacing: 2px;
    font-size: 0.8rem;
  }
  .title {
    margin-bottom: 10px;
    font-weight: 400;
    letter-spacing: 1px;
  }
`

const IframeContainer = styled.div`
  padding-bottom: 56.25%;
  position: relative;
  display: block;
  width: 100%;
  > iframe {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`

const Credits = styled.div`
  margin: 50px 0;
  width: 100%;
  color: black;
  opacity: 0.5;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.8em;
  letter-spacing: 0px;
  font-size: 1.6vh;
  font-weight: 300;
  white-space: pre-wrap;
`

const VideoPageTemplate = ({ data, location }) => {
  const {
    title,
    embedCode: { embedCode },
    credits: { credits },
  } = data.video

  return (
    <Layout location={location}>
      <Wrapper>
        <h3 className="title">{title}</h3>
        <IframeContainer dangerouslySetInnerHTML={{ __html: embedCode }} />
        <Credits dangerouslySetInnerHTML={{ __html: credits }} />
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    video: contentfulVideo(slug: { eq: $slug }) {
      title
      embedCode {
        embedCode
      }
      credits {
        credits
      }
    }
  }
`

export default VideoPageTemplate

// const embed = data.video.videoEmbedCode.json

// const options = {
//   renderNode: {
//     [INLINES.TEXT]: embed => (
//       <div dangerouslySetInnerHTML={{ __html: embed }} />
//     ),
//   },
// }
