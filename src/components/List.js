import React, { useContext } from 'react'
import SingleFeedback from './SingleFeedback'
import { motion, AnimatePresence } from 'framer-motion'
import FeedbackContext from '../components/context/FeedbackContext'

const List = () => {
	const { feedback } = useContext(FeedbackContext)

	if (feedback.length === 0 || !feedback) {
		return <h3 className="feedback-stats">Be the first to add feedback for Erica!</h3>
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
            layout
					>
						<SingleFeedback
							key={statement.id}
							statement={statement}							
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}

export default List
