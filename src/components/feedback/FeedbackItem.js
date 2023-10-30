import React, { useContext } from "react"
import Card from "./shared/Card"
import PropTypes from "prop-types"
import { FaTimes, FaEdit } from "react-icons/fa"
import FeedbackContext from "../../context/feedback/FeedbackContext"

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  const { rating, text, id } = item

  return (
    <Card reverse={false}>
      <div className='num-display'>{rating}</div>
      <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='purple' />
      </button>
      <button onClick={() => deleteFeedback(id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  )
}

FeedbackItem.propType = {
  item: PropTypes.object,
}

export default FeedbackItem
