import React from 'react'
import Button from './Button'

const list = ["All", "Music", "Mixes", "Gaming", "Cricket", "Live", "News", "Soccer", "Comedy", "Cooking", "Valentines"];

const ButtonList = () => {
  return (
    <div className='flex' >
      {
        list.map((item, index) => {
          return <Button key={index} name={item} />
        })
      }
    </div>
  )
}

export default ButtonList