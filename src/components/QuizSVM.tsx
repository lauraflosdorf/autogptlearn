import React, { useState } from 'react';
import Quiz from './Quiz'; 

const questions = [
  {
    questionText: 'What is the primary function of the kernel in SVM?',
    answerOptions: [
      { answerText: 'Transforming data', isCorrect: true, explanation: 'The kernel function in SVM is used to transform data into a higher dimension, making it easier to classify.' },
      { answerText: 'Classifying data', isCorrect: false, explanation: 'Classifying data is the overall goal of SVM, but the kernel specifically transforms data.' },
      { answerText: 'Reducing data dimensionality', isCorrect: false, explanation: 'Reducing dimensionality is not the primary function of the kernel; it actually increases dimensionality.' }
    ]
  },
  {
    questionText: 'Which concept is essential in understanding how SVM works?',
    answerOptions: [
      { answerText: 'Decision Trees', isCorrect: false, explanation: 'Decision Trees are a different type of model, unrelated to the fundamental concept of SVM.' },
      { answerText: 'Neural Networks', isCorrect: false, explanation: 'Neural Networks are a different type of model and are not essential to understanding SVM.' },
      { answerText: 'Maximizing Margin', isCorrect: true, explanation: 'Maximizing the margin between different classes is a key concept in understanding how SVM works.' }
    ]
  }
];

const QuizSVM: React.FC = () => {
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

export default QuizSVM;
