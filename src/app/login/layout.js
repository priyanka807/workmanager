import React from 'react'

const Layout = ({children}) => {
  return (
    <div>
  <h2>this is login header</h2>
  {children}
  <h2>this is login footer</h2>
    </div>
  )
}

export default Layout