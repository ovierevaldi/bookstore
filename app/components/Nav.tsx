import Image from 'next/image'
import React from 'react'

export default function Nav() {
    const listNav: string[] = ['HOME', 'NEW', 'BOOKS', 'NOTES', 'EBOOKS', 'SELLER'];
    
    function handleInputChange(){

    }

    return (
        <div className="flex items-center justify-between px-4 py-1 relative">
            {/* title */}
        
            <div className="flex items-center px-2 py-4">
            <Image src={'/images/book.png'} alt="Book Picture" width={75} height={75}/>
            <p className="text-2xl">Old Book Store</p>
            </div>

            {/* nav */}
            <div className="grid grid-cols-[1fr_70px] justify-end w-full">
                <div className="flex gap-x-9 border-b border-r border-black py-1 pr-4 pl-2">
                    {
                    listNav.map((value) => <button key={value} className="tracking-defaultSpacing"><span className="hover:underline">{value}</span></button>)
                    }
                </div>

                <div className="grid grid-cols-2 items-center border-b border-black gap-x-2 px-2 ">
                <button><Image src={'/icons/cart.svg'} alt="cart icon" width={30} height={30}></Image></button>
                <button><Image src={'/icons/menu.svg'} alt="menu icon" width={15} height={15}></Image></button>
                </div>

                <div className="flex items-center border-r border-black py-1 pr-4 pl-2">
                <input className="border-l border-black pl-2 tracking-defaultSpacing" type="text" value={'Search. . . .'} onChange={handleInputChange}></input>
                    <div className="grow">
                    <button className="contents"><Image src={'/icons/magnifier.svg'} alt="cart icon" width={20} height={20} className="mx-auto"></Image></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
