import React, { useState } from 'react';
import Question from './Question';

const App = () => {
  const [answered, setAnswered] = useState(null);

  const handleAnswered = (result) => {
    setAnswered(result); // Update based on user answer or timeout
  };

  return (
    <div>
      <Question
        question="What is the capital of France?"
        answers={['Paris', 'London', 'Berlin', 'Rome']}
        onAnswered={handleAnswered}
      />
      {answered !== null && (
        <p>{answered ? 'You answered correctly!' : 'Time is up!'}</p>
      )}
    </div>
  );
};

export default App;
