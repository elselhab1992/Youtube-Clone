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

const ChannelLogo = styled.div`
  margin-top: -100px;
`;

const ChannelVideos = styled.div`
  padding: 2rem 0;
`;

export { Section, ChannelLogo, ChannelVideos };
