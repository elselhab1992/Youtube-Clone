/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardInfo,
  Channel,
  ChannelName,
  CheckCircle,
} from "./VideoCardStyles";
import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoProfilePicture,
} from "../../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardImg
          src={snippet?.thumbnails?.high?.url}
          alt={snippet?.title.slice(0, 60)}
        />
      </Link>
      <CardInfo>
        <Link to={videoId ? `/video/${videoId}` : demoVideoTitle}>
          <h4>{snippet?.title.slice(0, 60)}</h4>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <ChannelName>
            <Channel>{snippet?.channelTitle || demoChannelTitle}</Channel>
            <CheckCircle />
          </ChannelName>
        </Link>
      </CardInfo>
    </Card>
  );
};

export default VideoCard;
