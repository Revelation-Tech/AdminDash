import React from 'react'
import { formatCurrency } from '../../../../utils/functions'

const Index = ({total, today, yesterday}) => {
  return (
    <div className=" grid  grid-flow-row md:grid-flow-col gap-8">
    <div className="bg-white p-4 rounded shadow-light">
      <h1 className='text-sm font-semibold'>Total Transaction</h1>
      <p className='text-2xl font-semibold mt-5'> {formatCurrency(total)}</p>
    </div>
    <div className="bg-white p-4 rounded shadow-light">
      <h1 className='text-sm font-semibold'>Today's Transaction</h1>
      <p className='text-2xl font-semibold mt-5'> {formatCurrency(today)}</p>
    </div>
    <div className="bg-white p-4 rounded shadow-light">
      <h1 className='text-sm font-semibold'>Yesterday's Transaction</h1>
      <p className='text-2xl font-semibold mt-5'> {formatCurrency(yesterday)}</p>
    </div>


  </div>
  )
}

export default Index