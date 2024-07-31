import React from 'react'

const CustomTooltip = (props) => {
    const { ctl } = props
    console.log('props', ctl)
    return (
        <div className='flex flex-col  bg-[#F5F5F5] shadow-[0_0px_20px_rgb(0,0,0,0.1)]'>
            <div className='flex gap-1 '>
                <p>Date:</p>
                <p>31/7/2024</p>
            </div>
            <div className='flex gap-1'>
                <p></p>
                <p>Plannned Fitness (CLT):</p>
            </div>
        </div>
    )
}

export default CustomTooltip
