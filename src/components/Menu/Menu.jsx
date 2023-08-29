import React, { useState } from 'react'; // { useState } 
import {
  Container,
  MenuList,
  MenuItem,
  Border,
} from './Menu.styled';  // Попередньо визначені стилі для компонента
import { faUser, faUserGroup, faComments, faMapLocationDot, faGear } from '@fortawesome/free-solid-svg-icons';
import hoverSound from '../sounds/SAO_Menu_SFX.mp3';

const Menu = () => {
  const [userInteracted, setUserInteracted] = useState(false);
  const audio = new Audio(hoverSound);

  const playHoverSound = () => {
    if (userInteracted) {
      audio.play();
    }
  };

  const handleMenuItemMouseEnter = () => {
    playHoverSound();
  };

  const handlePageClick = () => {
    setUserInteracted(true);
  };

  return (
    <Container onClick={handlePageClick}>
      <MenuList>
        <Border onClick={handleMenuItemMouseEnter}>
            <MenuItem icon={faUser} data-isfirstorlast="true" />
        </Border>
            <Border onClick={handleMenuItemMouseEnter}>
                <MenuItem icon={faUserGroup} />
            </Border>
            <Border onClick={handleMenuItemMouseEnter}>
                <MenuItem icon={faComments} />
            </Border>
            <Border onClick={handleMenuItemMouseEnter}>
                <MenuItem icon={faMapLocationDot} />
            </Border>
            <Border onClick={handleMenuItemMouseEnter}>
                <MenuItem icon={faGear} data-isfirstorlast="true" />
            </Border>
      </MenuList>
    </Container>
  );
};

export default Menu;
