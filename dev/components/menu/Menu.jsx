import React from'react';
import Button from 'react-bootstrap/Button';

import { connect } from 'react-redux'
import { toggleLight } from '../../redux/actions/toggleLight'

function Menu(props)
{
    return (
        <Button variant="outline-secondary" onClick={() => {
            props.toggleLight()
        }}>Secondary</Button>
    );
}

export default connect(
    null,
    { toggleLight }
  )(Menu)