import React from 'react'
import { MoviesLine } from '../../../data/chartData/moviesLine'
import SideNav from '../SideNav'
import UserSearch from './UserSearch'
import UserListDisplay from './userListDisplay'

const Users = () => {
  return (
    <div className=''>
    <SideNav/>

     <div className=' lg:w-[calc(100%-220px)] lg:ml-[220px] min-h-screen bg-bills-lightblue'>
      <div className="p-4">
          <h1 className="font-semibold text-3xl">Transaction</h1>
          <div className=" mt-8 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4  ">
                      <div className="mt-2 md:mt-0 grid grid-cols-4 gap-8 grid-flow-row shadow rounded-md bg-white p-4">
                              <div className="col-span-2">
                                  <h1 className='text-sm font-semibold'>All</h1>
                                  <h1 className='font-bold text-xl mt-4'> &#x20A6; 5.2K</h1>
                              </div>
                              <div className="col-span-2 text-green-800 font-semibold text-sm">
                                  
                                  <div className='mt-4'>40 % vs last month<MoviesLine/></div>
                              </div>

                          </div>
                      <div className="mt-2 md:mt-0 grid grid-cols-4 gap-8 grid-flow-row shadow rounded-md bg-white p-4">
                              <div className="col-span-2">
                                  <h1 className='text-sm font-semibold'>Activated</h1>
                                  <h1 className='font-bold text-xl mt-4'> &#x20A6; 5.2K</h1>
                              </div>
                              <div className="col-span-2 text-green-800 font-semibold text-sm">
                                  
                                  <div className='mt-4'>40 % vs last month<MoviesLine/></div>
                              </div>

                          </div>
                      <div className="mt-2 md:mt-0 grid grid-cols-4 gap-8 grid-flow-row shadow rounded-md bg-white p-4">
                              <div className="col-span-2">
                                  <h1 className='text-sm font-semibold'>Deactivated</h1>
                                  <h1 className='font-bold text-xl mt-4'> &#x20A6; 5.2K</h1>
                              </div>
                              <div className="col-span-2 text-green-800 font-semibold text-sm">
                                  
                                  <div className='mt-4'>40 % vs last month<MoviesLine/></div>
                              </div>

                          </div>
                          <div className="mt-2 md:mt-0 grid grid-cols-4 shadow rounded-md gap-8 grid-flow-row bg-white p-4">
                              <div className="col-span-2">
                                  <h1 className='text-sm font-semibold'>Freezed</h1>
                                  <h1 className='font-bold text-xl mt-4'> &#x20A6; 5.2K</h1>
                              </div>
                              <div className="col-span-2 text-green-800 font-semibold text-sm">
                                  
                                  <div className='mt-4'>40 % vs last month<MoviesLine/></div>
                              </div>

                          </div>
                         
                          

                      </div>

        <UserSearch/>
        <UserListDisplay/>
      </div>
     </div>
    
  </div>
  )
}

export default Users