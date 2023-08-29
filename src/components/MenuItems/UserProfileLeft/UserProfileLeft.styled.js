import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
    position: absolute;
    left: 860px;
    box-shadow: 0 0 10px rgba(0, 6, 0, 0.8);
    top: 180px;
    display: flex;
    flex-direction: column;
`;

export const Logo = styled(FontAwesomeIcon)`
    width: 275px;
    height: 275px;
    color: #272425;
`;

export const LogoHover = styled(FontAwesomeIcon)`
    width: 275px;
    height: 275px;
    filter: drop-shadow(0px 140px 10px rgba(0, 0, 0, 0.3)); /* Додає тінь знизу */
    transform: scaleY(-1); /* Відзеркалення */
    clip-path: polygon(0% 100%, 100% 100%, 100% 95%, 0% 95%);
`;

export const CircleOne = styled(FontAwesomeIcon)`
    width: 15px;
    height: 15px;
`;

export const CircleTwo = styled(FontAwesomeIcon)`
    width: 18px;
    height: 18px;
`;


export const CircleContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.regular ? '#d6d6d6' : '#6a686a')};
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const Item = styled.div`
    align-items: center;
    gap: 25px;
    width: 280px;
    height: 535px;
    background: white;
    padding: 20px;
`;

export const Name = styled.h3`
    border-bottom: 2px solid #6a686a;
    padding-bottom: 15px;
    display: flex;
    justify-content: center;
    margin-bottom: 55px;
`;
