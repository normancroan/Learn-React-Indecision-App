import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Go ahead, add a few options to get started.</p>}
        <ol>
            {props.options.map(option =>  <Option option={option} handleDeleteOption={props.handleDeleteOption}/>)}
        </ol>
    </div>
)

export default Options