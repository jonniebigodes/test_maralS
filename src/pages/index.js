import React from 'react'

//import Layout from '../components/layout'
import DefaultLayout from '../components/DefaultLayout'
import Organisms from '../components/Organisms'
/**
 * 
 * @param {Object} location is the object inherited from gatsby to get the location prop and pass it down to children
 * in this case the DefaultLayout 
 */
const IndexPage = ({location}) => (
  <DefaultLayout
    siteTitle={'metaTitle'}
    siteDescription={'metaDesc'}
    location={location}
    mobile={false} >
    <div>
      <h1>Hi people</h1>
      <Organisms />
    </div>
  </DefaultLayout>
)

export default IndexPage
