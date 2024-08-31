
import React from 'react';
import QuizFoundations from '../src/components/QuizFoundations';
import Image from 'next/image';

const FoundationsPage = ({ addCourse }) => (
  <div>
    <h1>Machine Learning Foundations</h1>
    <p>This foundational chapter will explore the core concepts that underpin machine learning technology, such as types of learning methods, essential algorithms, and the importance of data quality and preprocessing. Understanding these basics is crucial before moving on to more specialized topics like CNNs, SVMs, and Random Forests.</p>
    <p>Let's dive into some essential machine learning concepts:</p>
    <h2>Key Principles of Machine Learning</h2>
    <h3>Supervised Learning</h3>
    <p>Supervised learning involves a model learning from labeled training data, helping it to predict outcomes for unforeseen data. This type of learning is analogous to teaching a child, where direct feedback is provided to guide the learning process.</p>
    <h3>Unsupervised Learning</h3>
    <p>In unsupervised learning, the model uses unlabeled data to detect patterns and relationships, deriving insights without prior training. It is like observing nature and forming theories without specific guidance.</p>
    <h3>Reinforcement Learning</h3>
    <p>This type of learning reinforces decision-making through rewards and penalties. It is similar to training a pet with treats and admonishments, where the desired outcomes are encouraged over time.</p>
    <h2>Additional Concepts</h2>
    <p>Data Preprocessing: The process of preparing raw data for analysis, involving cleansing, normalization, transformation, feature extraction, and selection, plays a critical role in the success of ML models.</p>
    <p>Model Evaluation: Understanding model performance through metrics like accuracy, precision, recall, and F1 score is vital for developing robust machine learning models.</p>
    <Image src='/foundations.jpg' alt='Diagram' width={400} height={400}  style={{ borderRadius: '5px', marginRight: '80px' }}/>
    <Image src='/foundations_2.jpg' alt='Diagram' width={400} height={400}  style={{ borderRadius: '5px', marginLeft: '80px' }}/>
    <button className='add-to-course-plan-btn' onClick={() => addCourse('Foundations')}>Add to Course Plan</button>
    <QuizFoundations />
  </div>
);

export default FoundationsPage;
