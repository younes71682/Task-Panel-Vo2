import React from 'react'
import Dropdown from './Dropdown'
import profile from '../../assets/profile/Ellipse.png';
import settings from '../../assets/icon-sidebar/setting.svg';
import calendar from '../../assets/icon-sidebar/calendar.svg';
import Flag from '../../assets/niger.svg';
import { RiArrowDropDownLine } from "react-icons/ri";
import LanguageSwitcher from '../LanguageSwitcher';

const Header = (props) => {
    const {name} = props
    return (
        <div className='flex justify-between w-full'>
            <div className='flex gap-1 items-center'>
                <img src={profile} alt='profil' className='w-[32px] h-[32px]' />
                <h1>{name}</h1>
                <Dropdown />
            </div>

            <div className='flex items-center  gap-4 cursor-pointer'>
                <img src={settings} className='cursor-pointer w-[18px] h-[18px]' />
                <img src={calendar} className='cursor-pointer w-[18px] h-[18px]' />
                <LanguageSwitcher />
                <div className='flex items-center gap-1 justify-center w-[186px] rounded-[8px] bg-[#F0F0F0] h-full'>
                    <p className='text-xs font-bold'>9 هفته تا</p>
                    <img src={Flag} alt='flag' />
                    <p className='text-xs font-bold'>قهرمانی آسیا</p>
                    <RiArrowDropDownLine size={24} />
                </div>
            </div>
        </div>
    )
}

export default Header
