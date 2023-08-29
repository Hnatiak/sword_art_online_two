import React from 'react';
import { faPen, faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Container, Item, Logo, Circle } from './UserProfileRight.styled';
// import Button from './Button'; // Припустимо, ви маєте компонент Button

const UserProfileRight = () => {
  return (
    <Container>
        <Item>
          <Circle>
            <Logo icon={faBriefcase} sharp />
          </Circle>
            <h2>Items</h2>
        </Item>
        <Item>
          <Circle>
            <Logo icon={faUser} />
          </Circle>
            <h2>Skills</h2>
        </Item>
        <Item>
          <Circle>
            <Logo icon={faPen} style={{ transform: 'rotate(135deg)', marginTop: '10px', clipPath: 'polygon(0% 100%, 100% 100%, 75% 35%, 30% 0%)' }} />
          </Circle>
            <h2>Equipment</h2>
        </Item>
    </Container>
  );
};

export default UserProfileRight;