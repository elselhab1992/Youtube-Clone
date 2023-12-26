import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;

  @media (min-width: 300px) {
    padding: 10px;
  }

  @media (min-width: 1200px) {
    padding: 1rem 3rem;
  }
`;

const Logo = styled.img`
  width: 80px;

  @media (min-width: 300px) {
    width: 70px;
  }

  @media (min-width: 768px) {
    width: 80px;
  }
`;

export { Nav, Logo };
