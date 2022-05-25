import React from "react"
import Card from './shared/Card'

const FeedbackItem = ({ statement }) => {
   
  return (
    <Card reverse={true}>
      <div className="num-display">
        {statement.rating}
      </div>
      <div className="text-display">{statement.text}</div>      
    </Card>
  )

}

export default FeedbackItem
