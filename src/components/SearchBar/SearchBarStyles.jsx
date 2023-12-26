import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: 30px;
  width: 20%;
  padding: 10px;

  @media (min-width: 300px) {
    width: 60%;
  }

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 40%;
  }

  @media (min-width: 1200px) {
    width: 20%;
  }
`;

const Input = styled.input`
  width: 90%;
  border: none;
  outline: none;
  font-weight: ${(props) => props.theme.fontWeight.extraBold};
`;

const SearchIcon = styled(IoSearch)`
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.colors.secondary};

  &:hover {
    cursor: pointer;
  }
`;

export { Form, Input, SearchIcon };
