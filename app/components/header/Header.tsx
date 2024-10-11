import React from 'react'
import HeaderButton from './HeaderButton'

export default function Header() {
  return (
    <div className='bg-black p-2 grid grid-cols-[1fr_0.3fr]'>
      <div className='flex justify-around'>
        <HeaderButton label='EMAIL US :' iconName='mail.svg'/>
        <HeaderButton label='CONTACT US:' iconName='contact-book.svg'/>
        <HeaderButton label='ACCOUNT' iconName='user.svg' heigth={17} width={17}/>
      </div>
      <div className='text-center'>
        <p className='text-white text-sm font-extralight tracking-defaultSpacing'>Register | Login</p>
      </div>
    </div>
  )
}
