import React, {Component} from 'react'
import Search from '../components/Search'
import Images from '../components/Images'
import { connect } from 'react-redux'

export class App extends Component{

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Search
        search={(tags) => this.props.search(tags)}/>
        <Images />
      </div>
    )
  }
}
//Which properties of global app do I want to use in the local app components
const mapStateToProps = (state) => {
  return{
    // tags: state.apiReducer
    api: state.api,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    search: (tags) => {
      dispatch({
        type: 'REQUEST_IMG',
        payload: tags,
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
