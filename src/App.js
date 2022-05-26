import './App.css'
import Header from './components/Header'
import List from './components/List'
import { useState } from 'react'
import FeedbackData from './components/data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { v4 as uuidv4 } from 'uuid'

const App = () => {

  const [ feedback, setFeedback ] = useState(FeedbackData)

  
  
  const onDelete = (id) => {
    
    if(window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }    
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <>
     <Header />
     <FeedbackForm handleAdd={addFeedback} />
     <FeedbackStats feedback={feedback} />
     <List 
      feedback={feedback}
      handleDelete={onDelete} />
    </>
  )
}

export default App
