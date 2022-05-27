import React, { useContext } from "react"
import FeedbackContext from './context/FeedbackContext'


const Stats = () => {
  const { feedback } = useContext(FeedbackContext)
  
  const avg = Math.round(
    feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
  )

  return(
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  )
}

export default Stats
