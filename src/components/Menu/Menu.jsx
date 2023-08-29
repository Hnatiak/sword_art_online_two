// import React, { useState } from 'react'; // { useState } 
// import {
//   Container,
//   MenuList,
//   MenuItem,
//   Border,
//   // Sound,
//   // SoundContainer,
//   // IconsContainer,
// } from './Menu.styled';  // Попередньо визначені стилі для компонента
// import { faUser, faUserGroup, faComments, faMapLocationDot, faGear } from '@fortawesome/free-solid-svg-icons'; // faVolumeHigh
// import hoverSound from '../sounds/SAO_Menu_SFX.mp3';
// import UserProfile from '../MenuItems/UserProfile/UserProfile';

// const Menu = () => {
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

//   return (
//     <>
//       <Container onClick={handlePageClick}>
//         {/* <IconsContainer> */}
//         <MenuList>
//           <Border onClick={handleMenuItemMouseEnter}>
//               <MenuItem icon={faUser} data-isfirstorlast="true" />
//               {/* <UserProfile onClick={() => handleMenuItemMouseEnter('user')} /> */}
//           </Border>
//           <Border onClick={handleMenuItemMouseEnter}>
//               <MenuItem icon={faUserGroup} />
//           </Border>
//           <Border onClick={handleMenuItemMouseEnter}>
//               <MenuItem icon={faComments} />
//           </Border>
//           <Border onClick={handleMenuItemMouseEnter}>
//               <MenuItem icon={faMapLocationDot} />
//           </Border>
//           <Border onClick={handleMenuItemMouseEnter}>
//               <MenuItem icon={faGear} data-isfirstorlast="true" />
//           </Border>
//         </MenuList>
//       </Container>
//     </>
//   );
// };

// export default Menu;


import React, { useState } from 'react';
import { Container, MenuList, MenuItem, Border, ActiveMenuItem, BorderActive } from './Menu.styled';
import { faUser, faUserGroup, faComments, faMapLocationDot, faGear } from '@fortawesome/free-solid-svg-icons';
import hoverSound from '../sounds/SAO_Menu_SFX.mp3';
import UserProfileRight from '../MenuItems/UserProfileRight/UserProfileRight';
import UserProfileLeft from '../MenuItems/UserProfileLeft/UserProfileLeft';
import UserGroup from '../MenuItems/UserGroup/UserGroup';
// import Comments from '../MenuItems/Comments/Comments';
// import MapLocation from '../MenuItems/MapLocation/MapLocation';
import Settings from '../MenuItems/Settings/Settings';

const Menu = () => {
  const [userInteracted, setUserInteracted] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null); // Доданий стан для активного пункту меню
  const audio = new Audio(hoverSound);

  const playHoverSound = () => {
    if (userInteracted) {
      audio.play();
    }
  };

  const handleMenuItemMouseEnter = (menuItem) => { // Оновлений обробник подій
    playHoverSound();
    // setActiveMenuItem(menuItem); // Встановлення активного пункту меню

    if (activeMenuItem !== menuItem) {
      setActiveMenuItem(null);
    }

    // Встановлення активного пункту меню
    setActiveMenuItem(menuItem);
  };

  const handlePageClick = () => {
    setUserInteracted(true);
  };

  return (
    <>
      <Container onClick={handlePageClick}>
        <MenuList>
          {/* {activeMenuItem === 'user' ? (
              <BorderActive onClick={() => handleMenuItemMouseEnter('user')}>
                <ActiveMenuItem icon={faUser} data-isfirstorlast="true" />
              </BorderActive>
            ) : (
              <Border onClick={() => handleMenuItemMouseEnter('user')}>
                <MenuItem icon={faUser} data-isfirstorlast="true" />
              </Border>
            )}
          {activeMenuItem === 'user' && <UserProfileRight />} */}
          {activeMenuItem === 'user' ? (
            <>
              <BorderActive onClick={() => handleMenuItemMouseEnter('user')}>
                <ActiveMenuItem icon={faUser} data-isfirstorlast="true" />
              </BorderActive>
              <UserProfileLeft /> {/* Додано компонент UserProfileLeft */}
              <UserProfileRight />
            </>
          ) : (
            <Border onClick={() => handleMenuItemMouseEnter('user')}>
              <MenuItem icon={faUser} data-isfirstorlast="true" />
            </Border>
          )}
          {/* <Border onClick={() => handleMenuItemMouseEnter('userGroup')}>
            <MenuItem icon={faUserGroup} />
          </Border> */}
          {activeMenuItem === 'userGroup' ? (
              <BorderActive onClick={() => handleMenuItemMouseEnter('userGroup')}>
                <ActiveMenuItem icon={faUserGroup} data-isfirstorlast="true" />
              </BorderActive>
            ) : (
              <Border onClick={() => handleMenuItemMouseEnter('userGroup')}>
                <MenuItem icon={faUserGroup} data-isfirstorlast="true" />
              </Border>
            )}
            {activeMenuItem === 'userGroup' && <UserGroup />}
          <Border onClick={() => handleMenuItemMouseEnter('comments')}>
            <MenuItem icon={faComments} />
          </Border>
          <Border onClick={() => handleMenuItemMouseEnter('mapLocation')}>
            <MenuItem icon={faMapLocationDot} />
          </Border>
          {/* <Border onClick={() => handleMenuItemMouseEnter('settings')}>
            <MenuItem icon={faGear} data-isfirstorlast="true" />
          </Border> */}
          {activeMenuItem === 'settings' ? (
              <BorderActive onClick={() => handleMenuItemMouseEnter('settings')}>
                <ActiveMenuItem icon={faGear} data-isfirstorlast="true" />
              </BorderActive>
            ) : (
              <Border onClick={() => handleMenuItemMouseEnter('settings')}>
                <MenuItem icon={faGear} data-isfirstorlast="true" />
              </Border>
            )}
        </MenuList>
      </Container>
      {activeMenuItem === 'user' && <UserProfileRight />}
      {activeMenuItem === 'user' && <UserProfileLeft />}
      {activeMenuItem === 'userGroup' && <UserGroup />}
      {activeMenuItem === 'settings' && <Settings />}
    </>
  );
};

export default Menu;
