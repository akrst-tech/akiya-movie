import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import VideoCard from "./VideoCard"

const VideoCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
  @media screen and (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

const getVideos = graphql`
  query {
    videoGallery: contentfulVideoGallery(title: { eq: "Video Gallery" }) {
      title
      videoCards {
        __typename
        ... on ContentfulVideo {
          id
          title
          slug
          embedCode {
            embedCode
          }
          coverImage {
            id
            title
            fluid(maxWidth: 400, quality: 100) {
              src
            }
          }
        }
      }
    }
  }
`

// "__typename" is a key to access a content type "Video"

const VideoCards = () => {
  const response = useStaticQuery(getVideos)
  // console.log(response)

  const videos = response.videoGallery.videoCards
  // console.log(videos)

  const videosNum = videos.length

  return (
    // <VideoCardsContainer>
    //   {videos.map((video, index) => (
    //     <div key={index}>
    //       {video.__typename === "ContentfulVideo" && (
    //         <VideoCard key={video.id} video={video} />
    //       )}
    //     </div>
    //   ))}
    //   {videosNum % 2 === 0 ? null : <div />}
    // </VideoCardsContainer>
    <VideoCardsContainer>
      {videos.map((video, index) => (
        <VideoCard key={video.id} video={video} />
      ))}
      {videosNum % 2 === 0 ? null : <div />}
    </VideoCardsContainer>
  )
}

export default VideoCards
