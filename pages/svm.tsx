
import React from 'react';
import Image from 'next/image';
import QuizSVM from '../src/components/QuizSVM';

export default function SVM({ addCourse }) {
  return (
    <div>
      <h1>Support Vector Machines (SVMs)</h1>
      <p>Support Vector Machines are a supervised learning model used for classification and regression analysis. By creating a decision boundary, SVMs aim to divide datasets into classes to provide powerful, high-accuracy classification.</p>
      <h2>Decision Boundary</h2>
      <p>One of the key features of SVMs is their ability to separate data points with a clear margin of separation. This is achieved by constructing a hyperplane in feature space that maximizes the margin between the positive and negative examples.</p>
      <p>Real-world example: Imagine a competitive soccer game where the coach must decide the starting lineup. Each player can be represented as a data point, with their skills assessed in multiple dimensions such as speed, accuracy, and teamwork. The decision boundary would then separate the potential starters from the reserves, ensuring that the team has the best combination of players for the match.</p>
      <h2>Understanding SVM</h2>
      <p>To understand how SVMs work, consider them as a method of separating the best data points from the masses by finding the hyperplane that separates most of the data points of one class from another. It's useful in scenarios where the decision isn't just binary and involves multiple classes.</p>
      <h2>Advanced Topics</h2>
      <p>SVMs are not limited to simple binary classification. They are also effectively used in scenarios involving multiple classes and complex datasets, where nuanced decision-making is critical. The kernel trick is one such technique, allowing SVM to operate in a high-dimensional space without high computational costs.</p>
      <Image src="/svm_diagram.jpg" alt="Diagram of SVM Decision Boundary" width={450} height={400}/>
      <button className='add-to-course-plan-btn' onClick={() => addCourse('SVM')}>Add to Course Plan</button>
      <QuizSVM />
    </div>
  );
}
