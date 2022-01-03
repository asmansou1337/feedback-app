import Card from './shared/Card';
import { useState } from 'react';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const handleText = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length < 10) {
      setMessage('Text should be at least 10 caracters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      handleAdd(newFeedback);

      setText('');
    } else {
      setMessage('Text should be at least 10 caracters');
      setBtnDisabled(true);
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How Would You Rate Your Experience With Us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Enter your review'
            onChange={handleText}
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
