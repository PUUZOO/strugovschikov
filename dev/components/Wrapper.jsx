import React from 'react';
import {connect} from 'react-redux';

const Wrapper = ({children, statusColorTheme}) => {
    let invertColorTheme = statusColorTheme == 'dark' ? 'light' : 'dark';
    return (<div className={`wrapper bg-${statusColorTheme} text-${invertColorTheme}`}> 
                {children}
            </div>)
}

const mapStateToProps = (state) => ({statusColorTheme: state.toggleTheme.statusColorTheme})

export default connect(mapStateToProps)(Wrapper);
