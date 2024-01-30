import React from "react";
import "../App.css";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <div className="about-content">
          <h2>Welcome to My Notebook App! </h2>
          <p>Your trusted companion for storing notes on the cloud 📝☁️</p>
          <h3>Why Choose Us? 🚀</h3>
          <ul>
            <li>
              Secure Cloud Storage: Your notes are securely stored in the cloud,
              accessible anytime, anywhere.
            </li>
            <li>
              User-Friendly Interface: Our app features an intuitive interface
              for effortless note-taking.
            </li>
            <li>
              Sync Across Devices: Seamlessly sync your notes across all your
              devices for easy access.
            </li>
            <li>
              Customizable Experience: Personalize your notebook with themes and
              settings to suit your style.
            </li>
          </ul>
          <h3>Our Commitment 🌟</h3>
          <p>
            At My Notebook App, we are committed to providing you with a
            reliable and secure platform to organize your thoughts and ideas.
            Your privacy and data security are our top priorities.
          </p>
          <p>
            Join thousands of users who trust My Notebook App for their
            note-taking needs!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
