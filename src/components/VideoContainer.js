import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);

    const json = await data.json();
    // console.log(json.items);
    setVideos(json?.items);

    // console.log(videos);
  }

  return (
    <div className='flex flex-wrap justify-center'>
      {
        videos.map((video) => {
          return <Link to={"/watch?v=" + video.id} key={video.id}><VideoCard {...video} /></Link>
        })
      }
    </div>
  )
}

export default VideoContainer