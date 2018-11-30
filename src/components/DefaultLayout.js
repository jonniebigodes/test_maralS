import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import AnotherComponent from '../components/AnotherComponent';
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
    const { siteTitle, siteDescription, location } = this.props
    console.log('The browser actual width is equal to : ' + width + ' px')

    return (
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
            <meta name="description" content={siteDescription} />
            <title>{siteTitle}</title>
          </Helmet>
          <Header />
          <main>
            {isMobile && location.pathname === '/' ? (
              <AnotherComponent {...this.props}/>
            ) : (
              this.props.children
            )}
          </main>
          <Footer />
        </div>
      </div>
    )
  }
}
DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
  mobile: PropTypes.bool,
}
DefaultLayout.defaultProps = {
  siteTitle: undefined,
  siteDescription: undefined,
  mobile: false,
}
export default DefaultLayout
