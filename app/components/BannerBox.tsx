import React from 'react'

type BannnerBoxProp = {
    bgColor: string
}

export default function BannerBox({bgColor}: BannnerBoxProp ) {
  return (
    <button className={`bg-[${bgColor}] bg-opacity-60 px-32 py-16`}>
      
    </button>
  )
}
