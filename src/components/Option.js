import React from 'react'

const Option = (props) => {
    return (
        <li key={props.option}>{props.option}<button onClick={() => props.handleDeleteOption(props.option)}>remove</button></li>
    )
}

export default Option