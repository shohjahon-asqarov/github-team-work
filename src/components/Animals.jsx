import React from 'react'

import bear from '../../public/images/bear.svg'
import plush from '../../public/images/plush.svg'
import dog from '../../public/images/dog.svg'
import fox from '../../public/images/fox.svg'

const Animals = () => {
    return (
        <div className='container'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl'>Stuffed Animals</h1>
                <h2 className='border-b-2'>See All Toys</h2>
            </div>
            
          <div class="bg-gray-200 h-0.5 mt-10">
            <div class="bg-lime-500 w-32 h-full"></div>
          </div>
            
            <div>
                <ul className='grid grid-cols-4 space-x-10 '>
                    <li className='space-y-3 shadow-card py-8 px-11 rounded-2xl text-center'>
                        <img src={bear} alt="" />
                        <h3>Teddy Bear</h3>
                        <button className='bg-[#A5C926] rounded-xl px-3'>$ 30.00 USD</button>
                    </li>
                    <li className='space-y-3 shadow-card py-8 px-11 rounded-2xl text-center'>
                        <img src={plush} alt="" />
                        <h3>Teddy Bear</h3>
                        <button className='bg-[#A5C926] rounded-xl px-3'>$ 30.00 USD</button>
                    </li >
                    <li className='space-y-3 shadow-card py-8 px-11 rounded-2xl text-center'>
                        <img src={dog} alt="" />
                        <h3>Teddy Bear</h3>
                        <button className='bg-[#A5C926] rounded-xl px-3'>$ 30.00 USD</button>
                    </li>
                    <li className='space-y-3 shadow-card py-8 px-11 rounded-2xl text-center'>
                        <img src={fox} alt="" />
                        <h3>Teddy Bear</h3>
                        <button className='bg-[#A5C926] rounded-xl px-3'>$ 30.00 USD</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Animals