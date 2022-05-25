import React from "react"
import SingleFeedback from './SingleFeedback'

const List = ({ feedback }) => {
  if(feedback.length === 0 || !feedback) {
   return <h3>Be the first to add feedback for Erica!</h3>
  }
  

  return (
    <div className="feedback-list">
      {feedback.map((statement) => (
        <SingleFeedback key={statement.id} statement={statement} />
      ))}
    </div>
  )
}

export default List
