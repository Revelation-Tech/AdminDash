import { Filter, ImportCurve, SearchNormal1, User } from 'iconsax-react'
import React from 'react'

const UserSearch = () => {
    return (
        <>
            <div className="bg-white p-4  mt-4  rounded-md">
                <div className=" flex items-center gap-6 justify-between">
                    <div className="w-full lg:w-2/3 relative ">
                        <SearchNormal1 size={16} className="absolute  text-black/60 left-3 top-2 " />
                        <input type="text" name="" id="" className=" w-full p-[0.3rem] pl-10 rounded-md ring-1 ring-bills-lightgrey outline-none focus:ring-1 focus:ring-bills-darkblue placeholder-black/60" placeholder="Search" />
                    </div>
                    <div className="w-full lg:w-1/3 ">
                        <button className="btn-outline2 mr-3"> <Filter size={16} className="inline" variant="Outline" /> Filter </button>
                        <button className="btn-fill2 mr-3"><ImportCurve size={16} className="inline" variant="Outline" /> Export Csv </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserSearch