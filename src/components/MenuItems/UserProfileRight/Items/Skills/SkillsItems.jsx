// import React, { useState } from 'react';
// import circleContent from '../../../UserProfileLeft/circleContent';
// import { Container, Menu, MenuList, MenuListItem, MenuWrapper, Icon, DescriptionContainer } from './SkillsItems.styled';
// import hoverSound from '../../../../sounds/SAO_Menu_SFX.mp3';

// const SkillsItems = () => {
//   const [selectedCircleId, setSelectedCircleId] = useState(6); // Початкове значення може бути null
//   const [userInteracted, setUserInteracted] = useState(false);
//   const audio = new Audio(hoverSound);
//   const [isPlayingSound, setIsPlayingSound] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const playHoverSound = () => {
//     if (userInteracted && !isPlayingSound) {
//       setIsPlayingSound(true);
//       audio.play();
//       setTimeout(() => {
//         setIsPlayingSound(false);
//       }, 1000);
//     }
//   };

//   const handleMenuItemClick = (circleId) => {
//     setSelectedCircleId(circleId); // Встановлюємо вибраний id при кліку на елемент
//     setSelectedItem(circleId);
//     playHoverSound();
//   };

//   const handlePageClick = () => {
//     setUserInteracted(true);
//   };

//   return (
//     <Container onClick={handlePageClick}>
//       <Menu>
//         <MenuWrapper>
//           <MenuList>
//             {circleContent.map(circle => (
//               <MenuListItem key={circle.id} onClick={() => handleMenuItemClick(circle.id)}>
//                 <DescriptionContainer>
//                   <Icon src={circle.icon} alt="Icon" />
//                   <div>{circle.title}</div>
//                 </DescriptionContainer>
//               </MenuListItem>
//             ))}
//           </MenuList>
//         </MenuWrapper>
//       </Menu>
//     </Container>
//   );
// };

// export default SkillsItems;


import React, { useState } from 'react';
import circleContent from '../../../UserProfileLeft/circleContent';
import { Container, Menu, MenuList, MenuListItem, MenuWrapper, Icon, DescriptionContainer } from './SkillsItems.styled';
import hoverSound from '../../../../sounds/SAO_Menu_SFX.mp3';

const SkillsItems = () => {
  const [, setSelectedCircleId] = useState(6); // Початкове значення може бути null
  const [userInteracted, setUserInteracted] = useState(false);
  const audio = new Audio(hoverSound);
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const playHoverSound = () => {
    if (userInteracted && !isPlayingSound) {
      setIsPlayingSound(true);
      audio.play();
      setTimeout(() => {
        setIsPlayingSound(false);
      }, 1000);
    }
  };

  const handleMenuItemClick = (circleId) => {
    if (selectedItem === circleId) {
      // Якщо вже вибрано цей пункт, зніміть виділення
      setSelectedItem(null);
    } else {
      // Інакше встановіть вибраний пункт
      setSelectedCircleId(circleId);
      setSelectedItem(circleId);
    }
    playHoverSound();
  };

  const handlePageClick = () => {
    setUserInteracted(true);
  };

  return (
    <Container onClick={handlePageClick}>
      <Menu>
        <MenuWrapper>
          <MenuList>
            {circleContent.map(circle => (
              <MenuListItem
                key={circle.id}
                isSelected={selectedItem === circle.id}
                onClick={() => handleMenuItemClick(circle.id)}
              >
                <DescriptionContainer>
                  <Icon src={circle.icon} alt="Icon" />
                  <div>{circle.title}</div>
                </DescriptionContainer>
              </MenuListItem>
            ))}
          </MenuList>
        </MenuWrapper>
      </Menu>
    </Container>
  );
};

export default SkillsItems;