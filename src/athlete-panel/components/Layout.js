import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div className='flex pt-[2vh]'>
      <Sidebar/>
      {children}
    </div>
  )
}

export default Layout
