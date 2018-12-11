import React from 'react'

const AnotherComponent = props => {
  const { siteDescription, siteTitle, location } = props
  const { hostname, port } = location
  return (
    <div>
      <p>
        this is another component child with props inherited from a parent.{` `}
      </p>
      <p>
        As you can see the siteDescription=>{siteDescription} prop was inherited
        from the parent.
      </p>
      <p>
        As you can see the siteDescription=>{siteDescription} prop was inherited
        from the parent.
      </p>
      <p>As does siteTitle={siteTitle}.</p>
      <p>As does the origin property coming from the parent component above.</p>
      <p>
        Namely the hostname=>{hostname} and port=>{port} coming from the
        property location.
      </p>
    </div>
  )
}
export default AnotherComponent
