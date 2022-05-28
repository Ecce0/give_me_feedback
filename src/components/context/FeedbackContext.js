import React, { createContext, useState, useEffect } from 'react'


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
   const [ loading, setLoading ] = useState(true)
  const [ feedback, setFeedback ] = useState([])
  const [ edit, setEdit ] = useState({
    item: {},
    isEditing: false
  })

  useEffect(() => {
    fetchFeedback()
  },[])

  const fetchFeedback = async () => {
    const res = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await res.json()
    setFeedback(data)
    setLoading(false)
  }

  const addFeedback = async (newFeedback) => {
    const res = await fetch('/feedback', {
      'method': 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newFeedback)
    })

    const data = await res.json()
		
		setFeedback([data, ...feedback])
	}

  const onDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE'})      
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}

  const editStatement = (item) => {
    setEdit({
      item,
      isEditing: true
    })
  }


  const updateStatement = async (id, updItem) => {
    const res = await fetch(`/feedback/${id}`, { 
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updItem)
    })
    const data = await res.json()
    setFeedback(feedback.map((item) => item.id === id ? { ...item, ...data } : item))

    // setEdit({
    //   item: {},
    //   edit: false
    // })
  }

  return (
    <FeedbackContext.Provider value={{ 
    feedback,
    edit,
    loading,
    addFeedback,
    onDelete,
    editStatement,
    updateStatement
   }}
    >
    {children}
  </FeedbackContext.Provider>
  )
}

export default FeedbackContext



