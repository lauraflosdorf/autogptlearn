import React from 'react';

function Sidebar() {
  return (
    <div className='sidebar'>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/foundations'>Foundations</a></li>
        <li><a href='/cnn'>Convolutional Neural Networks</a></li>
        <li><a href='/svm'>Support Vector Machines</a></li>
        <li><a href='/randomforests'>Random Forests</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
