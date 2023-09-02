import "./VideosListPage.scss"
import { useState, useEffect } from "react";
import axios from "axios";
import VideosList from "../../components/VideosList/VideosList";

function VideosListPage() {
    const[videos, setVideos] = useState ([]);

    console.log("videos", videos);
   
    useEffect(() => {   
          axios
            .get(
              `http://localhost:${process.env.REACT_APP_PORT}/videos`
            )
            .then((response) => {   
                setVideos(response.data);
                console.log("response.data", response.data);
            }) 
            .catch((err) => console.error(err));
      }, []);

      


    return(
        <VideosList videos={videos}/>
    )
}

export default VideosListPage;


// http://localhost:8080/images/
// http://localhost:8080/videos/