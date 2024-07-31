import React from 'react'
import Header from '../components/home/Header'
 import Chrat from '../components/home/Chrat'

const Home = () => {
  return (
    <div className='flex flex-col bg-red-600 w-full'>
        <h1 className='text-2xl font-bold'>ورزشکاران من</h1>
      <Header/>
      <Chrat/>
    </div>
  )
}

export default Home
