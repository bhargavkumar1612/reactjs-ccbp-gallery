// Write your code here.
import {Component} from 'react'
import './index.css'
import ThumbnailList from '../ThumbnailsList'

class Gallery extends Component {
  render() {
    const {photoData} = this.props
    return photoData.map(item => (
      <div>
        <h1>{item.imaAltText}</h1>
        <ThumbnailList imageAlt={item.imageAltText} />
      </div>
    ))
  }
}

export default Gallery
