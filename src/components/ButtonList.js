import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom';

const list = ["All", "Music", "Mixes", "Gaming", "Cricket", "Live", "News", "Soccer", "Comedy", "Cooking", "Valentines"];

const ButtonList = () => {
  return (
    <div className='flex' >
      {
        list.map((item, index) => {
          return (
            <Link to={`/results?searchQuery=${item}`} key={index}>
              <Button name={item} />
            </Link>
          )

        })
      }
    </div>
  )
}

export default ButtonList;