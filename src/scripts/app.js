console.log('App is running');
const appRoot = document.getElementById('app');

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer.",
    options: []
};

const generateList = () => {
    return app.options.map(e => <li key={e}>{e}</li>)
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        generateList()
        render()
    }
    console.log(app.options);
};

const onRemoveAll = () => {
    app.options = []
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {generateList()}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
};

render()