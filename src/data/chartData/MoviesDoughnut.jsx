import React, { useState } from 'react'
import { MovieDoughnutData } from './MovieDoughnutData'


export const MoviesDoughnut = () => {

    const [timeFrame , setTimeFrame] = useState('daily')

    const handleClick= (event)=>{
        
        setTimeFrame(event.target.value)

        console.log(timeFrame);
    }
    



    return (
        <section className=' mt-8 w-full'>
            <div className="grid md:grid-cols-2 gap-8  ">

                <div className="bg-white p-3 rounded-md   ">
                    <div className="movies-heading flex pb-4  border-b border-black/40 justify-between">
                        <h1 className='font-semibold '>Best Selling Movies </h1>
                        <select className='inline-flex  justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-1 focus:ring-inset focus:ring-bills-skyblue' onChange={handleClick} >
                            <option  className=' text-sm text-gray-700:outline-none'>Daily </option>
                            <option>Weekly </option>
                            <option>Monthly </option>
                            <option>Yearly</option>

                        </select>
                       
                    </div>

                    <MovieDoughnutData/>


                </div>
                <div className="">
                <div className="bg-white p-3 rounded-md   ">
                    <div className="movies-heading flex pb-4  border-b border-black/40 justify-between">
                        <h1 className='font-semibold '>Best Selling Movies </h1>
                        <select className='inline-flex  justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-1 focus:ring-inset focus:ring-bills-skyblue' onChange={handleClick} >
                            <option  className=' text-sm text-gray-700:outline-none'>Daily </option>
                            <option>Weekly </option>
                            <option>Monthly </option>
                            <option>Yearly</option>

                        </select>
                       
                    </div>

                    <MovieDoughnutData/>


                </div>
                </div>

            </div>
            

        </section>
    )
}
