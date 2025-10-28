import React from 'react'

const RightFirstCard = ({img, content, button, index}) => {
    return (
        <div style={{ backgroundImage: `url(${img})` }} className='h-full bg-red-00 w-[30%] z-2 rounded-3xl flex flex-col justify-between p-5 bg-center bg-cover'>
            <button className='bg-white rounded-full px-4 py-2 w-fit'>{index}</button>
            <div>
                <h2 className='text-white text-xl font-semibold px-5 bg-amber-00 w-[90%]'>{content}</h2>
                <div className='text-white flex justify-between p-5'>
                    <button className='px-8 py-2 bg-blue-600 rounded-full'>{button}</button>
                    <button className='px-4 py-2 bg-blue-600 rounded-full'><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightFirstCard