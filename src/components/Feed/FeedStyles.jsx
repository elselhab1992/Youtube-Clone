import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr 6fr;
  gap: 1rem;

  @media (min-width: 300px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 8fr;
  }
`;

const SideContainer = styled.div`
  border-right: 1px solid ${(props) => props.theme.colors.grey};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  @media (min-width: 300px) {
    flex-direction: row;
    justify-content: flex-start;
    height: 50px;
    overflow-y: auto;
    gap: 0.5rem;
  }

  @media (min-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    gap: 1rem;
    overflow-y: unset;
  }
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.secondary};
`;

const Copyright = styled.p`
  @media (max-width: 768px) {
    display: none;
  }
`;

export { Section, SideContainer, Span, Copyright };
