
import React from 'react';
import Image from 'next/image';
import QuizRandomForests from '../src/components/QuizRandomForests';

export default function RandomForests({ addCourse }) {
  return (
    <div>
      <h1>Random Forests</h1>
      <p>Random Forests combine multiple decision trees to improve prediction accuracy and control over-fitting. As a versatile ensemble learning method, they are suited to both classification and regression tasks, greatly enhancing predictive performance over a single decision tree.</p>
      <h2>How it Works</h2>
      <p>Random forests create a 'forest' of decision trees during training. Each tree is constructed using a random subset of training data. After training, predictions are made by averaging the results of all the trees. This process of majority voting or averaging mitigates over-fitting and boosts the model's ability to generalize to new data.</p>
      <h2>Advanced Applications</h2>
      <p>Random Forests are not only powerful for simple classification or regression but are also used for complex problems like dimensionality reduction, outlier detection, and feature importance which reveals insight into the underlying structure of the data.</p>
      <h2>Real-world Example - Credit Scoring</h2>
      <p>Consider the application of Random Forests in credit scoring; by assessing multiple aspects of a person's credit history simultaneously, Random Forests can effectively predict their creditworthiness, mitigating the risk of default. This demonstrates the model's capacity to handle multiple features and make reliable decisions.</p>
      <Image src='/random_forests_diagram.jpg' alt='Detailed Diagram of Random Forests' width={400} height={400} />
      <button className='add-to-course-plan-btn' onClick={() => addCourse('Random Forests')}>Add to Course Plan</button>
      <QuizRandomForests />
    </div>
  );
}
