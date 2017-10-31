class IndecisionApp extends React.Component {
    constructor(props){
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.state = {
            options: props.options
        }
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
    handleDeleteOptions(){
        this.setState(() => ({options: []}))
    }
    handleDeleteOption(option){
        this.setState((prevState) => ({options: prevState.options.filter((thisOption) => thisOption !== option)}))
    }
    handleAddOption(option){
        if (!option){
            return 'Please enter a valid option.'
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists.'
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option)
    }
    render() {
        const title = "Indecision"
        const subtitle = "Put your life in the hands of a computer"

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                <AddOptions handleAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    ) 
}

Header.defaultProps = {
    title: "Default"
}

const Action = (props) => {
    return (
        <div>
        <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Go ahead, add a few options to get started.</p>}
            <ol>
                {props.options.map(option =>  <Option option={option} handleDeleteOption={props.handleDeleteOption}/>)}
            </ol>
        </div>
    )
}

const Option = (props) => {
    return (
        <li key={props.option}>{props.option}<button onClick={() => props.handleDeleteOption(props.option)}>remove</button></li>
    )
}

class AddOptions extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))