import { Lock1 } from 'iconsax-react'
import React from 'react'

export const Password = () => {
  return (
    <section className='bg-white w-full  p-3 md:p-8'>
      <div className=''>
        <h1 className='font-normal text-2xl '>Update Password</h1>
        <p className='text-bills-lightgrey text-sm'>Enter your current password to make update</p>
      </div>
      <main className=" mt-7">
        <div className='relative'>
          <label htmlFor="current" className='text-sm font-normal'>Current Password</label>
          <Lock1 className='absolute top-11 left-3 ' size={18} />
          <input type="password" name="" id="" className='w-full ring-1 ring-bills-lightgrey pl-10 mb-4 mt-2 rounded-sm p-2 focus:ring-bills-darkblue focus:outline-none placeholder-black/50 ' placeholder='Enter Password' />
        </div>
        <div className='relative'>
          <label htmlFor="current" className='text-sm font-normal'>New Password</label>
          <Lock1 className='absolute top-11 left-3 ' size={18} />
          <input type="password" name="" id="" className='w-full ring-1 ring-bills-lightgrey pl-10 mb-4 mt-2 rounded-sm p-2 focus:ring-bills-darkblue focus:outline-none' placeholder='Enter New Password' />
        </div>
        <div className='relative'>
          <label htmlFor="current" className='text-sm font-normal'>Confirm Password</label>
          <Lock1 className='absolute top-11 left-3 ' size={18} />
          <input type="password" name="" id="" className='w-full ring-1 ring-bills-lightgrey pl-10 mb-4 mt-2 rounded-sm p-2 focus:ring-bills-darkblue focus:outline-none ' placeholder='Enter New Password' />
        </div>
        <div className=' flex justify-end'>
          <button className='btn-fill '>Update Password</button>
        </div>

      </main>
    </section>
  )
}
