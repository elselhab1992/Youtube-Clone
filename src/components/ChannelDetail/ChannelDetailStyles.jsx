import styled from "styled-components";

const Section = styled.section`
  padding: 0 10rem;

  @media (min-width: 300px) {
    padding: 10px;
  }

  @media (min-width: 1200px) {
    padding: 0 10rem;
  }
`;

const ChannelBackground = styled.div`
  height: 300px;

  background: linear-gradient(
    90deg,
    rgba(0, 238, 247, 1) 0%,
    rgba(206, 3, 184, 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
  z-index: 10;

  @media (min-width: 300px) {
    height: 150px;
  }

  @media (min-width: 768px) {
    height: 200px;
  }

  @media (min-width: 1200px) {
    height: 300px;
  }
`;

const ChannelLogo = styled.div`
  margin-top: -100px;
`;

const ChannelVideos = styled.div`
  padding: 2rem 0;
`;

export { Section, ChannelLogo, ChannelVideos, ChannelBackground };
