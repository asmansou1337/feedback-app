import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const handleAdd = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete thsi feedback ?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={handleAdd} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
