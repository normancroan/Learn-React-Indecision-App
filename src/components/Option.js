import React from 'react'

const Option = (props) => (
    <li key={props.option}>{props.option}<button 
        onClick={() => props.handleDeleteOption(props.option)}
        className="button button--link"
    >
    remove</button></li>
)

export default Option