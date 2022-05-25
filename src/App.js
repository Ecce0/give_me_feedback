import './App.css'
import Header from './components/Header'
import List from './components/List'
import { useState } from 'react'
import FeedbackData from './components/data/FeedbackData'

const App = () => {

  const [ feedback, setFeedback ] = useState(FeedbackData)

  
  
  const onDelete = (id) => {
    console.log(id)

    if(window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }    
  }

  return (
    <>
     <Header />
     <List 
      feedback={feedback}
      handleDelete={onDelete} />
    </>
  )
}

export default App
