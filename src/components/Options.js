import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
                <button 
                    onClick={props.handleDeleteOptions}
                    className="button button--link"
                >
                Remove All</button>
        </div>
        {props.options.length === 0 && <p className="widget-message">Go ahead, add a few options to get started.</p>}
        <ol>
            {props.options.map(option =>  <Option option={option} handleDeleteOption={props.handleDeleteOption}/>)}
        </ol>
    </div>
)

export default Options