import React from 'react'
import logo from '../assets/TP- LOGO.svg'
import { navigate } from './Navigate'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {

    const params = useLocation()
    return (

        <div className='bg-[#FFFF] w-[240px] h-[98vh] rounded-tl-[24px]'>
            <div className='flex justify-center py-4'>
                <img src={logo} />
            </div>

            <div>
                {navigate.map((i, index) => {
                    return (
                        <ul className='w-[95%]'>
                            <li className={`rounded-[12px] flex items-center h-[56px] pr-3 ${i.path === params.pathname && 'bg-[#FFE5F1]'}`}>
                                <Link to={i.path} className='flex gap-3 outline-0 w-full'>
                                    <img src={i.path === params.pathname ? i.iconactive : i.icon} alt={i.alt} />
                                    <h2 className={`text-sm font-bold ${i.path === params.pathname && 'text-[#FF0072]'}`}>{i.name}</h2>
                                </Link>
                            </li>
                            {index === 4 && <hr className='my-4' />}
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar
