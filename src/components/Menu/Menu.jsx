// import React, { useState } from 'react';
// import { Container, MenuList, MenuItem, Border, ActiveMenuItem, BorderActive } from './Menu.styled';
// import { faUser, faUserGroup, faComments, faMapLocationDot, faGear } from '@fortawesome/free-solid-svg-icons';
// import hoverSound from '../sounds/SAO_Menu_SFX.mp3';
// import UserProfileRight from '../MenuItems/UserProfileRight/UserProfileRight';
// import UserProfileLeft from '../MenuItems/UserProfileLeft/UserProfileLeft';
// import UserGroup from '../MenuItems/UserGroup/UserGroup';
// // import Comments from '../MenuItems/Comments/Comments';
// // import MapLocation from '../MenuItems/MapLocation/MapLocation';
// import Settings from '../MenuItems/Settings/Settings';

// const Menu = () => {
//   const [userInteracted, setUserInteracted] = useState(false);
//   const [activeMenuItem, setActiveMenuItem] = useState(null); // Доданий стан для активного пункту меню
//   const audio = new Audio(hoverSound);

//   const playHoverSound = () => {
//     if (userInteracted) {
//       audio.play();
//     }
//   };

//   const handleMenuItemMouseEnter = (menuItem) => {
//     playHoverSound();
//     if (activeMenuItem === menuItem) {
//       setActiveMenuItem(null);
//     } else {
//       setActiveMenuItem(menuItem);
//     }
//   };

//   const handlePageClick = () => {
//     setUserInteracted(true);
//   };

//   return (
//     <>
//       <Container onClick={handlePageClick}>
//         <MenuList>
//           {activeMenuItem === 'user' ? (
//             <>
//               <BorderActive onClick={() => handleMenuItemMouseEnter('user')}>
//                 <ActiveMenuItem icon={faUser} data-isfirstorlast="true" />
//               </BorderActive>
//               <UserProfileLeft /> {/* Додано компонент UserProfileLeft */}
//               <UserProfileRight />
//             </>
//           ) : (
//             <Border onClick={() => handleMenuItemMouseEnter('user')}>
//               <MenuItem icon={faUser} data-isfirstorlast="true" />

//             </Border>
//           )}
//           {activeMenuItem === 'userGroup' ? (
//               <BorderActive onClick={() => handleMenuItemMouseEnter('userGroup')}>
//                 <ActiveMenuItem icon={faUserGroup} data-isfirstorlast="true" />
//               </BorderActive>
//             ) : (
//               <Border onClick={() => handleMenuItemMouseEnter('userGroup')}>
//                 <MenuItem icon={faUserGroup} data-isfirstorlast="true" />
//               </Border>
//             )}
//             {activeMenuItem === 'userGroup' && <UserGroup />}
//           <Border onClick={() => handleMenuItemMouseEnter('comments')}>
//             <MenuItem icon={faComments} />
//           </Border>
//           <Border onClick={() => handleMenuItemMouseEnter('mapLocation')}>
//             <MenuItem icon={faMapLocationDot} />
//           </Border>
//           {activeMenuItem === 'settings' ? (
//               <BorderActive onClick={() => handleMenuItemMouseEnter('settings')}>
//                 <ActiveMenuItem icon={faGear} data-isfirstorlast="true" />
//               </BorderActive>
//             ) : (
//               <Border onClick={() => handleMenuItemMouseEnter('settings')}>
//                 <MenuItem icon={faGear} data-isfirstorlast="true" />
//               </Border>
//             )}
//         </MenuList>
//       </Container>
//       {activeMenuItem === 'user' && <UserProfileRight />}
//       {activeMenuItem === 'user' && <UserProfileLeft />}
//       {activeMenuItem === 'userGroup' && <UserGroup />}
//       {activeMenuItem === 'settings' && <Settings />}
//     </>
//   );
// };

// export default Menu;


import React, { useState } from 'react';
import { Container, MenuList, MenuItem, } from './Menu.styled';
import hoverSound from '../sounds/SAO_Menu_SFX.mp3';
import UserProfileRight from '../MenuItems/UserProfileRight/UserProfileRight';
import UserProfileLeft from '../MenuItems/UserProfileLeft/UserProfileLeft';
import UserGroup from '../MenuItems/UserGroup/UserGroup';
import Settings from '../MenuItems/Settings/Settings';
import { MenuProvider } from './MenuContext';

import User from './images/User.png'
import UserGray from './images/UserGray.png'

import GroupTeam from './images/GroupTeam.png';
import GroupTeamGray from './images/GroupTeamGray.png';

import Chat from './images/Chat.png'
import ChatGray from './images/ChatGray.png'

import Location from './images/Location.png'
import LocationGray from './images/LocationGray.png'

import SettingsImg from './images/Settings.png'
import SettingsGray from './images/SettingsGray.png'
import SkillsItems from '../MenuItems/UserProfileRight/Items/Skills/SkillsItems';

const Menu = () => {
  const [userInteracted, setUserInteracted] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const audio = new Audio(hoverSound);
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  // const [selectedCircleId, setSelectedCircleId] = useState(null); // Початкове значення може бути null

  const playHoverSound = () => {
    if (userInteracted && !isPlayingSound) {
      setIsPlayingSound(true);
      audio.play();
      setTimeout(() => {
        setIsPlayingSound(false);
      }, 1000);
    }
  };

  const handleMenuItemMouseEnter = (menuItem) => {
    playHoverSound();
    if (activeMenuItem === menuItem) {
      setActiveMenuItem(null);
    } else {
      setActiveMenuItem(menuItem);
    }
  };

  const handleMenuItemClick = (menuItem) => {
    playHoverSound();
    if (activeMenuItem === menuItem) {
      setActiveMenuItem(null);
    } else {
      setActiveMenuItem(menuItem);
    }
  };

  const handlePageClick = () => {
    setUserInteracted(true);
  };

  return (
    <>
      <Container onClick={handlePageClick}>
        <MenuList>

          {activeMenuItem === 'user' ? (
            <div style={{ display: 'flex' }}>
              <div onClick={() => handleMenuItemClick('user')}>
                <MenuItem src={User} alt="User" />
              </div>
              <div>
                  <UserProfileRight />
              </div>
            </div>
          ) : (
            <div onClick={() => handleMenuItemClick('user')}>
              <MenuItem src={UserGray} alt="UserGray" />
            </div>
          )}

          {activeMenuItem === 'userGroup' ? (
              <div style={{ display: 'flex'}} >
                <div onClick={() => handleMenuItemClick('userGroup')}>
                  <MenuItem src={GroupTeam} alt="GroupTeam" />
                </div>
                <div>
                  <UserGroup />
                </div>
              </div>
          ) : (
            <div onClick={() => handleMenuItemMouseEnter('userGroup')}>
              <MenuItem src={GroupTeamGray} alt="GroupTeamGray" />
            </div>
          )}



          {activeMenuItem === 'chat' ? (
            <>
              <div>
                <MenuItem src={Chat} alt="Chat" onClick={() => handleMenuItemClick('chat')} />
              </div>
            </>
          ) : (
            <div onClick={() => handleMenuItemMouseEnter('chat')}>
              <MenuItem src={ChatGray} alt="ChatGray" />
            </div>
          )}



          {activeMenuItem === 'location' ? (
            <>
              <div>
                <MenuItem src={Location} alt="Location" onClick={() => handleMenuItemClick('location')} />
              </div>
            </>
          ) : (
            <div onClick={() => handleMenuItemMouseEnter('location')}>
              <MenuItem src={LocationGray} alt="LocationGray" />
            </div>
          )}



          {activeMenuItem === 'settings' ? (
            <div style={{ display: 'flex'}} >
              <div onClick={() => handleMenuItemClick('settings')}>
                <MenuItem src={SettingsImg} alt="Settings" />
              </div>
              <div>
                <Settings />
              </div>
            </div>
          ) : (
            <div onClick={() => handleMenuItemMouseEnter('settings')}>
              <MenuItem src={SettingsGray} alt="SettingsGray" />
            </div>
          )}
        </MenuList>
      </Container>
    </>
  );
};

export default Menu;
