import React from "react"
import SingleFeedback from './SingleFeedback'
import PropTypes from "prop-types";


const List = ({ feedback, handleDelete }) => {
  if(feedback.length === 0 || !feedback) {
   return <h3>Be the first to add feedback for Erica!</h3>
  }
  
    return (
    <div className="feedback-list">
      {feedback.map((statement) => (
        <SingleFeedback 
         key={statement.id} 
         statement={statement} 
         handleDelete={handleDelete}
         />
      ))}
    </div>
  )
}

List.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  )
}

export default List
