import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { toggleLight } from '../../redux/actions/toggleLight'

const SwitchTheme = ({statusColorTheme, toggleLight}) => {
    return (
        <Form.Check 
            type="switch"
            id="custom-switch"
            label="Check this switch"
            checked={statusColorTheme == 'light'? '' : 'checked'}
            onChange={(e) => {
                toggleLight()
            }}
        />
    );
}

const mapStateToProps = (state) => ({
    statusColorTheme: state.statusColorTheme
})

const mapDispatchToProps = (dispatch) => ({
    toggleLight: () => dispatch(toggleLight()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SwitchTheme);