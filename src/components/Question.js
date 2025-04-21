import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (timeRemaining === 1) {
        setTimeRemaining(10);       // reset timer
        onAnswered(false);          // trigger timeout behavior
      } else {
        setTimeRemaining(timeRemaining - 1); // decrease timer
      }
    }, 1000); // 1 second

    // Cleanup function
    return () => clearTimeout(timeoutId);
  }, [timeRemaining, onAnswered]); // re-run effect on timeRemaining change

  return (
    <div>
      <h2>{question.prompt}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => onAnswered(index === question.correctIndex)}>
              {answer}
            </button>
          </li>
        ))}
      </ul>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;
