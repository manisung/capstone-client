import "./VideosList.scss";

function VideosList(props) {
  return (
    <div>
      <ul>
        {props.videos?.map((video) => {
          return (
            <li key={video.id}>
              <video
                className=""
                poster={video.image}
                src={video.video}
                controls
              ></video>
              <p>{video.title}</p>
              <p>{video.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default VideosList;
