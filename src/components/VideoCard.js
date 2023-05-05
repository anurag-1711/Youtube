import React from 'react'

const VideoCard = (info) => {
    // console.log(info);

    const title = info?.snippet?.title;
    const url = info?.snippet?.thumbnails?.maxres?.url;
    const channelTitle = info?.snippet?.channelTitle;
    const viewCount = info?.statistics?.viewCount;

    return (
        <div className='p-2 m-2 w-[344px]'>
            <img
                className='rounded-lg w-full h-[194px]'
                src={url}
                alt={title}
            />
            <ul>
                <li className='font-bold py-1'>{title}</li>
                <li className='text-gray-700 font-normal text-[0.95rem]'>{channelTitle}</li>
                <li className='text-gray-700 font-normal text-[0.95rem]'>{viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard