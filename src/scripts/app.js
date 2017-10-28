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
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                 We've got {this.props.options.length} options
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
    render(){
        return (
            <div>
                AddOptions component here
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))