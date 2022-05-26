import React, { useState} from "react"
import Card from './shared/Card'
import Button from './shared/Button'
import Ratings from './Ratings'

const FeedbackForm = () => {
  const [ text, setText] = useState('')
  const [ btnDisabled, setBtnDisabled ] = useState(true)
  const [ msg, setMsg] = useState('')
  const [ rating, setRating] = useState('')

  const handleTextChange = (e) => {
    if(text === ''){
      setBtnDisabled(true)
      setMsg(null)
    } else if (text !== '' && text.trim().length <= 10){
      setBtnDisabled(true)
      setMsg('Come on, give me more!')
    } else {
      setMsg(null)
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  return(
    <Card>
      <form>
        <h2>
          How would you rate my feedback app?
        </h2>
        <Ratings />
        <div className="input-group">
          <input 
           type="text" 
           placeholder="Write a Review"
           onChange={handleTextChange}
           value={text}
           />
          <Button 
           type="submit"
           version='secondary'
           isDisabled={btnDisabled}>
             Send
          </Button>
        </div>
        {msg && <div className="message">{msg}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm;
