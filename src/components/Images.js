import React, {Component} from 'react'
import './styles.css'

export default class Images extends Component{

  render(){
    return(
      <div className="content">
        {this.props.api.fetching && <p>Loading Images...</p> }
          {this.props.api.images.map((item, i) =>
            <div key={i} className="grid">
              <p>{item.title.substr(0,20)}</p>
              <img alt="img" className="image" src={item.link} />
            </div>)
          }
      </div>
    )
  }
}
