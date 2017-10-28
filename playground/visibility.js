console.log('App is running');
const appRoot = document.getElementById('app');

const app = {
    hiddenText:"Here's the magic text!",
    textIsHiding:true
}

const onToggleVisibilityClicked = () => {
    app.textIsHiding = !app.textIsHiding
    render()
}

const render = () => {
    const template = (
        <div>
        <h1>Visibility</h1>
        <button onClick={onToggleVisibilityClicked}>{app.textIsHiding ? "Show Text" : "Hide Text"}</button>
        {!app.textIsHiding && 
            <div>
                <p>{app.hiddenText}</p>
            </div>
        }
        </div>
    );
    ReactDOM.render(template,appRoot);
};

render()