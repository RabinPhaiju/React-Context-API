import { useContext } from "react"
import FeedbackItem from "./FeedbackItem"
import { motion, AnimatePresence } from "framer-motion"
import FeedbackContext from "../../context/feedback/FeedbackContext"
import Spinner from "./assets/spinner.gif"

function FeedbackList() {
  const { feedback, loading } = useContext(FeedbackContext)

  if(loading){
    return <div style={{margin:'10px auto',width:'200px'}}><img width="200px" src={Spinner}/></div>
  }

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback</p>
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
   
  )
}

export default FeedbackList
