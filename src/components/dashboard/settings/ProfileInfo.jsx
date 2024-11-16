import React from 'react'
import profile from '../../../assets/images/profile2.jpg'
import { Camera } from 'iconsax-react'
export const ProfileInfo = () => {
    return (
        <section className='bg-white w-full  p-3 md:p-8'>
            <div>
                <h1 className='text-2xl font-semibold '>Profile Info</h1>
                <p className='text-bills-lightgrey text-sm'>Update your photo & personal info here</p>
            </div>

            <div className='w-24 mt-8  relative'>
                <img src={profile} alt="" className='w-full rounded-full ' />
                <Camera className='absolute bottom-0 right-1 cursor-pointer border-white border-[2px] rounded-full' color="#1f6cab" size={28} variant="Bold"/>
            </div>

            <div className='mt-8'>
                <div>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" id="" className="  mt-2 mb-3 w-full ring-1 focus:ring-1 ring-bills-lightgrey/80 focus:ring-bills-darkblue focus:outline-none p-2 rounded " />
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id=""  className=" mt-2 mb-3 w-full ring-1 focus:ring-1 ring-bills-lightgrey/80 focus:ring-bills-darkblue focus:outline-none p-2 rounded" />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" name="phone" id=""  className=" mt-2 mb-3 w-full ring-1 focus:ring-1 ring-bills-lightgrey/80 focus:ring-bills-darkblue focus:outline-none p-2 rounded" />
                </div>
                <div>
                    <label htmlFor="role">Role</label>
                    <input type="text" name="role" id=""  className=" mt-2 mb-3 w-full ring-1 focus:ring-1 ring-bills-lightgrey/80 focus:ring-bills-darkblue focus:outline-none p-2 rounded" />
                </div>

                <div className='w-full grid md:grid-cols-3 gap-4 mt-4'>
                        <div className="col-span-1">
                            <button className='w-full btn-outline' >cancel</button>
                        </div>
                        <div className="col-span-2">
                            <button className='w-full btn-fill' >Save changes</button>
                        </div>
                </div>
            </div>
        </section>
    )
}
