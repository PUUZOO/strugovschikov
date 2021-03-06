import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { toogleTheme } from '../../redux/actions/toggleTheme'

const SwitchTheme = ({statusColorTheme, toogleTheme}) => {
    return (
        <Form.Check 
            type="switch"
            id="custom-switch"
            label="Check this switch"
            checked={statusColorTheme == 'light'? '' : 'checked'}
            onChange={() => {
                toogleTheme(statusColorTheme == 'light' ? 'dark' : 'light')
            }}
        />
    );
}

const mapStateToProps = (state) => ({
    statusColorTheme: state.toggleTheme.statusColorTheme
})

const mapDispatchToProps = (dispatch) => ({
    toogleTheme: (statusColorTheme) => dispatch(toogleTheme(statusColorTheme)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SwitchTheme);