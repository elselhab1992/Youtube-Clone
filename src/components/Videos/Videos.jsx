/* eslint-disable react/prop-types */
import { ChannelCard, VideoCard } from "../index";
import { Section, VideoContainer } from "./VideosStyles";

const Videos = ({ videos }) => {
  console.log(videos);

  return (
    <Section>
      {videos.map((video, index) => {
        return (
          <VideoContainer key={index}>
            {video.id.videoId && <VideoCard video={video} />}
            {video.id.channelId && <ChannelCard details={video} />}
          </VideoContainer>
        );
      })}
    </Section>
  );
};

export default Videos;
