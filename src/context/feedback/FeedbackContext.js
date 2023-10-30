import { createContext, useState,useEffect } from "react"

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [feedback, setFeedback] = useState([
  
  ])

  useEffect(() => {
    fetchFeedback()
  },[])

  const fetchFeedback = () => {
    fetch("http://localhost:3004/feedback?_sort=id&_order=desc")
     .then((res)=>res.json()).then((data)=>{
      setFeedback(data)
      setLoading(false)
    })
  }

  const deleteFeedback = (id) => {
    fetch(`http://localhost:3004/feedback/${id}`, {
      method: "DELETE",
    }).then(() => {
      setFeedback(feedback.filter((item) => item.id !== id))
    })
    
  }
  const addFeedback = (newFeedback) => {
    fetch("http://localhost:3004/feedback", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
     body: JSON.stringify(newFeedback),
    }).then((res)=>res.json()).then((data)=>{
      setFeedback([data,...feedback])
    })
  }

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true })
  }

  const updateFeedback = (id, updItem) => {
    fetch(`http://localhost:3004/feedback/${id}`,{
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updItem),
    }).then((res)=>res.json()).then((data)=>{
      setFeedback(feedback.map((item) => (item.id === id ? (item = updItem) : item)))
      setFeedbackEdit({ item: {}, edit: false })
    })
  
  }
  return (
    <FeedbackContext.Provider
      value={{ feedback, deleteFeedback, loading, editFeedback, updateFeedback, feedbackEdit, addFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
