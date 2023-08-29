import React from 'react';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { Container, Item, Logo, LogoHover, Name } from './UserProfileLeft.styled';
// import Button from './Button'; // Припустимо, ви маєте компонент Button

const UserProfileRight = () => {
  return (
    <Container>
        <Item>
            <Name>Name</Name>
            <Logo icon={faPerson} sharp />
            <LogoHover icon={faPerson} />
            {/* <CircleOne icon={faCircle}><CircleTwo icon={faCircle} regular /></CircleOne> */}
        </Item>
        <div style={{ background: '#d6d6d6ff'}}>
            <h1>DESCRIPTION</h1>
        </div>
    </Container>
  );
};

export default UserProfileRight;