import React from 'react'
import Chart_Fetch from '../api/Chart_Fetch'

const Chrat = () => {
  const { data_Chart } = Chart_Fetch()
  console.log('data',data_Chart)
  return (
    <div>

    </div>
  )
}

export default Chrat
