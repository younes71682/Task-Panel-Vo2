import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <div className='flex ml-10 gap-10 w-[994px] pt-[2vh]'>
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout
