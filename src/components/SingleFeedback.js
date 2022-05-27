import React, { useContext } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import FeedbackContext from '../components/context/FeedbackContext'

const SingleFeedback = ({ statement }) => {
	const { onDelete, editStatement } = useContext(FeedbackContext)
	return (
		<Card reverse={true}>
			<div className='num-display'>{statement.rating}</div>
			<button className='close' onClick={() => onDelete(statement.id)}>
				<FaTimes color='#D81159' size={20} />
			</button>
			<button onClick={() => editStatement(statement)} className="edit">
				<FaEdit color='#D81159' size={20} />
			</button>
			<div className='text-display'>{statement.text}</div>
		</Card>
	)
}

SingleFeedback.propTypes = {
	statement: PropTypes.object.isRequired,
}

export default SingleFeedback
