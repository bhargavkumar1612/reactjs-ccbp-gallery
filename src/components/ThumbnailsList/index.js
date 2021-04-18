// Write your code here.
import {Component} from 'react'
import './index.css'

class ThumbnailList extends Component {
  render() {
    const {photosData, changeState} = this.props
    return (
      <>
        {photosData.map(item => (
          <img
            key={item.id}
            src={item.thumbnailUrl}
            alt={item.thumbnailAltText}
            className="thumbnail"
            onClick={() => changeState(item.id)}
          />
        ))}
      </>
    )
  }
}

export default ThumbnailList
