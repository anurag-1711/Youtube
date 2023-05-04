import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_VIDEOS_API } from '../utils/constants';
import SearchVideoCard from './SearchVideoCard';

const Results = () => {

    const [searchParams] = useSearchParams();
    const [videos, setVideos] = useState([]);
    // console.log(searchParams.get("searchQuery"));

    useEffect(() => {
        getVideosList();
        // eslint-disable-next-line
    }, [searchParams]);

    const getVideosList = async () => {
        const api = YOUTUBE_SEARCH_VIDEOS_API + "&query=" + searchParams.get("searchQuery");
        // console.log(api)
        const data = await fetch(api);
        const json = await data.json();

        setVideos(json.data);
        // console.log(json.data)
    }

    return (
        <div className='flex flex-col -space-y-5 divide-x'>
            {
                videos.map((video) => {
                    return <SearchVideoCard key={video.videoId} {...video} />
                })
            }
        </div>
    )
}

export default Results