import React from 'react';

class Transpiler extends React.Component {
    constructor(props) {
        super();
        this.state={
          input:'',
          output: '',
          err: ''
        }
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    componentDidMount() {
      let elem = document.getElementById('text')
      elem.value=this.props.code
      this.update(this.props.code)
    }
    componentWillReceiveProps(nextProps) {
       let elem = document.getElementById('text')
       elem.value=nextProps.code
       this.update(nextProps.code)
    }
    getCode(){
      let elem = document.getElementById('text')
      elem.value=this.props.code
      this.update(this.props.code)
    }
    update(code){
      try {
          this.setState({
            output: babel.transform(code,{
              stage:0,
              loose:'all'
            }).code,
            err: ''
          })
        }
        catch(err){
          this.setState({err:err.message})
        }
    }
    handleUpdate(e){
      let code = e.target.value;
      this.update(code)
    }
    render() {
        return (
          <div>
            <header>{this.state.err}</header>
            <div className="container">
              <textarea
                id="text"
                onChange={this.handleUpdate}
                defaultValue={this.state.input}>
              </textarea>
              <pre>
              {this.state.output}
                </pre>
            </div>
          </div>
          )
    }
}

export default Transpiler;

