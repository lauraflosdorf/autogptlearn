
import React from 'react';
import Image from 'next/image';
import QuizCNN from '../src/components/QuizCNN';

export default function CNN({ addCourse }) {
  return (
    <div>
      <h1>Convolutional Neural Networks (CNNs)</h1>
      <p>Convolutional Neural Networks are a class of deep neural networks, most commonly applied to analyzing visual imagery. They are also known as space invariant or shift invariant artificial neural networks, based on their shared-weights architecture and translation invariance characteristics.</p>
      <h2>Architecture</h2>
      <p>The typical layers of a CNN include layers like convolutional layers, pooling layers, and fully connected layers, each serving distinct purposes. Convolutional layers apply filters to the input, capturing spatial and temporal dependencies in the image data. Pooling layers reduce dimensions and parameters, speeding up computation and reducing the risk of overfitting. Fully connected layers translate the features extracted by the convolutional and pooling layers into final output predictions, such as class probabilities in classification tasks.</p>
      <h2>Expanded Explanation</h2>
      <p>The convolution layer, for example, uses small squares of input data to perform operations that identify patterns such as lines, edges, and corners. These patterns are used to understand more complex structures in later layers. Advances in CNN architecture, such as the use of dropout and batch normalization, have significantly improved network efficiency and accuracy.</p>
      <h2>Additional Applications</h2>
      <p>Beyond their standard uses in image analysis, CNNs are also applied in areas such as video recognition, natural language processing, and even in complex systems like weather forecasting, where pattern recognition plays a crucial role.</p>
      <Image src='/cnn_diagram.jpg' alt='CNN Diagram' width={400} height={400} />
      <h2>How CNNs Work</h2>
      <p>To effectively process image data, CNNs apply a series of learnable filters to the input. For instance, an initial layer might detect edges in an image, while subsequent layers may identify more complex structures such as corners or specific objects depending on the depth and breadth of the network and its training.</p>
      <h2>Applications</h2>
      <p>CNNs have widespread applications in many fields including medical image analysis, autonomous driving, and facial recognition systems. Their ability to recognize patterns and objects make them invaluable in settings that require high levels of visual recognition.</p>
      <button className='add-to-course-plan-btn' onClick={() => addCourse('CNN')}>Add to Course Plan</button>
      <QuizCNN />
    </div>
  );
}
