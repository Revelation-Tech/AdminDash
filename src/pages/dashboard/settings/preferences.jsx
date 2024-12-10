import React from 'react'

export const Preferences = () => {
  return (
    <section className='mt-8 bg-white w-full p-6'>
        <div className="border-b border-bills-lightgrey py-4">
          <h1 className="text-xl ">Preference</h1>
          <p className="text-bills-lightgrey">Set the preference for your account and get modified when there's an update</p>
        </div>

        <div>
          <div className="md:grid grid-cols-2">
            <div className="my-3 col-span-1">
              <h1 className="text-lg">Login Attempts</h1>
              <p className="text-sm text-bills-lightgrey">These are notifications to notify you when your account is being accessed</p>
            </div>

            <div className='col-span-1 my-3'>
             
              <span className="block my-2"> <input type='radio' name='same' className=""/> &nbsp; Email</span>
              <span className="block my-2"> <input type='radio' name='same' className=""/> &nbsp; Push Notifications</span>
              <span className="block my-2"> <input type='radio' name='same' className=""/> &nbsp; SMS</span>
            
            </div>
            <div className="my-3 col-span-1">
              <h1 className="text-lg">Login Attempts</h1>
              <p className="text-sm text-bills-lightgrey">These are notifications to notify you when your account is being accessed</p>
            </div>

            <div className='col-span-1 my-3'>
             
              <span className="block my-2"> <input type='radio' name='same' className=""/> &nbsp; Email</span>
              <span className="block my-2"> <input type='radio' name='same' className=""/> &nbsp; Push Notifications</span>
              <span className="block my-2"> <input type='radio' name='same' className=""/> &nbsp; SMS</span>
            
            </div>
            <div className="my-3 col-span-1">
              <h1 className="text-lg">Login Attempts</h1>
              <p className="text-sm text-bills-lightgrey">These are notifications to notify you when your account is being accessed</p>
            </div>

            <div className='col-span-1 my-3'>
             
              <span className="block my-2"> <input type='radio' name='same' className=""/> &nbsp; Email</span>
              <span className="block my-2"> <input type='radio' name='same' className=""/> &nbsp; Push Notifications</span>
              <span className="block my-2"> <input type='radio' name='same' className=""/> &nbsp; SMS</span>
            
            </div>

          </div>
        </div>
    </section>
    
  )
}
