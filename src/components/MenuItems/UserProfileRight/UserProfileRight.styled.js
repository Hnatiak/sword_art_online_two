import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
    position: absolute;
    right: 860px;
    top: 370px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Logo = styled(FontAwesomeIcon)`
    width: 25px; 
    height: 25px;
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

    &.skills {
        position: relative;
    
        .arrow-icon {
          content: "";
          width: 65px;
          height: 65px;
          left: 120px;
          right: 0;
          position: absolute;
    
          /* стилі для іконки стрілки */
        }
      }
`;