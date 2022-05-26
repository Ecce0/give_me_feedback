import React, { useContext } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedbackContext from '../components/context/FeedbackContext'

const SingleFeedback = ({ statement }) => {
	const { onDelete, editFeedbackStatement } = useContext(FeedbackContext)
	return (
		<Card reverse={true}>
			<div className='num-display'>{statement.rating}</div>
			<button className='close' onClick={() => onDelete(statement.id)}>
				<FaTimes color='orange' />
			</button>
			<button onClick={() => editFeedbackStatement} className="edit">
				<FaEdit color="orange" />
			</button>
			<div className='text-display'>{statement.text}</div>
		</Card>
	)
}

SingleFeedback.propTypes = {
	statement: PropTypes.object.isRequired,
}

export default SingleFeedback
