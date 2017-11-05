import React from 'react'

const Option = (props) => (
    <li key={props.option}>{props.option}<button onClick={() => props.handleDeleteOption(props.option)}>remove</button></li>
)

export default Option