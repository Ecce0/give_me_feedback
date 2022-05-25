import React from "react"
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'


const SingleFeedback = ({ statement, handleDelete }) => {

   
  return (
    <Card reverse={true}>
      <div className="num-display">
        {statement.rating}
      </div>
      <button 
       className="close"
       onClick={handleDelete}
       >
        <FaTimes color='orange' />
      </button>
      <div className="text-display">{statement.text}</div>      
    </Card>
  )

}

SingleFeedback.propTypes = {
  statement: PropTypes.object.isRequired,
}

export default SingleFeedback
