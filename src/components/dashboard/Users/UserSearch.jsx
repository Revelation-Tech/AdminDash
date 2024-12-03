import { Filter, ImportCurve, SearchNormal1, User } from 'iconsax-react'
import React from 'react'

const UserSearch = () => {
    return (
        <>
            <div className="bg-white p-4  mt-4  rounded-md">
                <div className=" md:grid grid-cols-3 gap-6">
                    <div className="col-span-2 ">
                        <SearchNormal1 size={16} className="absolute  text-black/60 left-3 top-2 " />
                        <input type="text" name="" id="" className=" w-full p-[0.3rem] pl-10 rounded-md ring-1 ring-bills-lightgrey outline-none focus:ring-1 focus:ring-bills-darkblue placeholder-black/60" placeholder="Search" />
                    </div>
                    <div className="col-span-1 mt-3 md:mt-0 ">
                        <div className="max-md:flex justify-between items-center ">
                            <button className="btn-outline2 mr-2"> <Filter size={16} className="inline" variant="Outline" /> Filter </button>
                            <button className="btn-fill2 "><ImportCurve size={16} className="inline" variant="Outline" /> Export Csv </button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default UserSearch