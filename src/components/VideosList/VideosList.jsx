import "./VideosList.scss";

//TODO: Added styles, and don‘t flow over the vertical menu

function VideosList(props) {
  console.log('props.video', props.video)
  return (
    <div className="videoslist">
      <div className="videoslist__title">Music Videos</div>
      <ul>
        {props.videos?.map((video) => {
          return (
            <li className="videoslist__video-wrapper" key={video.id}>
              <video
                className="videoslist__video"
                poster={video.image}
                src={video.video}
                controls
              ></video>
              <div className="videoslist__description-wrapper">
              <p className="videoslist__description">{video.description}</p>
              <p className="videoslist__colon">: </p>
              <p className="videoslist__songname">{video.title}</p>
              </div>
              
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default VideosList;
