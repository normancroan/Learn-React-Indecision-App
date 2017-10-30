console.log('App is running');

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Visibility</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide Text" : "Show Text"}</button>
                {this.state.visibility && 
                    <div>
                        <p>Here's that magic text</p>
                    </div>
                }
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))






// const appRoot = document.getElementById('app');

// const app = {
//     hiddenText:"Here's the magic text!",
//     textIsHiding:true
// }

// const onToggleVisibilityClicked = () => {
//     app.textIsHiding = !app.textIsHiding
//     render()
// }

// const render = () => {
//     const template = (
//         <div>
//         <h1>Visibility</h1>
//         <button onClick={onToggleVisibilityClicked}>{app.textIsHiding ? "Show Text" : "Hide Text"}</button>
//         {!app.textIsHiding && 
//             <div>
//                 <p>{app.hiddenText}</p>
//             </div>
//         }
//         </div>
//     );
//     ReactDOM.render(template,appRoot);
// };

// render()