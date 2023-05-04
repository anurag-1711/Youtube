import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { Link, useNavigate } from 'react-router-dom';

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
                // console.log("found")
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
        const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
        const json = await data.json();

        setSuggestions(json[1]);

        // update cache
        dispatch(cacheResults({
            [searchQuery]: json[1]
        }));
    }

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    const navigate = useNavigate();

    const handleSearchClick = (searchTerm) => {
        // console.log(searchQuery);
        setSearchQuery(searchTerm)
        if (searchTerm)
            navigate(`/results?searchQuery=${searchTerm}`);
    }

    return (
        <div className='grid grid-flow-col mx-1 sticky bg-white top-0 items-center'>
            <div className='col-span-1 flex items-center justify-around -space-x-3'>

                {/* 3 bars */}
                <div className=''>
                    {/* 3 Bars */}
                    <svg
                        onClick={() => toggleMenuHandler()}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 my-auto ml-3 cursor-pointer">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                </div>

                {/* Youtube logo */}
                <Link to='/'>
                    <img
                        className='h-14 mx-2 cursor-pointer'
                        src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500'
                        alt='youtube-logo'
                    />
                </Link>
            </div>

            {/* Input section */}
            <div className='col-span-10 px-10 py-1 mx-20'>
                <form className='flex items-center'
                    onSubmit={(e) => {
                        e.preventDefault();
                        setShowSuggestions(false);
                    }}
                >
                    <input
                        value={searchQuery}
                        className='w-2/3 border shadow-sm placeholder-slate-400 border-gray-300 rounded-l-full p-2 px-4'
                        type='text'
                        placeholder='Search'
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            // setShowSuggestions(true);
                        }}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />

                    <div className='flex items-center space-x-4'>
                        <button
                            onClick={() => {
                                // console.log("Search button clicked")
                                handleSearchClick(searchQuery)
                            }}
                            className='border border-gray-300 p-2 px-5 rounded-r-full bg-gray-100'>
                            {/* Magnifying Glass */}
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* microphone */}
                        <div>
                            {/* microphone */}
                            <div className='w-12 h-12 rounded-full hover:bg-slate-200 flex items-center cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto">
                                    <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                                    <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                                </svg>
                            </div>
                        </div>

                    </div>
                </form>

                {
                    (showSuggestions && searchQuery)
                    &&

                    <ul className='fixed bg-white py-2 px-4 border border-gray-300 w-5/12 rounded-2xl shadow-lg cursor-default'>
                        {
                            suggestions.map((suggestion) => {
                                return (
                                    <div key={suggestion}>
                                        <li
                                            key={suggestion}
                                            className='py-2 shadow-sm hover:bg-gray-200 flex items-center space-x-2'

                                            // mousedown is used beacuse it fires before onBlur in inputText so search get executed
                                            onMouseDown={() => {
                                                // console.log("List item clicked")
                                                handleSearchClick(suggestion);
                                            }}
                                        >

                                            {/* Magnifying Glass */}
                                            < svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" >
                                                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                                            </svg>

                                            <div>{suggestion}</div>
                                        </li>
                                    </div>
                                )
                            })
                        }

                    </ul>

                }
            </div >

            {/* Bell and User Icon */}
            < div className='col-span-1 flex  items-center justify-center space-x-3' >
                {/* eslint-disable-next-line */}
                <div className='w-12 h-12 rounded-full hover:bg-slate-200 flex items-center cursor-pointer'>
                    {/* bell-icon */}
                    < svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto" >
                        <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
                        <path fillRule="evenodd" d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z" clipRule="evenodd" />
                    </svg >

                </div >
                {/* eslint-disable-next-line */}
                <div className='w-12 h-12 rounded-full hover:bg-slate-200 flex items-center cursor-pointer'>
                    {/* User-icon */}
                    < svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 m-auto" >
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                    </svg >

                </div >

            </div >
        </div >
    )
}

export default Head;