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

// const data = [
//   { name: 'فروردین', Sales: 80, },
//   { name: 'اردیبهشت', Sales: 85, },
//   { name: 'خرداد', Sales: 50, },
//   { name: 'تیر', Sales: 55, },
//   { name: 'مرداد', Sales: 50, },
//   { name: 'شهریور', Sales: 48, },
//   { name: 'مهر', Sales: 42, },
//   { name: 'آبان', Sales: 48, },
//   { name: 'آذر', Sales: 40, },
//   { name: 'دی', Sales: 60, },
//   { name: 'بهمن', Sales: 20, },
//   { name: 'اسفند', Sales: 25, },

// ];

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
{/* 
          <XAxis dataKey="workoutDay" tickFormatter={(tick) => new Date(tick).toLocaleDateString()} />
          <YAxis /> */}
          <Tooltip />
          <Line type="monotone" dataKey="tssActual" stroke="#38709a" strokeWidth={2} activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="tssPlanned" stroke="#ff7300" strokeWidth={2} />     */}
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}
export default Chrat

