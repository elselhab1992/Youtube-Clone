/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { ChannelCard, VideoCard } from "../index";
import { Div, Loading, Section, VideoContainer } from "./VideosStyles";

const Videos = ({ videos }) => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <Div>
        <Loading />
      </Div>
    );
  }

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
