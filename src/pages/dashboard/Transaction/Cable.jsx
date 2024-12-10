import React from 'react'
import Index from './molecules'
import { MoviesDoughnut } from '../../../data/chartData/MoviesDoughnut'
import { MovieDoughnutData } from '../../../data/chartData/MovieDoughnutData'
import { BillDoughnutData } from '../../../data/chartData/BillsData/BillDoughnut'
import { MovieLine2 } from '../../../data/chartData/MovieLine2'

const Cable = () => {
  return (
   <section>
    <div className="">

    <Index/>
    </div>
    <div className="">
        <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-4 rounded shadow">
            <div className="movies-heading flex pb-4  border-b border-black/40 justify-between">
                        <h1 className='font-semibold '>Popular Billers</h1>
                        <select className='inline-flex  justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-1 focus:ring-inset focus:ring-bills-skyblue' >
                            <option  className=' text-sm text-gray-700:outline-none'>Daily </option>
                            <option>Weekly </option>
                            <option>Monthly </option>
                            <option>Yearly</option>

                        </select>
                       
                </div>
                <MovieDoughnutData/>
            </div>
            <div className="bg-white rounded p-4 shadow ">
            <div className="movies-heading flex pb-4  border-b border-black/40 justify-between">
                        <h1 className='font-semibold '>Transaction Success Rate </h1>
                        <select className='inline-flex  justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-1 focus:ring-inset focus:ring-bills-skyblue'  >
                            <option  className=' text-sm text-gray-700:outline-none'>Daily </option>
                            <option>Weekly </option>
                            <option>Monthly </option>
                            <option>Yearly</option>

                        </select>
                       
                    </div>
                    <BillDoughnutData/>

            </div>
        </div>
    </div>
    <div>
        <MovieLine2 />
    </div>

   </section>
  )
}

export default Cable