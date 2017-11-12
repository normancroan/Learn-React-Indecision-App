import React from 'react'
import AddOptions from './AddOptions'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    state = { 
        options: [],
        selectedOption: undefined
     }
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}))
    }
    handleDeleteOption = (option) => {
        this.setState((prevState) => ({options: prevState.options.filter((thisOption) => thisOption !== option)}))
    }
    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}))
    }
    handleAddOption = (option) => {
        if (!option){
            return 'Please enter a valid option.'
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists.'
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }))
    }
    componentDidMount(){
        try {
            const json = localStorage.getItem('options')
            if(json){
                this.setState(() => ({options: JSON.parse(json)}))
            }
        } catch (e) {
            // not handling this error
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    render() {
        const title = "Indecision"
        const subtitle = "Put your life in the hands of a computer"

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                    <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                    <AddOptions handleAddOption={this.handleAddOption}/>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}/>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}


export default IndecisionApp