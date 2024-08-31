import React, { useState } from 'react';
import Quiz from './Quiz'; // Assuming Quiz is in the same directory

const questions = [
  {
    questionText: 'What is the primary purpose of data preprocessing in machine learning?',
    answerOptions: [
      { answerText: 'To make the model run faster', isCorrect: false, explanation: 'While preprocessing can help in speeding up the model, the primary purpose is to improve the model accuracy by cleaning the data.' },
      { answerText: 'To improve model accuracy by cleaning the data', isCorrect: true, explanation: 'Correct! Preprocessing improves model accuracy by cleaning and preparing the data for the model.' },
      { answerText: 'To increase the data size', isCorrect: false, explanation: 'Increasing data size is not the primary goal of preprocessing.' },
      { answerText: 'To design the model architecture', isCorrect: false, explanation: 'Designing model architecture is a separate task, not related to preprocessing.' }
    ]
  },
  {
    questionText: 'Which type of machine learning is primarily used for labeled data?',
    answerOptions: [
      { answerText: 'Unsupervised Learning', isCorrect: false, explanation: 'Unsupervised learning is used for unlabeled data.' },
      { answerText: 'Reinforcement Learning', isCorrect: false, explanation: 'Reinforcement learning is not primarily focused on labeled data.' },
      { answerText: 'Supervised Learning', isCorrect: true, explanation: 'Correct! Supervised learning is primarily used for labeled data.' },
      { answerText: 'Semi-supervised Learning', isCorrect: false, explanation: 'Semi-supervised learning uses a combination of labeled and unlabeled data.' }
    ]
  },
  {
    questionText: 'What is a key feature of ensemble methods like Random Forests?',
    answerOptions: [
      { answerText: 'Decreasing model bias', isCorrect: false, explanation: 'While ensemble methods can help reduce bias, their primary feature is combining weak learners.' },
      { answerText: 'Combining multiple weak learners to create a strong learner', isCorrect: true, explanation: 'Correct! Ensemble methods like Random Forests combine multiple weak learners to create a strong model.' },
      { answerText: 'Simplifying complex models', isCorrect: false, explanation: 'Ensemble methods generally combine models rather than simplify them.' },
      { answerText: 'Using a single model for various data types', isCorrect: false, explanation: 'Ensemble methods typically combine multiple models rather than using a single model.' }
    ]
  }
];

const QuizFoundations: React.FC = () => {
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

export default QuizFoundations;
