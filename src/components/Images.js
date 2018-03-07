import React, {Component} from 'react'

export default class Images extends Component{

  loadCards(){
    if(this.props.api.fetched){
      return(
        this.props.api.images.map((item, i) =>
        <div key={i} className="card">
          <p className="card-title">{item.title}</p>
          <img alt="img" className="card-img-bottom img-responsive" src={item.link} />
        </div>
      )
    )}else{
      return
    }
  }

  render(){
    return(
      <div className="content">
        {this.props.api.fetching && <p>Loading Images...</p> }
        {this.loadCards()}
      </div>
    )
  }
}
