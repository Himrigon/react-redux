import React from 'react';

class Transpiler extends React.Component {
    constructor(props) {
        super();
        this.state = {
            input: '',
            output: '',
            err: ''
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
                err: ''
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
        const logger = document.getElementById('console');
        logger.innerHTML=""
        console.clear()
        try {
              console.log(eval(msg)         );
              let message = eval(msg)
              if (typeof message == 'object') {
                  logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
              } else {
                  logger.innerHTML += message + '<br />';
              }
          } catch (e) {
            console.log(e)
        }

    }


    render() {
        return ( < div >
            < header > { this.state.err } < /header> < div className = "container" >
            < textarea id = "text"
            onChange = { this.handleUpdate }
            defaultValue = { this.state.input } >
            < /textarea> < pre > { this.state.output } < /pre> < /div> < /div>
        )
    }
}

export default Transpiler;
