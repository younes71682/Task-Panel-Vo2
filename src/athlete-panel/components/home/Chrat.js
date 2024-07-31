import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import useChartFetch from '../api/useChart_Fetch';
import { Legend } from 'chart.js';


const Chrat = () => {

  const { data_Chart, pending_show_Chart } = useChartFetch()

  return (

    <div className='flex flex-col gap-5 pt-6 pr-4  rounded-[15px] bg-[#f8f9f9] h-[191px] w-[626px]'>
      <div className='flex text-left justify-end items-center gap-1'>
        <div className=''>
          <p className='text-base leading-4'>Weekes until</p>
          <p className='text-base text-[#38709a] leading-4'>Kom</p>
        </div>
        <p className='text-4xl'>2</p>
      </div>

      <ResponsiveContainer width="100%" height="100%" >
        <LineChart width={300} height={100} data={data_Chart?.data}
          margin={{
            top: 20,
            bottom: 10,
            right: 0,
            left: 0,
          }}
        >
  <XAxis dataKey="workoutDay" tick={{ fontSize: 12 }} />
      <YAxis tick={{ fontSize: 12 }} />
      <Tooltip />
      <Legend />
      <Line 
        type="monotone" 
        dataKey="tssActual" 
        stroke="#8884d8" 
        strokeDasharray="5 5" 
        dot={{ r: 4 }} 
        activeDot={{ r: 8 }} 
        strokeWidth={2} 
      />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}
export default Chrat

