import React from 'react';
import SwitchTheme from './menu/SwitchTheme.jsx'
import { Container } from 'react-bootstrap'

const Header = ({children}) => {
    return <header className="py-5 ">
        <Container>
            <SwitchTheme />
        </Container>
    </header>
} 

export default Header;
