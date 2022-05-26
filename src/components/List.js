import React from 'react'
import SingleFeedback from './SingleFeedback'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

const List = ({ feedback, handleDelete }) => {
	if (feedback.length === 0 || !feedback) {
		return <h3>Be the first to add feedback for Erica!</h3>
	}

	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map((statement) => (
					<motion.div
						key={statement.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<SingleFeedback
							key={statement.id}
							statement={statement}
							handleDelete={handleDelete}
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}

List.propTypes = {
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired,
		})
	),
}

export default List
