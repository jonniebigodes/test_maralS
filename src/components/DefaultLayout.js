import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import ProjectsContainer from '../components/ProjectsContainer'
import { StaticQuery, graphql } from 'gatsby'

/**
 * a little change from your code, taking advantage of the gatsby graphql that returns the website
 * metadata, based on the information parsed from the gatsby-config.js file
 * also the react framework methods componentDidMount and componentWillUnmount keep the guard check
 * to avoid rendering issues, due to the fact that window is not defined, as gatsby works on server side
 * and you don't have access to some apis.
 */
export class DefaultLayout extends Component {
  state = {
    width: 601, // or your default width here
  }

  /** */
  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.handleWindowSizeChange() // Set width
      window.addEventListener('resize', this.handleWindowSizeChange)
    }
  }
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleWindowSizeChange)
    }
  }
  handleWindowSizeChange = () => {
    this.setState({
      width: window.innerWidth,
    })
  }
  render() {
    const { width } = this.state
    const isMobile = width <= 600
    const { location } = this.props
    console.log('The browser actual width is equal to : ' + width + ' px')
    return (
      <StaticQuery
        query={graphql`
          query SiteInfoQuery {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `}
        render={data => (
          <div className="wrapper">
            <div className="wrapper__top">
              <Helmet>
                <html lang="fr" />
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE-edge,chrome=1" />
                <meta
                  name="viewport"
                  content="width=device-width,initial-scale=1"
                />
                <link rel="icon" type="image/png" href="/favicon.png" />
                <meta
                  name="description"
                  content={data.site.siteMetadata.description}
                />
                <title>{data.site.siteMetadata.title}</title>
              </Helmet>
              <Header />
              <main>
                {isMobile && location.pathname === '/' ? (
                  <ProjectsContainer {...this.props} />
                ) : (
                  this.props.children
                )}
              </main>
              <Footer />
            </div>
          </div>
        )}
      />
    )
  }
}
DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  mobile: PropTypes.bool,
}
DefaultLayout.defaultProps = {
  mobile: false,
}
export default DefaultLayout
