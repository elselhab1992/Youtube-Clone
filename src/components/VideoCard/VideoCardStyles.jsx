import styled from "styled-components";
import { IoCheckmarkCircle } from "react-icons/io5";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 380px;
  height: 370px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
  padding: 1rem;
  background-color: #1e1e1e;
  width: 100%;
  height: 150px;
`;

const ChannelName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Channel = styled.p`
  color: grey;
  font-weight: ${(props) => props.theme.fontWeight.medium};
`;

const CheckCircle = styled(IoCheckmarkCircle)`
  color: grey;
`;

export { Card, CardInfo, ChannelName, Channel, CheckCircle };
