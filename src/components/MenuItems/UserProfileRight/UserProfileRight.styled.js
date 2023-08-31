// import styled from "@emotion/styled";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export const Container = styled.div`
//     // position: absolute;
//     // right: 860px;
//     // top: 370px;

//     position: fixed;
//     margin-left: 55px;
//     top: 320px;
//     display: flex;
//     flex-direction: column;
//     gap: 5px;
// `;

// export const Logo = styled(FontAwesomeIcon)`
//     width: 25px; 
//     height: 25px;
//     color: #696969;
// `;

// export const Circle = styled.div`
//   display: flex;
//   width: 45px;
//   height: 45px;
//   background: #272425;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
// `;

// export const Item = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 25px;
//     background: #6a686a;
//     padding: 10px 120px 10px 20px;
//     color: #343233;
// `;

// export const ItemActive = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 25px;
//     background: #eba601ff;
//     padding: 10px 120px 10px 20px;
//     color: white;
// `;


// export const Smscontainer = styled.div`
//     -webkit-transform: rotate(270deg);
//     display: block;
//     content: '';
//     width: 0;
//     height: 0;
//     border: 0 solid transparent;
//     position: absolute;
//     border-left: 26px solid transparent; /* Змінено ширину границі на 50px */
//     border-bottom: 50px solid #6a686a; /* Змінено ширину границі на 100px */
//     top: 62.5%;
//     left: -35px;
//     margin-top: -50px;
//     background: transparent;
//     border-right: 26px solid transparent; /* Змінено ширину границі на 50px */
// `;



import styled from "@emotion/styled";

export const Container = styled.div`
    // position: absolute;
    // right: 860px;
    // top: 370px;

    position: fixed;
    margin-left: 55px;
    top: 320px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Logo = styled.img`
    width: 45px; 
    height: 45px;
    color: #696969;
`;

export const Circle = styled.div`
  display: flex;
  width: 45px;
  height: 45px;
  background: #272425;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    background: #6a686a;
    padding: 10px 120px 10px 20px;
    color: #343233;
    cursor: pointer;
`;

export const ItemActive = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    background: #eba601ff;
    padding: 10px 120px 10px 20px;
    color: white;
    cursor: pointer;
`;


export const Smscontainer = styled.div`
    -webkit-transform: rotate(270deg);
    display: block;
    content: '';
    width: 0;
    height: 0;
    border: 0 solid transparent;
    position: absolute;
    border-left: 26px solid transparent; /* Змінено ширину границі на 50px */
    border-bottom: 50px solid #6a686a; /* Змінено ширину границі на 100px */
    top: 62.5%;
    left: -35px;
    margin-top: -50px;
    background: transparent;
    border-right: 26px solid transparent; /* Змінено ширину границі на 50px */
`;

// export const SmscontainerActive = styled.div`
//     -webkit-transform: rotate(270deg);
//     display: block;
//     content: '';
//     width: 0;
//     height: 0;
//     border: 0 solid transparent;
//     position: absolute;
//     border-left: 26px solid transparent; /* Змінено ширину границі на 50px */
//     border-bottom: 50px solid #eba601ff; /* Змінено ширину границі на 100px */
//     top: 62.5%;
//     left: -35px;
//     margin-top: -50px;
//     background: transparent;
//     border-right: 26px solid transparent; /* Змінено ширину границі на 50px */
// `;

export const SmscontainerActive = styled.div`
  -webkit-transform: rotate(270deg);
  display: block;
  content: '';
  width: 0;
  height: 0;
  border: 0 solid transparent;
  position: absolute;
  border-left: 26px solid transparent;
  border-bottom: 50px solid #eba601ff;
  top: 62.5%;
  left: -35px;
  margin-top: -50px;
  background: transparent;
  border-right: 26px solid transparent;
  animation: slidein 3s linear 1s infinite running;
`;

