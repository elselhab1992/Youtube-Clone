import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 6fr;
  gap: 1rem;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 6fr;
  }
`;

const SideContainer = styled.div`
  border-right: 1px solid ${(props) => props.theme.colors.grey};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 300px) {
    justify-content: flex-start;
  }

  @media (min-width: 1200px) {
    justify-content: center;
  }
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.secondary};
`;

export { Section, SideContainer, Span };
