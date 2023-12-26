import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 300px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 12rem;
  padding: 7px 10px;
  background-color: transparent;
  border-radius: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeight.extraBold};
  border: none;
  transition: 700ms;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.secondary};
    opacity: 0.8;
    cursor: pointer;
  }
`;

export { Container, Button };
