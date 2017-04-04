import React from 'react';
var CodeMirror = require('react-codemirror');
require('codemirror/mode/javascript/javascript');




var App = React.createClass({
  getInitialState: function() {
    return {
      code: this.props.code,
    };
  },
  updateCode: function(newCode) {
    this.setState({
      code: newCode,
    });
  },

  componentWillReceiveProps: function(nextProps) {
        this.updateCode(nextProps.code);
    },

  render: function() {
    return <CodeMirror
              value={this.state.code}
              onChange={this.updateCode}
              options={{
                mode: 'javascript',
                lineNumbers: true,
                smartIndent: true,
                tabSize:2}} />
  }
});

class Transpiler extends React.Component {
    constructor(props) {
        super();
        this.state = {
            input: '',
            output: '',
            err: '',
            code:''
        }
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    componentDidMount() {
        this.getCode(this.props.code)
    }
    componentWillReceiveProps(nextProps) {
        this.getCode(nextProps.code)
    }
    getCode(code) {
        let elem = document.getElementById('text')
        elem.value = code
        this.update(code)
        this.console(this.state.output)
    }

    update(code) {
        try {
            this.setState({
                output: babel.transform(code, {
                    stage: 0,
                    loose: 'all'
                }).code,
                err: '',
                code: code
            })
        } catch (err) {
            this.setState({ err: err.message })
        }
    }

    handleUpdate(e) {
        let code = e.target.value;
        this.getCode(code)
    }

    console(msg) {
        console.clear()
        try {
           eval(msg)
          } catch (e) {
            console.log(e.message)
        }
    }

    render() {
        return (
            <div>
              <div className="header"> { this.state.err } </div>
              <App code={this.state.code}/>
              <div className = "container" >
                <textarea id = "text"
                onChange = { this.handleUpdate }
                defaultValue = { this.state.input } >
                </textarea>
                <pre> { this.state.output } </pre>
              </div>

            </div>

        )
    }
}

export default Transpiler;
