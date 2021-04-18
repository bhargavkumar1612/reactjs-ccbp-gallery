// Write your code here.
import {Component} from 'react'
import './index.css'
import ThumbnailList from '../ThumbnailsList'

class Gallery extends Component {
  state = {i: 0}

  changeState = event => this.setState({i: event})

  render() {
    const {photosData} = this.props
    const {i} = this.state
    return (
      <div className="container">
        <img
          className="image"
          src={photosData[i].imageUrl}
          alt={photosData[i].imageAltText}
        />
        <div className="headings">
          <h1 className="heading">Natures Photography</h1>
          <p className="para">Natures Photography Rahul</p>
        </div>

        <div className="thumbnails">
          <ThumbnailList
            photosData={photosData}
            state={this.state}
            changeState={this.changeState}
          />
        </div>
      </div>
    )
  }
}

export default Gallery
