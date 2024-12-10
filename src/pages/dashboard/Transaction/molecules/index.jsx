import React from 'react'

const Index = () => {
  return (
    <div className=" grid  grid-flow-row md:grid-flow-col gap-8">
    <div className="bg-white p-4 rounded shadow">
      <h1 className='text-sm font-semibold'>Total Transaction</h1>
      <p className='text-2xl font-semibold mt-5'> &#x20A6; 300M</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h1 className='text-sm font-semibold'>Today's Transaction</h1>
      <p className='text-2xl font-semibold mt-5'> &#x20A6; 5.2M</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h1 className='text-sm font-semibold'>Yesterday's Transaction</h1>
      <p className='text-2xl font-semibold mt-5'> &#x20A6; 1.2M</p>
    </div>


  </div>
  )
}

export default Index