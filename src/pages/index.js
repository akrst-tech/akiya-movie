import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { IoIosArrowDown } from "react-icons/io"
// import Img from "gatsby-image"

const HomeSection = styled.div`
  min-height: 100vh;
  width: 100vw;
  /* max-width: 1000px; */
  margin: 0 auto;
  justify-content: center;
  display: flex;
  flex-direction: column;
  /* background-color: yellow; */
  position: relative;
`

const HomeTitle = styled.h1`
  width: 100%;
  text-align: center;
  position: absolute;
  top: 25%;
  /* left: 50%;
  transform: translateX(-50%); */
  font-size: 1rem;
  letter-spacing: 10px;
  @media screen and (min-width: 700px) {
    top: 20%;
    font-size: 1.5rem;
    letter-spacing: 15px;
  }
`

const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 90%;
  font-size: 0.8rem;
  align-items: center;
  span {
    margin: 5px;
  }
`

const AkiyaPortrait = styled.img`
  width: 80%;
  max-width: 500px;
  /* height: 100%; */
  margin: 0 auto;
`

const IndexPage = ({ data }) => (
  <div>
    <HomeSection>
      <HomeTitle>AKIYA MOVIE</HomeTitle>
      <Scroll>
        Scroll
        <span>
          <IoIosArrowDown />
        </span>
      </Scroll>
      <AkiyaPortrait src={data.akiyaImage.image.fluid.src} />
    </HomeSection>
    <Layout>
      <SEO title="Home" />
      <p>Video Gallery</p>
    </Layout>
  </div>
)

export const query = graphql`
  query MyQuery {
    videoGallery: contentfulVideoGallery {
      title
      videoCards {
        title
      }
    }
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

export default IndexPage

// const BlogIndex = ({ data, location }) => {
//   const siteTitle = data.site.siteMetadata.title
//   const posts = data.allMarkdownRemark.edges

//   return (
//     <Layout location={location} title={siteTitle}>
//       <SEO title="All posts" />
//       <Bio />
//       {posts.map(({ node }) => {
//         const title = node.frontmatter.title || node.fields.slug
//         return (
//           <article key={node.fields.slug}>
//             <header>
//               <h3
//                 style={{
//                   marginBottom: rhythm(1 / 4),
//                 }}
//               >
//                 <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
//                   {title}
//                 </Link>
//               </h3>
//               <small>{node.frontmatter.date}</small>
//             </header>
//             <section>
//               <p
//                 dangerouslySetInnerHTML={{
//                   __html: node.frontmatter.description || node.excerpt,
//                 }}
//               />
//             </section>
//           </article>
//         )
//       })}
//     </Layout>
//   )
// }

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `
