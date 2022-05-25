import './App.css'
import Header from './components/Header'
import List from './components/List'
import { useState } from 'react'
import FeedbackData from './components/data/FeedbackData'

const App = () => {

  const [ feedback, setFeedback ] = useState(FeedbackData)
  return (
    <>
     <Header />
     <List feedback={feedback} />
    </>
  )
}

export default App
