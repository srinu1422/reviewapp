// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  onclickRightArrow = () => {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(previewIndex => ({
        activeReviewIndex: previewIndex.activeReviewIndex + 1,
      }))
    }
  }

  currentReviewDetails = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} className="image" />
        <p className="name"> {username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onclickleftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(previewIndex => ({
        activeReviewIndex: previewIndex.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const searchReview = reviewsList[activeReviewIndex]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousal-container">
          <button
            type="button"
            data-testid="leftArrow"
            className="button"
            onClick={this.onclickleftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>

          {this.currentReviewDetails(searchReview)}

          <button
            type="button"
            className="button"
            data-testid="rightArrow"
            onClick={this.onclickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
