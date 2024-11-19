import React from 'react'
import { MovieLine2Data } from './MovieLine2Data'

export const MovieLine2 = () => {
  return (
    <>
    <section className='bg-white'>
<div className=" px-8 py-4 mt-8 rounded-lg grid md:grid-cols-2">
    <div>
        <h1>Average Transaction Data</h1>
        <p className='text-2xl font-semibold'>300k</p>
    </div>

    <div className="">

        <div className=" bg-bills-lightgrey/40 rounded-full
        p-3
        flex justify-evenly">
                <span>Daily</span>
                <span>Weekly</span>
                <span>Monthly</span>
                <span>Yearly</span>
        </div>
    </div>

        

</div>
<MovieLine2Data/>
    </section>
    </>
  )
}
