import React from 'react'
import Header from '../components/home/Header'
import Chrat from '../components/home/Chrat'
import { useTranslation } from 'react-i18next'
import useEvent_Fetch from '../components/api/useEvent_Fetch'
import Flag from '../assets/niger.svg'
const Home = () => {

  const list = [
    { id: 1, date: '20 فروردین', name: 'قهرمانی آسیا', flag: Flag },
    { id: 2, date: '20 فروردین', name: 'قهرمانی آسیا', flag: Flag },
    { id: 3, date: '12 اردیبهشت', name: 'قهرمانی ویژه بانوان', flag: Flag },
    { id: 4, date: '12 اردیبهشت', name: 'قهرمانی ویژه بانوان', flag: Flag },
    { id: 5, date: '22 اردیبهشت', name: 'قهرمانی بانوان', flag: Flag },
    { id: 6, date: '22 اردیبهشت', name: 'قهرمانی بانوان', flag: Flag },
    { id: 7, date: '30 خرداد', name: 'قهرمانی اسپانیا', flag: Flag },
    { id: 8, date: '30 خرداد', name: 'قهرمانی اسپانیا', flag: Flag },
    { id: 9, date: '25 خرداد', name: 'قهرمانی ویژه بانوان', flag: Flag },
    { id: 10, date: '25 خرداد', name: 'قهرمانی ویژه بانوان', flag: Flag },
    { id: 11, date: '20 مرداد', name: 'قهرمانی اروپا', flag: Flag },
    { id: 12, date: '20 مرداد', name: 'قهرمانی اروپا', flag: Flag },
  ]

  const { data_ShowList, pending_show_list } = useEvent_Fetch()
  console.log('data_ShowList', data_ShowList)

  const { t } = useTranslation()

  return (
    <div className='flex flex-col justify-around w-full '>
      <h1 className='text-2xl font-bold'>{t('panelHomeTitle')}</h1>
      <Header name={t("nameAthlete")} />
      <Chrat />

      <div className='flex flex-col gap-3'>
        <h3>{t("panelHomeTitelList")}</h3>
        <div className='flex flex-wrap justify-between h-[341px] overflow-auto '>
          {list.map((i) => {
            return (
              <div key={i.id} className='flex items-center gap-1 w-[341px] h-[56px] border-b-2 border-b-[#F0F0F0]'>
                <p className='font-bold'>{i.date}</p>
                <img src={i.flag} />
                <p className='font-bold'>{i.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
