import React from'react';
import { connect } from 'react-redux'

const StatusColorTheme = ({statusColorTheme}) => {
    return (
    <div className={`alert alert-secondary mt-4`}>{statusColorTheme ? 'Дневной режим' : ' Ночной режим'}</div>
    );
}
const mapStateToProps = (state) => ({
    statusColorTheme: state.statusColorTheme
})

export default connect(
    mapStateToProps
  )(StatusColorTheme)