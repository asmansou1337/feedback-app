function FeedbackItem({ item }) {
  return (
    <div className='card'>
      <div className='num-display'>{item.rating}</div>
      <text className='text-display'>{item.text}</text>
    </div>
  );
}

export default FeedbackItem;
