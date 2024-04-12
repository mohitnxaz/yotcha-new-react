import ReactPlayer from "react-player";
import { PropertyVideoProp } from "../../types";
const PropertyVideo: React.FC<PropertyVideoProp> = ({
  url,
  backgroundImage,
}) => {
  return (
    <div>
      <ReactPlayer
        // playIcon={<Image src={playButton} alt={""} />}

        width={"100%"}
        height={"494px"}
        url={url}
        light={backgroundImage}
      />
    </div>
  );
};

export default PropertyVideo;
