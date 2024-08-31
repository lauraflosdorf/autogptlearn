import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const IndexPage = ({ coursePlan }) => {
  const exampleCourses = [
    {
      title: 'Convolutional Neural Networks',
      image: '/cnn_diagram.jpg',
      path: 'cnn',
    },
    {
      title: 'Support Vector Machines',
      image: '/svm_diagram.jpg',
      path: 'svm',
    },
    {
      title: 'Random Forests',
      image: '/random_forests_diagram.jpg',
      path: 'randomforests',
    },
  ];

  const combinedCourses = [...exampleCourses, ...coursePlan];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Exciting World of Machine Learning!</h1>
      <p>Welcome to the adventure of your lifetime! 🚀 Machine Learning isn't just about algorithms and models, it's about unlocking new possibilities and making things smarter. Embark on an exhilarating journey across the vast landscape of machine learning, where each step uncovers new mysteries and enhances your understanding. Ready to explore and grow your knowledge with us? 😄</p>
      <h2>Your Course Plan</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {combinedCourses.map((course) => (
          <div
            key={course.title}
            style={{
              width: '200px', // Smaller width
              marginBottom: '20px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '10px',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
              textAlign: 'center',
              backgroundColor: '#f9f9f9',
              cursor: 'pointer'
            }}
          >
            <Link href={`/${course.path}`} passHref legacyBehavior>
              <div>
                <Image
                  src={course.image}
                  alt={course.title + ' Image'}
                  layout="responsive"
                  width={200}
                  height={120}
                  style={{ borderRadius: '5px' }}
                />
                <h3 style={{ marginTop: '10px', color: '#0070f3' }}>{course.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;





