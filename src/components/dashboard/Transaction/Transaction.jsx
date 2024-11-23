import React from 'react'
import SideNav from '../SideNav'
import { transactionNavData } from '../../../data/TransactionNavData'
import { NavLink, Outlet } from 'react-router-dom'


export const Transaction = () => {
  return (
   <>
   <div className=''>
        <SideNav/>
    <div className="lg:w-[calc(100%-220px)] lg:ml-[220px] min-h-screen  bg-bills-lightblue">
        <div className="bg-white py-4 px-8 shadow-md border-t border-black/10">
                <h1 className='text-2xl font-semibold'>Bill Management</h1>
                <div className="w-full overflow-auto text-nowrap mt-8">
                    {transactionNavData.map((link)=>{
                        return(
                            <NavLink key={link.id} className='text-sm mr-6 max-md:mb-6' to={link.link} end>{link.name}</NavLink>
                        )
                    })}

                </div>
        </div>

        <div className=" p-4 md:p-8">

            <Outlet/>
        </div>
    </div>
   </div>
   </>
  )
}
