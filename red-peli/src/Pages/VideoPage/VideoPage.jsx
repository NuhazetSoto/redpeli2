import { useParams } from "react-router-dom"
import { getVideo } from "../../services/Video.service"
import { useState,useEffect } from "react"

function VideoPage() {
    const { id } = useParams()
    const [video, setVideo] = useState([])

    const listVideo = async () =>{
        const res= await getVideo(id)
        setVideo(res)
        console.log(res)
    }
    useEffect(() => {
        listVideo()
    }, [])

  return (
    <div>
      Este es el reproductor de video. Video:
      <div>{video.id}</div>
      <div>{video.title}</div>
      <img src={video.url}/>
    </div>
  );
}

export default VideoPage