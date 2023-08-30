import styled from "@emotion/styled";

export const Container = styled.div`
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

export const DescriptionContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const Icon = styled.img`
    width: 45px;
    height: 45px;
`;

export const Menu = styled.div`
    border: 1px solid;
    border-image: linear-gradient(to top, transparent, #f9f9f9 20%, #f9f9f9 80%, transparent) 0 0 0 1;
    max-height: 350px;
    top: -80px;

    position: absolute;
    left: 290px;
`;

export const MenuWrapper = styled.div`
    &::before {
        position: fixed;
        content: '';
        border-right: 35px solid #f9f9f9;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        left: 1694px;
        top: calc(32.2% - 20px);
    }

    &::after {
        position: fixed;
        content: '';
        border: 6px solid #333;
        border-radius: 50%;
        left: 1713px;
        top: calc(32% - 3px);
    }
`;

export const MenuList = styled.ul`
    list-style-type: none;
    margin: 0 5px;
    padding: 0;
    position: relative;
    max-height: 350px;
    overflow-y: auto;

    // ::-webkit-scrollbar {
    //     width: 10px;
    //   }

    //   ::-webkit-scrollbar-track {
    //     background: #f1f1f1;
    //   }

    //   ::-webkit-scrollbar-thumb {
    //     background: #888;
    //   }

    //   ::-webkit-scrollbar-thumb:hover {
    //     background: #555;
    //   }

    ::-webkit-scrollbar {
        width: 5px;
      }
      
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
      }
`;

// export const MenuListItem = styled.li`
//     display: flex;
//     background-color: #f9f9f9;
//     color: #494748;
//     width: 250px;
//     padding: 10px 20px;
//     margin-bottom: 5px;
//     cursor: pointer;
//     align-items: center;
//     ${props => props.isSelected ? `color: #eba601;` : `color: #6a686a; `}

//     &:last-child {
//         margin-bottom: 0;
//     }

//     &::hover {
//         cursor: pointer;
//         background-color: #eda60c;
//         color: #f9f9f9; 
//     }
// `;

export const MenuListItem = styled.li`
  display: flex;
  background-color: ${props => (props.isSelected ? '#eda60c' : '#f9f9f9')};
  color: ${props => (props.isSelected ? '#f9f9f9' : '#494748')};
  width: 250px;
  padding: 10px 20px;
  margin-bottom: 5px;
  cursor: pointer;
  align-items: center;
  ${props => (props.isSelected ? 'color: #f9f9f9;' : 'color: #6a686a;')}

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: #eda60c;
    color: #f9f9f9;
  }
`;