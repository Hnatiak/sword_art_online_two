import React from 'react';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Container, Item, Logo, Circle } from './Settings.styled';
// import Button from './Button'; // Припустимо, ви маєте компонент Button

const Settings = () => {
  return (
    <Container>
        <Item>
            <Circle>
                <Logo icon={faRightFromBracket}/>
            </Circle>
            <h2>Exit</h2>
        </Item>
    </Container>
  );
};

export default Settings;