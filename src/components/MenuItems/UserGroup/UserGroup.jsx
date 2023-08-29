import React from 'react';
import { faFlagUsa, faUsers, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Container, Item, Logo, Circle } from './UserGroup.styled';
// import Button from './Button'; // Припустимо, ви маєте компонент Button

const UserGroup = () => {
  return (
    <Container>
        <Item>
        <Circle>
            <Logo icon={faFlagUsa} />
        </Circle>
            <h2>Guild</h2>
        </Item>
        <Item>
        <Circle>
            <Logo icon={faUsers} />
            </Circle>
            <h2>Party</h2>
        </Item>
        <Item>
            <Circle>
            <Logo icon={faUserPlus} />
            </Circle>
            <h2>Friends</h2>
        </Item>
    </Container>
  );
};

export default UserGroup;