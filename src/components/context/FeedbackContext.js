import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()


export const FeedbackProvider = ({ children }) => {

  const [ feedback, setFeedback ] = useState(FeedbackData)
  const [ edit, setEdit ] = useState({
    item: {},
    isEditing: false
  })

  const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}

  const onDelete = (id) => {
		if (window.confirm('Are you sure you want to delete this feedback?')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}

  const editFeedbackStatement = (item) => {
    setEdit({
      item,
      isEditing: true
    })
  }


  return (
    <FeedbackContext.Provider value={{ 
    feedback,
    edit,
    addFeedback,
    onDelete,
    editFeedbackStatement
   }}
    >
    {children}
  </FeedbackContext.Provider>
  )
}

export default FeedbackContext



