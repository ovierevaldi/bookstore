import Image from 'next/image'
import React from 'react'

import BookShelfImage from './../../public/images/book_shelf.png'

type BookItemProp = {
    price: number
}

export default function BookItem({price} : BookItemProp) {
  return (

    <button className='bg-[#E7AC67] bg-opacity-40 max-w-[130px] w-full'>
      <Image src={BookShelfImage} alt='book shelf icon' width={120} height={120} className='px-3 mx-auto'></Image>
      <p className='py-2'>Rs. {price}</p>
    </button>
  )
}
