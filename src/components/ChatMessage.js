import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex py-1 items-center '>
            <img className="h-8 px-1" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="icon"></img>
            <p className='px-1 font-semibold'>{name}</p>
            <p>{message}</p>
        </div>
    )
}

export default ChatMessage