import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const cache = useSelector(store => store.search);
    // console.log(cache);

    useEffect(() => {

        /***  make an api call after every key press
            but if the difference between 2 API calls is < 200ms, decline the API
        */

        const timer = setTimeout(() => {

            if (cache[searchQuery]) {
                console.log("found")
                setSuggestions(cache[searchQuery]);
            } else {
                getSearchSuggestions();
            }

        }, 200);

        return () => {
            clearTimeout(timer);
        }
        // eslint-disable-next-line
    }, [searchQuery])

    /**
     * 
     * key - a
     * - render the component
     * - useEffect();
     * - start timer -> make API call after 200ms
     * 
     * key - an
     * - destroy the previous component (useEffect return method)
     * - re-render the component
     * - useEffect();
     * - start timer -> make API call after 200ms (new timer)
     * 
     */


    const getSearchSuggestions = async () => {
        // console.log("API Call for - " + searchQuery);

        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();

        setSuggestions(json[1]);

        // update cache
        dispatch(cacheResults({
            [searchQuery]: json[1]
        }));

        // console.log(suggestions);

        // console.log(json);
    }

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='grid grid-flow-col  m-2 shadow-lg sticky bg-white top-0'>
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
                <div className=''>
                    <input
                        className='w-2/3 border border-gray-300 rounded-l-full p-2 px-6'
                        type='text'
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setShowSuggestions(true);
                        }}
                        // onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />
                    <button
                        className='border border-gray-300 p-2 px-5 rounded-r-full bg-slate-100'>
                        🔍
                    </button>
                </div>

                {(showSuggestions) && <div className='fixed bg-white py-2 px-4 border border-gray-300 w-5/12 rounded-2xl shadow-lg'>
                    <ul>
                        {/* <li className='py-2 shadow-sm hover:bg-gray-200'>🔍 Iphone</li> */}

                        {
                            suggestions.map((name) => {
                                return <li key={name} className='py-2 shadow-sm hover:bg-gray-200'>🔍 {name}</li>
                            })
                        }

                    </ul>
                </div>}
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