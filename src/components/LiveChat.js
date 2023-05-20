import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomNames } from '../utils/helper';
import { generateRandomText } from '../utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);
    const [liveMessage, setLiveMessage] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            // console.log("API Polling"); -- fetch , json...

            dispatch(addMessage({
                name: generateRandomNames(),
                message: generateRandomText()
            }))
        }, 500);

        return () => {
            clearInterval(interval);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className='ml-2 h-[400px] w-full rounded-lg bg-gray-100 p-2 overflow-auto flex flex-col-reverse'>
                {/* LiveChat */}

                {/* <div className=''> */}
                {
                    chatMessages.map((chatMessage, index) => {
                        return <ChatMessage key={index} name={chatMessage.name} message={chatMessage.message} />
                    })
                }
                {/* </div> */}
            </div>

            <form className='border w-full ml-2 p-2 flex justify-between'
                onSubmit={(e) => {
                    e.preventDefault();
                    // console.log("Form Submitted and live message is " + liveMessage);

                    dispatch(addMessage({
                        name: 'Anurag',
                        message: liveMessage
                    }));

                    setLiveMessage("");
                }}
            >
                <input
                    className='w-[22rem] border p-1 px-2'
                    type='text'
                    placeholder='Say something'
                    value={liveMessage}
                    onChange={(e) => {
                        setLiveMessage(e.target.value)
                    }}
                />
                <button className='rounded-lg p-1 px-6 m-auto bg-green-200'>
                    Send
                </button>
            </form >
        </>
    )
}

export default LiveChat