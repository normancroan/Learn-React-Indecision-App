import React from 'react'

export default class AddOptions extends React.Component {
    state = { error: undefined }
    handleAddOption = (e) => {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => ({error}))

        if (!error) {
            e.target.elements.option.value = ""
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                    {this.state.error && <p><font color="red">{this.state.error}</font></p>}
                </form>
            </div>
        )
    }
}