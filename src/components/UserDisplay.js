import React from 'react';
import './UserDisplay.css'

const UserDisplay = (props) => {
    console.log(props)
    return (
        <div className="User">
            <h3>{props.name}</h3>
            <p>Last Login: {new Date(props.lastLogin).toString()}</p>
            <p>UUID: {props.id}</p>
        </div>
    )
}

export default UserDisplay;