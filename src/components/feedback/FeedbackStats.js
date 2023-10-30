import React, { useContext } from "react"
import FeedbackContext from "../../context/feedback/FeedbackContext"

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)
  console.log(feedback)
  // calculate rating Average
  let average = feedback.reduce((sum, item) => sum + item.rating, 0) / feedback.length
  average = average.toFixed(1).replace(/\.0$/, "")

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired,
// }

export default FeedbackStats
