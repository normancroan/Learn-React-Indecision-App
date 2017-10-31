class Counter extends React.Component {
    constructor(props){
        super(props)
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: props.count,
            name: 'Norman'
        }
    }
    componentDidMount(){
        const count = parseInt(localStorage.getItem('count'), 10)
        if(!isNaN(count)){
            this.setState(() => ({count}))
        }
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count)
        }
    }
    handleIncrement(){
        this.setState((prevState) => {
            return {
                count: prevState.count +1
            }
        })
    }
    handleDecrement(){
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        })
    }
    handleReset(){
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.name}'s Count: {this.state.count}</h1>
                <button onClick={this.handleIncrement}>+1</button>
                <button onClick={this.handleDecrement}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter count={25}/>, document.getElementById('app'))
// let count = 0;

// const increment = () => {
//     count++
//     renderCounterApp()
// }
// const decrement = () => {
//     count--
//     renderCounterApp()
// }
// const reset = () => {
//     count = 0
//     renderCounterApp()
// }

// const appRoot = document.getElementById('app')

// const renderCounterApp = () => {
//     const counter = (
//         <div>
//         <h1>Count: {count}</h1>
//         <button onClick={increment}>+1</button>
//         <button onClick={decrement}>-1</button>
//         <button onClick={reset}>Reset</button>
//         </div>
//     )
//     ReactDOM.render(counter, appRoot);
// }

// renderCounterApp()