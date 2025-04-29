// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="container my-4">
      <h2>About eNotebook</h2>
      <div className="accordion my-3" id="aboutAccordion">

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is eNotebook?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body">
              <strong>eNotebook</strong> is a digital note management system built using the MERN stack. It allows users to securely create, read, update, and delete notes from anywhere. The app ensures only authenticated users can access and manage their notes using JSON Web Tokens.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Key Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body">
              <ul>
                <li>JWT-based secure user authentication</li>
                <li>Create, update, and delete notes with ease</li>
                <li>Real-time alert messages for user actions</li>
                <li>Clean, responsive user interface using Bootstrap</li>
                <li>Route protection using React Router</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Developer's Note
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#aboutAccordion"
          >
            <div className="accordion-body">
              This project is developed as a part of my full-stack development journey. It focuses on implementing authentication, state management, and practical use of REST APIs within a real-world application.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
