class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision"
        const subtitle = "Put your life in the hands of a computer"
        const options = ['Thing one','Thing two','Thing three']

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOptions />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick(){
        alert("Fired handlePick")
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props){
        super(props) //required when overriding constructor
        this.handleRemoveAll = this.handleRemoveAll.bind(this) //ensuring the context of handleRemoveAll is this
    }
    handleRemoveAll(){
        console.log(this.props.options)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                <ol>
                    {this.props.options.map(option =>  <Option option={option} />)}
                </ol>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <li key={this.props.option}>{this.props.option}</li>
        )
    }
}

class AddOptions extends React.Component {
    handleAddOption(e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        if(option){
            alert(option)
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))