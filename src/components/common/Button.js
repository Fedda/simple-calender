import React from 'react'

export default function Button(props) {
    const { icon, onClick } = props;
    let iconMarkup = "";
    if (icon !== undefined) {
        iconMarkup = <i className="material-icons">{icon}</i>
    }
    return (
        <button onClick={onClick}>{iconMarkup}</button>
    )
}
