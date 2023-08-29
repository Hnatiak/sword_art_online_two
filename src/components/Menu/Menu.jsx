// import React from 'react';
// import {
//   Container,
//   MenuList,
//   MenuItem,
//   Border,
// } from './Menu.styled';  // Попередньо визначені стилі для компонента
// import { faUser, faUserGroup, faComments, faMapLocationDot, faGear } from '@fortawesome/free-solid-svg-icons';
// import hoverSound from '../sounds/SAO_Menu_SFX.mp3';


// const Menu = () => {
//     const audio = new Audio(hoverSound);

//   const playHoverSound = () => {
//     audio.play();
//   };

//   const handleMenuItemMouseEnter = () => {
//     playHoverSound();
//   };

//   return (
//     <Container>
//       <MenuList>
//         <Border onMouseEnter={handleMenuItemMouseEnter}>
//             <MenuItem icon={faUser} data-isfirstorlast="true" />
//         </Border>
//         <Border onMouseEnter={handleMenuItemMouseEnter}>
//             <MenuItem icon={faUserGroup} />
//         </Border>
//         <Border onMouseEnter={handleMenuItemMouseEnter}>
//             <MenuItem icon={faComments} />
//         </Border>
//         <Border onMouseEnter={handleMenuItemMouseEnter}>
//             <MenuItem icon={faMapLocationDot} />
//         </Border>
//         <Border onMouseEnter={handleMenuItemMouseEnter}>
//             <MenuItem icon={faGear} data-isfirstorlast="true" />
//         </Border>
//       </MenuList>
//     </Container>
//   );
// };

// export default Menu;


// щудшаруа

import React from 'react'; // { useState } 
import {
  Container,
  MenuList,
  MenuItem,
  Border,
} from './Menu.styled';  // Попередньо визначені стилі для компонента
import { faUser, faUserGroup, faComments, faMapLocationDot, faGear } from '@fortawesome/free-solid-svg-icons';
// import hoverSound from '../sounds/SAO_Menu_SFX.mp3';

const Menu = () => {
//   const [userInteracted, setUserInteracted] = useState(false);
//   const audio = new Audio(hoverSound);

//   const playHoverSound = () => {
//     if (userInteracted) {
//       audio.play();
//     }
//   };

//   const handleMenuItemMouseEnter = () => {
//     playHoverSound();
//   };

//   const handlePageClick = () => {
//     setUserInteracted(true);
//   };

  return (
    <Container> 
        {/* onClick={handlePageClick} */}
      <MenuList>
        <Border>
            {/* onClick={handleMenuItemMouseEnter}> */}
            <MenuItem icon={faUser} data-isfirstorlast="true" />
        </Border>
            <Border>
                <MenuItem icon={faUserGroup} />
            </Border>
            <Border>
                <MenuItem icon={faComments} />
            </Border>
            <Border>
                <MenuItem icon={faMapLocationDot} />
            </Border>
            <Border>
                <MenuItem icon={faGear} data-isfirstorlast="true" />
            </Border>
      </MenuList>
    </Container>
  );
};

export default Menu;
