import styled from "styled-components";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (min-width: 300px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const VideoContainer = styled.div`
  width: 350px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15rem 0;
  text-align: center;
`;

const Loading = styled(AiOutlineLoading3Quarters)`
  color: ${(props) => props.theme.colors.primary};
  border-style: solid;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: relative;
  -webkit-animation: spin 1s infinite;
  animation: spin 1s infinite;

  &:before,
  &:after {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    position: absolute;
    left: 0.125rem;
  }

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { Section, VideoContainer, Div, Loading };
