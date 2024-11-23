import React from 'react'
import Index from './molecules'
import AirtimeHorizontalData from '../../../data/chartData/BillsData/AirtimeHorizontalData'
import { MovieLine2 } from '../../../data/chartData/MovieLine2'

export const Airtime = () => {
  return (
    <section>
        <Index/>

        <div className="grid mt-4 gap-8 md:grid-flow-col grid-col-1 md:grid-cols-2 w-full">
            <div className="bg-white p-4 col-span-1 shadow rounded w-full">
                <div className="border-b border-bills-lightgrey/20 mb-4">
                <h1 className='text-xl font-semibold '>Best Seller By Quanlity</h1>
                <p className='text-sm text-bills-lightgrey'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, mollitia.</p>
                </div>
               <div className="w-full">
                <AirtimeHorizontalData/>
               </div>
            </div>
            <div className="bg-white p-4 col-span-1 shadow rounded w-full">
                <div className="border-b border-bills-lightgrey/20 mb-4">
                <h1 className='text-xl font-semibold '>Best Seller By Quanlity</h1>
                <p className='text-sm text-bills-lightgrey'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, mollitia.</p>
                </div>
               <div className="w-full">
                <AirtimeHorizontalData/>
               </div>
            </div>
           
           
        </div>
        <div>
        <MovieLine2 />
      </div>
    </section>
  )
}
