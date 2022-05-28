import React, { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import Ratings from './Ratings'
import FeedbackContext from './context/FeedbackContext'

const Form = () => {
	const [text, setText] = useState('')
	const [btnDisabled, setBtnDisabled] = useState(true)
	const [msg, setMsg] = useState('')
	const [rating, setRating] = useState(10)
	const { addFeedback, edit, updateStatement } = useContext(FeedbackContext)

	useEffect(() => {
		if (edit.isEditing === true) {
			setBtnDisabled(false)
			setText(edit.item.text)
			setRating(edit.item.rating)
		}
	}, [edit])

	const handleTextChange = ({ target: { value }}) => {
		if (value === '') {
			setBtnDisabled(true)
			setMsg(null)
		} else if (value.trim().length < 10 || rating === '') {
			setBtnDisabled(true)
			setMsg('Come on, give me more! Don\'t forget to rate me')
		} else {
			setMsg(null)
			setBtnDisabled(false)
		}

		setText(value)		
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
			}
			
			if (edit.isEditing === true) {
				updateStatement(edit.item.id, newFeedback)
		  } else {
				addFeedback(newFeedback)
			}
			setText('')
			setBtnDisabled(true)
			setRating(10)
		}
	}

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2 style={{ color: '#3E4E50' }}>
					How would you rate my feedback app?
				</h2>
				<Ratings select={setRating} selected={rating} />
				<div className='input-group'>
					<input
						type='text'
						placeholder='Write a Review'
						onChange={handleTextChange}
						value={text}
					/>
					<Button type='submit' version='secondary' isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{msg && <div className='message'>{msg}</div>}
			</form>
		</Card>
	)
}

export default Form
