import React, { useState } from 'react';
import Quiz from './Quiz'; // Assuming Quiz is in the same directory

const questions = [
  {
    questionText: 'What is the primary purpose of convolutional layers in CNNs?',
    answerOptions: [
      { answerText: 'Noise Reduction', isCorrect: false, explanation: 'Noise reduction is not the primary purpose of convolutional layers in CNNs.' },
      { answerText: 'Feature Extraction', isCorrect: true, explanation: 'Feature extraction is the primary purpose of convolutional layers in CNNs.' },
      { answerText: 'Pooling Data', isCorrect: false, explanation: 'Pooling data is handled by pooling layers, not convolutional layers.' }
    ]
  },
  {
    questionText: 'Which part of CNN helps in reducing the spatial size?',
    answerOptions: [
      { answerText: 'Fully Connected Layer', isCorrect: false, explanation: 'Fully connected layers do not reduce spatial size; they process the output from the previous layers.' },
      { answerText: 'Pooling Layer', isCorrect: true, explanation: 'Pooling layers help in reducing the spatial size of the feature maps.' },
      { answerText: 'Convolutional Layer', isCorrect: false, explanation: 'Convolutional layers are responsible for feature extraction, not reducing spatial size.' }
    ]
  }
];

const QuizCNN: React.FC = () => {
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

export default QuizCNN;
