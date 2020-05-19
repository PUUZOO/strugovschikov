import React from 'react';
import SwitchTheme from './menu/SwitchTheme.jsx'
import { Container } from 'react-bootstrap'

const Header = ({children}) => {
    return <header className="py-5 ">
        <Container>
            <div className="d-block justify-content-between">
                <SwitchLanguage/>
                <SwitchTheme/>
            </div>
        </Container>
    </header>
} 

export default Header;
