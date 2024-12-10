import React from 'react'
import { userList } from '../../../data/userData/userList'

const UserListDisplay = () => {
  return (
    <>
      <div className="bg-white  rounded mt-4 overflow-auto">
        <table className='w-full'>
          <thead className='bg-gray-50 border-b-2 border-gray-500 '>
            <tr >
              <th className='text-center p-4 whitespace-nowrap' >User ID</th>
              <th className='text-center p-4 whitespace-nowrap'>User Details</th>
              <th className='text-center p-4 whitespace-nowrap'>Phone Number</th>
              <th className='text-center p-4 whitespace-nowrap'>Total Transaction</th>
              <th className='text-center p-4 whitespace-nowrap'>Total Spending</th>
              <th className='text-center p-4 whitespace-nowrap'>Wallet Balance</th>
              <th className='text-center p-4 whitespace-nowrap'>Date Joined</th>
              <th className='text-center p-4 whitespace-nowrap'>Status</th>
            </tr>
          </thead>
          <tbody >
            {userList.map((list)=>{ 
              return(
                <tr className={list.id%2==0?'bg-bills-lightgrey2':'bg-white '}>
                  <td className='text-center p-4 whitespace-nowrap'>{list.id}</td>
                  <td className='text-center p-4 whitespace-nowrap'>{list.details.fullName}</td>
                  <td className='text-center p-4 whitespace-nowrap'>{list.details.phone}</td>
                  <td className='text-center p-4 whitespace-nowrap'>{list.totalTransaction}</td>
                  <td className='text-center p-4 whitespace-nowrap'>{list.totalSpendings}</td>
                  <td className='text-center p-4 whitespace-nowrap'>{list.walletBalance}</td>
                  <td className='text-center p-4 whitespace-nowrap'>{list.dateJoined}</td>
                  <td className='text-center p-4 whitespace-nowrap'> <span className={list.isActivated?'tracking-wider bg-green-300 p-1 px-2 rounded-sm text-green-800 font-semibold':'tracking-wider bg-red-300 p-1 px-2 rounded-sm text-red-800 font-semibold'}>{list.isActivated?'Activated':'Deactivated'}</span></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UserListDisplay
