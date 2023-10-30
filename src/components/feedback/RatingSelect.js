import React, { useState, useContext, useEffect } from "react"
import FeedbackContext from "../../context/feedback/FeedbackContext"

function RatingSelect({ rating, setRating }) {
  const { feedbackEdit } = useContext(FeedbackContext)
  const [selected, setSelected] = useState(rating)

  const handleRatingChange = (event) => {
    setSelected(+event.currentTarget.value) //convert to integer
    setRating(+event.currentTarget.value)
  }

  useEffect(() => {
    if (feedbackEdit.edit) {
      setSelected(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])
  return (
    <ul className='rating'>
      {[...Array(10)].map((star, i) => (
        <li key={(i + 1).toString()}>
          <input
            type='radio'
            id={`num${i}`}
            name='rating'
            value={i + 1}
            onChange={(e) => handleRatingChange(e)}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect
