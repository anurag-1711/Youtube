import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='grid grid-flow-col  m-2 shadow-lg'>
            <div className='flex col-span-1 '>
                <img
                    onClick={() => toggleMenuHandler()}
                    className='h-14 cursor-pointer'
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII='
                    alt='menu'
                />
                <a href='/'>
                    <img
                        className='h-14 mx-2 cursor-pointer'
                        src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500'
                        alt='youtube-logo'
                    />
                </a>
            </div>

            <div className='col-span-10 px-10 py-1 mx-10'>
                <input
                    className='w-1/2 border border-gray-300 rounded-l-full  p-2'
                    type='text' />
                <button
                    className='border border-gray-300 p-2 px-5 rounded-r-full bg-slate-100'>
                    🔍
                </button>
            </div>

            <div className='col-span-1'>
                <img
                    className='h-12 m-auto'
                    src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
                    alt='user-icon'
                />
            </div>
        </div>
    )
}

export default Head;