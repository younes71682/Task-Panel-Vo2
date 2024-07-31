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





export const navigate = [
    { id: 1, path: '/', name: 'خانه', alt: 'home', icon: home, iconactive: home_active },
    { id: 2, path: '/calendar', name: 'تقویم', alt: 'calendar', icon: calendar, iconactive: calendar_active },
    { id: 3, path: '/analyze', name: 'آنالیز', alt: 'analyze', icon: analyze, iconactive: analyze_active },
    { id: 4, path: '/atp', name: 'ATP', alt: 'atp', icon: atp, iconactive: atp_active },
    { id: 5, path: '/management', name: 'مدیریت ورزشکاران', alt: 'management', icon: management, iconactive: management_active },
    { id: 6, path: '/repository-exercises', name: 'مخزن تمرین‌ها', alt: 'repository exercises', icon: repository_exercises, iconactive: repository_exercises_active },
    { id: 7, path: '/strategy', name: 'استراتژی', alt: 'strategy', icon: strategy, iconactive: strategy_active },
    { id: 8, path: '/settings', name: 'تنظیمات', alt: 'settings', icon: settings, iconactive: settings_active },
    { id: 9, path: '/notification', name: 'آخرین فعالیت‌ها', alt: 'notification', icon: notification, iconactive: notification_active },
]