import React from 'react'
import logo from '../assets/TP- LOGO.svg'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import home from '../assets/icon-sidebar/Home.svg'
import calendar from '../assets/icon-sidebar/calendar.svg'
import analyze from '../assets/icon-sidebar/analyze.svg'
import atp from '../assets/icon-sidebar/atp.svg'
import management from '../assets/icon-sidebar/management.svg'
import repository_exercises from '../assets/icon-sidebar/repository-exercises.svg'
import strategy from '../assets/icon-sidebar/strategy.svg'
import settings from '../assets/icon-sidebar/setting.svg'
import notification from '../assets/icon-sidebar/notification.svg'

import home_active from '../assets/icon-sidebar/icon-active/Home.svg'
import calendar_active from '../assets/icon-sidebar/icon-active/calendar.svg'
import analyze_active from '../assets/icon-sidebar/icon-active/analyze.svg'
import atp_active from '../assets/icon-sidebar//icon-active/atp.svg'
import management_active from '../assets/icon-sidebar/icon-active/management.svg'
import repository_exercises_active from '../assets/icon-sidebar/icon-active/repository-exercises.svg'
import strategy_active from '../assets/icon-sidebar/icon-active/strategy.svg'
import settings_active from '../assets/icon-sidebar/icon-active/setting.svg'
import notification_active from '../assets/icon-sidebar/icon-active/notification.svg'

const Sidebar = () => {

    const { t } = useTranslation()

    const navigate = [
        { id: 1, path: '/', name: t("panelRouteName"), alt: 'home', icon: home, iconactive: home_active },
        { id: 2, path: '/calendar', name: t("panelCalendar"), alt: 'calendar', icon: calendar, iconactive: calendar_active },
        { id: 3, path: '/analyze', name: t("panelAnalys"), alt: 'analyze', icon: analyze, iconactive: analyze_active },
        { id: 4, path: '/atp', name: 'ATP', alt: 'atp', icon: atp, iconactive: atp_active },
        { id: 5, path: '/management', name: t("panelManagement"), alt: 'management', icon: management, iconactive: management_active },
        { id: 6, path: '/repository-exercises', name: t("panelRepository-exercises"), alt: 'repository exercises', icon: repository_exercises, iconactive: repository_exercises_active },
        { id: 7, path: '/strategy', name: t("panelStrategy"), alt: 'strategy', icon: strategy, iconactive: strategy_active },
        { id: 8, path: '/settings', name: t("panelSetting"), alt: 'settings', icon: settings, iconactive: settings_active },
        { id: 9, path: '/notification', name: t("panelNotification"), alt: 'notification', icon: notification, iconactive: notification_active },
    ]
    const params = useLocation()
    return (

        <div className=' flex-col bg-[#FFFF] w-[240px] h-[98vh] rounded-tl-[24px] hidden md:block'>
            <div className='flex justify-center items-center pt-12 pb-7'>
                <img src={logo} />
            </div>

            <ul className='w-[95%]'>
                {navigate.map((i, index) => (
                    <React.Fragment key={i.id}>
                        <li className={`rounded-[12px] flex items-center h-[56px] pr-3 ${i.path === params.pathname && 'bg-[#FFE5F1]'}`}>
                            <Link to={i.path} className='flex gap-3 outline-0 w-full'>
                                <img src={i.path === params.pathname ? i.iconactive : i.icon} alt={i.alt} />
                                <h2 className={`text-sm font-bold ${i.path === params.pathname && 'text-[#FF0072]'}`}>{i.name}</h2>
                            </Link>
                        </li>
                        {index === 4 && <hr className='my-4' />}
                    </React.Fragment>
                ))}
            </ul>

        </div>
    )
}

export default Sidebar
