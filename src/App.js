import './App.css'
import Header from './components/Header'
import List from './components/List'
import { useState } from 'react'
import FeedbackData from './components/data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

const App = () => {

  const [ feedback, setFeedback ] = useState(FeedbackData)

  
  
  const onDelete = (id) => {
    
    if(window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }    
  }

  return (
    <>
     <Header />
     <FeedbackForm />
     <FeedbackStats feedback={feedback} />
     <List 
      feedback={feedback}
      handleDelete={onDelete} />
    </>
  )
}

export default App
