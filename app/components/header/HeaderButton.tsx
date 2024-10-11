import Image from 'next/image'
import React from 'react'

type HeaderButtonProp = {
    label: string
    iconName: string
    width?: number
    heigth?: number
}

export default function HeaderButton({label,iconName, width, heigth, } : HeaderButtonProp) {
  return (
    <button className='flex items-center gap-x-4'>
        <Image src={'/icons/' + iconName} alt={'Icon ' + iconName} width={width ? width: 20} height={heigth? heigth: 20}/>
        <span className='text-white text-sm'>{label}</span>
    </button>
  )
}
