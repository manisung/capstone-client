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
                poster={props.video.image}
                src={props.video.video}
                controls
              ></video>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default VideosList;
