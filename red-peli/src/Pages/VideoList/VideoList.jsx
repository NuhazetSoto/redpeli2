import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { getVideos } from '../../services/Video.service';

function VideoList() {
    const [videos, setVideos] = useState([])

    const listVideos = async () =>{
        const res= await getVideos()
        setVideos(res)
    }
    useEffect(() => {
        listVideos()
    }, [])
    
  return (
    <>
      <div>VideoList</div>
      <ul>
        {videos &&
          videos.map((video) => (
            <li key={video.id}>
              <Link to={`/dashboard/video/${video.id}`}>{video.title}</Link>
            </li>
          ))}
        {/* <li>
          <Link to="/dashboard/video/1">Video 1</Link>
        </li>
        <li>
          <Link to="/dashboard/video/2">Video 2</Link>
        </li>
        <li>
          <Link to="/dashboard/video/3">Video 3</Link>
        </li>
        <li>
          <Link to="/dashboard/video/4">Video 4</Link>
        </li> */}
      </ul>
    </>
  );
}

export default VideoList