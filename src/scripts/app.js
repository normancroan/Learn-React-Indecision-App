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

const appRoot = document.getElementById('app')
ReactDOM.render(app,appRoot)