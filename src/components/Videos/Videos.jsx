/* eslint-disable react/prop-types */
import { ChannelCard, VideoCard } from "../index";
import { Section } from "./VideosStyles";

const Videos = ({ videos }) => {
  console.log(videos);

  return (
    <Section>
      {videos.map((video, index) => {
        return (
          <div key={index}>
            {video.id.videoId && <VideoCard video={video} />}
            {video.id.channelId && <ChannelCard details={video} />}
          </div>
        );
      })}
    </Section>
  );
};

export default Videos;
