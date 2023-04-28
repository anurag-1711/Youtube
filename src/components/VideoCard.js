import React from 'react'

const VideoCard = (info) => {
    // console.log(info);

    const title = info?.snippet?.title;
    const url = info?.snippet?.thumbnails?.maxres?.url;
    const channelTitle = info?.snippet?.channelTitle;
    const viewCount = info?.statistics?.viewCount;

    return (
        <div className='p-2 m-2 w-96 shadow-lg'>
            <img
                className='rounded-lg w-full'
                src={url}
                alt='thumbnail'
            />
            <ul>
                <li className='font-bold py-1'>{title}</li>
                <li>{channelTitle}</li>
                <li>{viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard