import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
    const {children} = props
    console.log(props.children)
    return(
    <div className="display" >
        {children}
    </div>
    )
}

Display.propTypes = {
children: PropTypes.number.isRequired
}

export default Display;