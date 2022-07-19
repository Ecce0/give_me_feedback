import React, { createContext, useState } from 'react'
import { v4 as uuidv4} from "uuid"


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: 'Feedback item 1',
			rating: 10,
		},
		{
			id: 2,
			text: 'Feedback item 2',
			rating: 9,
		},
		{
			id: 3,
			text: 'Feedback item 3',
			rating: 7,
		},
	])

	const [edit, setEdit] = useState({
		item: {},
		isEditing: false,
	})

	//JSON Server is undeployable, commenting out code related to backend

	// useEffect(() => {
	// 	fetchFeedback()
	// }, [])

	// const fetchFeedback = async () => {
	// 	const res = await fetch(`/feedback?_sort=id&_order=desc`)
	// 	const data = await res.json()
	// 	setFeedback(data)
	// }

	// const addFeedback = async (newFeedback) => {
	// 	const res = await fetch('/feedback', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-type': 'application/json',
	// 		},
	// 		body: JSON.stringify(newFeedback),
	// 	})

	// 	const data = await res.json()

	// 	setFeedback([data, ...feedback])
	// }

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}

	// const onDelete = async (id) => {
	// 	if (window.confirm('Are you sure you want to delete this feedback?')) {
	// 		await fetch(`/feedback/${id}`, { method: 'DELETE' })
	// 		setFeedback(feedback.filter((item) => item.id !== id))
	// 	}
	// }

	const onDelete = (id) => {
		if (window.confirm('are your sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}

	const editStatement = (item) => {
		setEdit({
			item,
			isEditing: true,
		})
	}

 
	// const updateStatement = async (id, updItem) => {
	// 	const res = await fetch(`/feedback/${id}`, {
	// 		method: 'PUT',
	// 		headers: {
	// 			'Content-type': 'application/json',
	// 		},
	// 		body: JSON.stringify(updItem),
	// 	})
	// 	const data = await res.json()
	// 	setFeedback(
	// 		feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
	// 	)

	// 	// setEdit({
	// 	//   item: {},
	// 	//   edit: false
	// 	// })
	// }

  const updateStatement = (id, updItem) => {
    setFeedback(feedback.map((item) =>
    item.id === id ? {...item,...updItem } : item))
}

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				edit,
				addFeedback,
				onDelete,
				editStatement,
				updateStatement,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
