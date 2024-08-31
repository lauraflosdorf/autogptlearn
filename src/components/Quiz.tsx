import React from 'react';

interface AnswerOption {
  answerText: string;
  isCorrect: boolean;
  explanation: string;
}

interface Question {
  questionText: string;
  answerOptions: AnswerOption[];
}

interface QuizProps {
  questions: Question[];
  handleAnswerOptionClick: (questionIndex: number, answerIndex: number) => void;
  selectedAnswers: { [key: number]: number | null };
}

const Quiz: React.FC<QuizProps> = ({ questions, handleAnswerOptionClick, selectedAnswers }) => {
  return (
    <div className="quiz-container">
      <h2 className="quiz-title">Quiz</h2> 
      {questions.map((question, quesIndex) => (
        <div key={quesIndex} className="quiz-question-container">
          <p className="quiz-question">{question.questionText}</p>
          <div className="quiz-options">
            {question.answerOptions.map((option, optIndex) => (
              <button
                className="quiz-button"
                key={option.answerText}
                onClick={() => handleAnswerOptionClick(quesIndex, optIndex)}
                disabled={selectedAnswers[quesIndex] !== undefined}
                style={{
                  backgroundColor: selectedAnswers[quesIndex] === optIndex
                    ? option.isCorrect
                      ? '#4CAF50'
                      : '#F44336'
                    : 'default',
                  color: selectedAnswers[quesIndex] === optIndex ? '#fff' : '#000',
                  cursor: selectedAnswers[quesIndex] !== undefined ? 'not-allowed' : 'pointer',
                }}
              >
                {option.answerText}
              </button>
            ))}
          </div>
          {selectedAnswers[quesIndex] !== undefined && (
            <div className="explanation">
              {question.answerOptions[selectedAnswers[quesIndex]!].explanation}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Quiz;

