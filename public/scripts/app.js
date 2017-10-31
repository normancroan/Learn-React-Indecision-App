'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleIncrement = _this.handleIncrement.bind(_this);
        _this.handleDecrement = _this.handleDecrement.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);
        _this.state = {
            count: props.count,
            name: 'Norman'
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var count = parseInt(localStorage.getItem('count'), 10);
            if (!isNaN(count)) {
                this.setState(function () {
                    return { count: count };
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.count !== this.state.count) {
                localStorage.setItem('count', this.state.count);
            }
        }
    }, {
        key: 'handleIncrement',
        value: function handleIncrement() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'handleDecrement',
        value: function handleDecrement() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {
            this.setState(function () {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.state.name,
                    '\'s Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleIncrement },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleDecrement },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleReset },
                    'Reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(React.createElement(Counter, { count: 25 }), document.getElementById('app'));
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
