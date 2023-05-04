import React from 'react'
import { Link } from 'react-router-dom'

const SearchVideoCard = (item) => {

    const channelTitle = item?.channelTitle;
    const title = item?.title;
    const description = item?.description;
    const viewCount = item?.viewCount;
    const url = item?.thumbnail[0]?.url;
    const channelUrl = item?.channelThumbnail[0]?.url;

    return (
        <Link to={`/watch?v=${item.videoId}`}>
            <div className='flex mt-6 ml-6 space-x-2'>
                <img
                    className='m-1 rounded-xl mr-2 w-[360px] h-[202px]'
                    src={url}
                    alt=''
                />

                <ul className='mt-[0.15rem]'>
                    <li className='text-lg font-normal'>{title}</li>
                    <li className='text-sm text-slate-500'>{viewCount} views</li>
                    <li className='py-3 flex items-center space-x-2'>
                        <img
                            className='rounded-full w-6'
                            src={channelUrl}
                            alt=''
                        />
                        <p className='text-sm text-slate-600'>{channelTitle}</p>
                    </li>
                    <li className='text-sm text-slate-500' >{description}</li>
                </ul>
            </div>
        </Link>
    )
}

export default SearchVideoCard