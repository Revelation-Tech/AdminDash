import React from 'react'
import SideNav from '../SideNav'
import { transactionNavData } from '../../../data/TransactionNavData'
import { NavLink, Outlet } from 'react-router-dom'


export const Transaction = () => {
  return (
   <>
   {/* <div className=''>
        <SideNav/>
    <div className="lg:w-[calc(100%-220px)] lg:ml-[220px] min-h-screen  bg-bills-lightblue"> */}
        <div className="bg-white py-4 px-8 shadow-md border-t border-black/10">
                {/* <h1 className='text-2xl font-semibold'>Bill Management</h1> */}
                <div className="w-full overflow-x-auto text-nowrap mt-8">
                    {transactionNavData.map((link)=>{
                        return(
                            <NavLink style={({ isActive }) => {
                                return {
                                   
                                    color: isActive ? '#1F6CAB' : 'black',
                                    borderBottom: isActive ? ' #1F6CAB solid 2px' : 'none'

                                };
                            }}
                             key={link.id} className='text-sm mr-2 max-md:mb-6 px-2' to={link.link} end> {link.name}</NavLink>
                        )
                    })}

                </div>
        </div>

        <div className=" p-4 md:py-8 px-0">

            <Outlet/>
        </div>
    {/* </div>
   </div> */}
   </>
  )
}
