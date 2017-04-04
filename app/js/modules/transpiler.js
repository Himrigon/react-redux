import React from 'react';
var CodeMirror = require('react-codemirror');
require('codemirror/mode/javascript/javascript');
var regeneratorRuntime = require("babel-runtime/regenerator");



class Transpiler extends React.Component {
    constructor(props) {
        super();
        this.state = {
            input: '',
            output: '',
            err: '',
            code:''
        }
        this.update = this.update.bind(this);
        this.updateCode = this.updateCode.bind(this);
    }
    componentDidMount() {
        this.updateCode(this.props.code)
    }
    componentWillReceiveProps(nextProps) {
        this.updateCode(nextProps.code)
    }

    update(code) {
        try {
            this.setState({
                output: babel.transform(code, {
                    stage: 0,
                    loose: 'all'
                }).code,
                err: ''
            },
            ()=>{
              this.console(this.state.output)
            })
        } catch (err) {
            this.setState({ err: err.message })
        }

    }

    updateCode(newCode) {
      this.setState({
        code: newCode,
      });
    }

    babel(){
      return (e)=>{
        this.update(this.state.code);
      }
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
              <div className="header"> { this.state.err }  <button onClick={this.babel()}>run</button></div>
              <div className="inner">
              <CodeMirror
              value={this.state.code}
              onChange={this.updateCode}
              options={{
                mode: 'javascript',
                lineNumbers: true,
                lineWrapping: true,
                smartIndent: true,
                tabSize:2
              }} />
              </div>
              <div className="outter">
              <CodeMirror
              value={this.state.output}
              options={{
                mode: 'javascript',
                lineNumbers: true,
                lineWrapping: true,
                smartIndent: true,
                tabSize:2
              }} />
              </div>
            </div>

        )
    }
}

export default Transpiler;
