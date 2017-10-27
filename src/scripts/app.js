const user = {
    name: 'Norman',
    age: 'Old',
    location: 'Goffstown'
}

const app = 
    <div>
        <div>
        {user.name ?
            <h1>{user.name}</h1> 
            : <h3>Not sure who that user is.</h3>}
        </div>
        <div>
        {user.location && <p>Lives in: {user.location}</p>}
        </div>
    </div>

let count = 0;

const increment = () => {
    count++
    renderCounterApp()
}
const decrement = () => {
    count--
    renderCounterApp()
}
const reset = () => {
    count = 0
    renderCounterApp()
}

const appRoot = document.getElementById('app')

const renderCounterApp = () => {
    const counter = (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
        </div>
    )
    ReactDOM.render(counter, appRoot);
}

renderCounterApp()