import React from 'react'

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const { date, ctl } = payload[0].payload;
        return (
            <div className='flex flex-col justify-around items-end bg-[#F5F5F5] shadow-[0_0px_20px_rgb(0,0,0,0.1)] rounded-[12px] w-[220px] h-[50px] px-2'>
                <p className="text-sm">{`Date: ${date}`}</p>
                <p className="text-sm">{`Plannned Fitness(CLT): ${ctl}`}</p>
            </div>
        );
    }

    return null;
};

export default CustomTooltip; 
