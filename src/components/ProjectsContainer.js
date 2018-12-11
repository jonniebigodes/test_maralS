import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Project from '../components/molecules/projects/Project'

/**
 * this component was created for purposes of separation of concerns
 * as a good practice you should pick up on developing with react and other programming language
 */
const ProjectsContainer = props => (
  <StaticQuery
    query={graphql`
      query {
        allProjectsJson {
          edges {
            node {
              id
              title
              category
              description
              image {
                src
                alt
              }
              logo {
                src
                alt
              }
              website
            }
          }
        }
      }
    `}
    render={data => {
      const {
        allProjectsJson: { edges },
      } = data
      return edges.map(item => {
        return (
          <Project
            key={`project_${item.node.id}`}
            title={item.node.title}
            category={item.node.category}
            image={item.node.image}
            logo={item.node.logo}
            website={item.node.website}>
            <p>Lore ipsum....bananas</p>
          </Project>
        )
      })
    }}
  />
)

export default ProjectsContainer
