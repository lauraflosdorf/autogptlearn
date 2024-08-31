import React, { useState } from 'react';
import Quiz from './Quiz';

const questions = [
  {
    questionText: 'What is the primary benefit of using Random Forests over a single decision tree?',
    answerOptions: [
      { answerText: 'Higher accuracy', isCorrect: true, explanation: 'Random Forests combine multiple trees to reduce the variance and overfitting, improving the overall accuracy.' },
      { answerText: 'Faster computation', isCorrect: false, explanation: 'Random Forests actually require more computation because they involve multiple trees, not just one.' },
      { answerText: 'Easier to understand', isCorrect: false, explanation: 'Random Forests are generally more complex than a single decision tree and thus harder to interpret.' },
      { answerText: 'Uses less data', isCorrect: false, explanation: 'Random Forests do not use less data; they effectively leverage the entire dataset across different trees.' }
    ]
  },
  // Additional questions can be added here
];

const QuizRandomForests: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number | null }>({});

  const handleAnswerOptionClick = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: answerIndex }));
  };

  return (
    <Quiz
      questions={questions}
      handleAnswerOptionClick={handleAnswerOptionClick}
      selectedAnswers={selectedAnswers}
    />
  );
};

export default QuizRandomForests;
