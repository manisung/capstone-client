import "./VideosListPage.scss"
import { useState, useEffect } from "react";
import axios from "axios";
import VideosList from "../../components/VideosList/VideosList";

let PORT;

console.log('NODE_ENV', process.env.NODE_ENV)

if(process.env.NODE_ENV === 'production'){
    PORT = '';
} else {
    PORT = `:${process.env.REACT_APP_PORT}`;
}

function VideosListPage() {
    const[videos, setVideos] = useState ([]);

    console.log("videos", videos);
   
    useEffect(() => {   
          axios
            .get(
              `${process.env.REACT_APP_API_URL}${PORT}/videos`
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