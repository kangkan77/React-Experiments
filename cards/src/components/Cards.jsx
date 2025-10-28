import React from 'react'

const Cards = ({title, subtitle, expertise1, expertise2, expertise3, maincolor, bgcolor}) => {
  return (
    <>
      <div className='h-[50vh] w-[25vw] bg-white rounded-2xl flex flex-col items-center'>
        <div className={`h-[35vh] w-[90%] ${maincolor} rounded-2xl mt-5 p-7`}>
          <h1 className='text-4xl font-semibold'>{title}</h1>
          <h3 className='text font-medium my-2'>{subtitle}</h3>
          <div className=''>
            <button className={`px-4 py-1 mr-2 mb-2 ${bgcolor} rounded-4xl`}>{expertise1}</button>
            <button className={`px-4 py-1 mb-2 ${bgcolor} rounded-4xl`}>{expertise2}</button>
            <button className={`px-4 py-1 ${bgcolor} rounded-4xl`}>{expertise3}</button>
          </div>
        </div>
        <div className='w-[80%] bg-red-00 flex items-center justify-between m-auto'>
          <p className='text-3xl font-semibold'>Explore</p>
          <button className="p-4 bg-gray-300 rounded"><i class="ri-arrow-right-long-line"></i></button>
        </div>
      </div>
    </>
  )
}

export default Cards