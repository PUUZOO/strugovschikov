import React from'react';

function StatusMenu(props)
{
    return (
       <div className={`alert alert-secondary ${props.className}`}></div>
    );
}

export default StatusMenu;