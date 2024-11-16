import React from 'react'
import SideNav from './sideNav'
import { MoviesLine } from '../../data/chartData/moviesLine'

export const Movies = () => {
    return (
        <>
            <div className=''>
                <SideNav />

                <div className=' lg:w-[calc(100%-220px)] lg:ml-[220px] h-screen overflow-auto bg-bills-lightblue'>
                    <div className="p-4">
                        <h1 className="font-semibold text-3xl">Movies</h1>
                        <div className=" mt-8 md:grid grid-cols-3 gap-4  grid-flow-col">
                        <div className="mt-2 md:mt-0 grid grid-cols-4 gap-8 grid-flow-row shadow rounded-md bg-white p-4">
                                <div className="col-span-2">
                                    <h1 className='text-sm'>Total tickets Purchased</h1>
                                    <h1 className='font-bold text-xl mt-4'> &#x20A6; 300M</h1>
                                </div>
                                <div className="col-span-2  text-sm">
                                    <p className='text-sm'>40 % vs last month</p>
                                    <div className='mt-4'><MoviesLine/></div>
                                </div>

                            </div>
                            <div className="mt-2 md:mt-0 grid grid-cols-4 shadow rounded-md gap-8 grid-flow-row bg-white p-4">
                                <div className="col-span-2">
                                    <h1 className='text-sm'>Total tickets Purchased</h1>
                                    <h1 className='font-bold text-xl mt-4'> &#x20A6; 300M</h1>
                                </div>
                                <div className="col-span-2  text-sm">
                                    <p className='text-sm'>40 % vs last month</p>
                                    <div className='mt-4'><MoviesLine/></div>
                                </div>

                            </div>
                            <div className="mt-2 md:mt-0 shadow rounded-md grid grid-cols-4 gap-8 grid-flow-row bg-white p-4">
                                <div className="col-span-2">
                                    <h1 className='text-sm'>Total tickets Purchased</h1>
                                    <h1 className='font-bold text-xl mt-4'> &#x20A6; 300M</h1>
                                </div>
                                <div className="col-span-2  text-sm">
                                    <p className='text-sm'>40 % vs last month</p>
                                    <div className='mt-4'><MoviesLine/></div>
                                </div>

                            </div>
                            

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
