import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { toggleLanguages } from '../../redux/actions/toggleLanguages'

const SwitchLanguage = ({statusColorTheme, toggleLanguages}) => {
    return (
        <Form.Check 
            type="switch"
            id="custom-switch"
            label="Check this switch"
            checked={statusLanguage == 'light'? '' : 'checked'}
            onChange={() => {
                toogleTheme(statusLanguage == 'light' ? 'dark' : 'light')
            }}
        />
    );
}

const mapStateToProps = (state) => ({
    statusLanguages: state.toggleLanguages.statusLanguage
})

const mapDispatchToProps = (dispatch) => ({
    toggleLanguages: (statusLanguages) => dispatch(toggleLanguages(statusLanguages)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SwitchTheme);