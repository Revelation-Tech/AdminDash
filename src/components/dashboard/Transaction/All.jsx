import React from 'react'
import { BillChart } from '../../../data/chartData/BillsData/BillChart'
import { MovieLine2 } from '../../../data/chartData/MovieLine2'
import { BillPieChart } from '../../../data/chartData/BillsData/BillPieChart'
import { MovieDoughnutData } from '../../../data/chartData/MovieDoughnutData'
import { BillDoughnutData } from '../../../data/chartData/BillsData/BillDoughnut'

export const All = () => {
  return (
    <section>
      <div className=" grid  grid-flow-row md:grid-flow-col gap-8">
        <div className="bg-white p-4 rounded shadow">
          <h1 className='text-sm font-semibold'>Total Transaction</h1>
          <p className='text-2xl font-semibold mt-5'> &#x20A6; 300M</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h1 className='text-sm font-semibold'>Today's Transaction</h1>
          <p className='text-2xl font-semibold mt-5'> &#x20A6; 5.2M</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h1 className='text-sm font-semibold'>Yesterday's Transaction</h1>
          <p className='text-2xl font-semibold mt-5'> &#x20A6; 1.2M</p>
        </div>


      </div>

      <div className="grid grid-cols-1 md:grid-cols-8 gap-8 mt-4">

        <div className=" p-2 md:p-8 col-span-5 bg-white rounded shadow">
          <div className="flex justify-between items-center text-bills-skyblue mb-3">
            <h1 className='text-md text-bills-darkblue font-semibold'>Best Selling Service</h1>
            <select className='inline-flex  justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-1 focus:ring-inset focus:ring-bills-skyblue'  >
              <option className=' text-sm text-bills-skyblue:outline-none'>Daily </option>
              <option>Weekly </option>
              <option>Monthly </option>
              <option>Yearly</option>

            </select>

          </div>

          <p className='text-sm text-bills-lightgrey'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, consequuntur.</p>

          <BillChart />

        </div>
        <div className="p-4 col-span-5 md:col-span-3  bg-white rounded shadow">
          <h1 className='text-sm text-bills-darkblue font-semibold'>New customer VS Return Customer</h1>
          <p className='text-sm text-bills-lightgrey'>Based on Data </p>

          <div className=" mt-4">
            <BillPieChart />
          </div>
        </div>
      </div>

      <div className="grid mt-4 grid-flow-row gap-4 md:grid-flow-col">
        <div className="grid  grid-cols-2 gap-4">
          <div className="bg-white rounded shadow p-4">
           <div className="grid grid-flow-row gap-4 text-sm md:text-md">
              <div className='text-nowrap overflow-auto flex justify-between'>Refund Rate  &nbsp;&nbsp; <span className='text-[10px]'> 3hrs ago</span></div>
              <div className='text-nowrap overflow-auto  flex justify-between'>84%  &nbsp;&nbsp; <span className='text-green-500 text-[10px]'> 3hrs ago</span></div>
              

           </div>
          </div>
          <div className="bg-white rounded shadow p-4">
          <div className="grid grid-flow-row gap-4 text-sm md:text-md">
              <div className='text-nowrap overflow-auto flex justify-between'>Refund Rate  &nbsp;&nbsp; <span className='text-[10px]'> 3hrs ago</span></div>
              <div className='text-nowrap overflow-auto  flex justify-between'>84%  &nbsp;&nbsp; <span className='text-green-500 text-[10px]'> 3hrs ago</span></div>
              

           </div>
          </div>
          <div className="bg-white rounded shadow p-4">
          <div className="grid grid-flow-row gap-4 text-sm md:text-md">
              <div className='text-nowrap overflow-auto flex justify-between'>Refund Rate  &nbsp;&nbsp; <span className='text-[10px]'> 3hrs ago</span></div>
              <div className='text-nowrap overflow-auto  flex justify-between'>84%  &nbsp;&nbsp; <span className='text-green-500 text-[10px]'> 3hrs ago</span></div>
              

           </div>
          </div>
          <div className="bg-white rounded shadow p-4">
          <div className="grid grid-flow-row gap-4 text-sm md:text-md">
              <div className='text-nowrap overflow-auto flex justify-between'>Refund Rate  &nbsp;&nbsp; <span className='text-[10px]'> 3hrs ago</span></div>
              <div className='text-nowrap overflow-auto  flex justify-between'>84%  &nbsp;&nbsp; <span className='text-green-500 text-[10px]'> 3hrs ago</span></div>
              

           </div>
          </div>
        </div>
        <div className="bg-white rounded shadow p-4">
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
      <div>
        <MovieLine2 />
      </div>
    </section>
  )
}
