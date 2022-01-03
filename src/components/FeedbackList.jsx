import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) return <p>No Feedback Yet</p>;
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={index} item={item} handleDelete={handleDelete} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
