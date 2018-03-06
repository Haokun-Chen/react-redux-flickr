import React, {Component} from 'react'

export default class Search extends Component{
  constructor(props){
    super(props)
    this.state = {
      input: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({input: event.target.value})
  }

  handleSubmit(event){
    alert('Submited!' + this.state.input)
    this.props.search(this.state.input)
    event.preventDefault()
  }

  render(){
    return(
      <div>
        <label>
        Tags:
        <input type="text" value={this.state.input} onChange={this.handleChange} />
        </label>
        <button onClick={this.handleSubmit}>Search</button>

      </div>
    )
  }
}
