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
    let tags = this.state.input
    this.props.search(tags)
    event.preventDefault()
  }

  render(){
    return(
      <div>
        <p>Search by tag:</p>
        <input type="text" value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Search</button>
      </div>
    )
  }
}
