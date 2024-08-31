import React, { useState } from 'react';
import { AppProps } from 'next/app';
import Sidebar from '../src/components/Sidebar';
import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [coursePlan, setCoursePlan] = useState([]);

  const addCourse = (course) => {
    setCoursePlan((prevPlan) => {
      // Avoid adding duplicate courses
      if (!prevPlan.find((c) => c.title === course.title)) {
        return [...prevPlan, course];
      }
      return prevPlan;
    });
  };

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="content">
        <Component {...pageProps} coursePlan={coursePlan} addCourse={addCourse} />
      </div>
    </div>
  );
}

export default MyApp;


