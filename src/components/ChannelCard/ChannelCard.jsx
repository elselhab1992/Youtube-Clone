/* eslint-disable react/prop-types */
import { demoProfilePicture } from "../../utils/constants";
import { Link } from "react-router-dom";
import { ChannelLogo } from "./ChannelCardStyles";
import { CheckCircle, ChannelName } from "../VideoCard/VideoCardStyles";

const ChannelCard = ({ details }) => {
  console.log(details);

  return (
    <ChannelLogo>
      <Link to={`/channel/${details?.id?.channelId}`}>
        <img
          src={details?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={details?.snippet?.title}
          width={250}
          height={250}
          style={{ borderRadius: "50%" }}
        />
      </Link>
      <Link to={`/channel/${details?.id?.channelId}`}>
        <ChannelName>
          <h3 style={{ color: "grey" }}>{details?.snippet?.title}</h3>
          <CheckCircle />
        </ChannelName>
      </Link>
      {details?.statistics?.subscriberCount && (
        <p style={{ color: "grey" }}>
          {parseInt(details?.statistics?.subscriberCount).toLocaleString()}
          <span style={{ marginLeft: 5 }}>Subscribers</span>
        </p>
      )}
    </ChannelLogo>
  );
};

export default ChannelCard;
