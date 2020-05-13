import React from 'react'
import { connect } from 'react-redux'
import { toggleLight } from '../../redux/actions/toggleLight'

import Button from 'react-bootstrap/Button';

const EditStatus = ({status, toggleLight }) => (
    <Button variant="outline-secondary" onClick={() => toggleLight()}>Поменять статус</Button> 
)

const mapStateToProps = (state) => ({
    status: state.status,
});

export default connect(mapStateToProps, {toggleLight})(EditStatus);