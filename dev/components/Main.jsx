import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'

// Localization 
import languages from '../languages/languages'

const Main = ({statusLanguage}) => {
    languages.setLanguage (statusLanguage);
    return (<main>
        <Container className="py-5">
            <h1>{languages.firstTitle}</h1>
        </Container>
    </main>)
}

const mapStateToProps = (state) => {
    return {
        statusLanguage: state.toggleLanguages.statusLanguage
    }
}

export default connect(mapStateToProps)(Main);