import React, {Component} from 'react'
import Search from '../components/Search'
import Images from '../components/Images'
import { connect } from 'react-redux'
import { fetchImages } from '../actions/apiActions'

export class App extends Component{
  render(){
    return (
      <div>
        <Search search={this.props.search}/>
        <Images api={this.props.api}/>
      </div>
    )
  }
}

// tells how to transform the current Redux store state into the props you want to pass to a presentational component
const mapStateToProps = (state) => {
  return{
    // prop-name: state.apiReducer(key)
    api: state.api,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    search: (tags) => {
      dispatch(fetchImages(tags))
    }
  }
}
// connect() subscribe to the Redux store
// use connect() to map the store (state & dispatch) to props of the component(App)
export default connect(mapStateToProps, mapDispatchToProps)(App)
