import React from 'react';
import logo from '../images/moon1.jpg';
import { Link } from 'react-router-dom';
import { Carousel, Row, Col } from 'react-bootstrap';
import image1 from '../images/productivite.jpg';
import image2 from '../images/santeMentale.jpg';

function onSignIn() {
  window.location.href = '/auth'
}

function HomePage() {

  const sleepStatistics = [
    {
      title: 'Increased Productivity',
      description: 'Quality sleep enhances concentration and performance at work.',
      image: image1,
    },
    {
      title: 'Improved Mental Health',
      description: 'Good sleep promotes better mental health, reducing stress and anxiety.',
      image: image2,
    },

  ];


  const userReviews = [
    {
      quote: 'SleepyGo helped me improve my sleep quality. Highly recommended!',
      author: 'John Doe',
    },
    {
      quote: "I've never slept better since I started using SleepyGo. A must-try!",
      author: 'Jane Smith',
    },
    {
      quote: 'SleepyGo has changed my life. I wake up refreshed and energized every day.',
      author: 'David Johnson',
    },

  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <header className="text-center mt-5">
            <img src={logo} className="App-logo img-fluid" alt="logo" style={{ maxWidth: '200px' }} />
          </header>
          <div className="text-center mt-5">
            <h1>Welcome to SleepyGo</h1>
            <p>Let good sleep take care of your mental health</p>
            <div className="mt-4">
              <Link to="/auth" className="btn btn-primary">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="mt-5">
            <h2>User Reviews</h2>
            <Carousel>
              {userReviews.map((review, index) => (
                <Carousel.Item key={index}>
                  <div className="text-center">
                    <blockquote className="blockquote">
                      <p className="mb-0">{review.quote}</p>
                      <footer className="blockquote-footer">{review.author}</footer>
                    </blockquote>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="mt-5">
            <h2>Sleep Statistics</h2>
            <Carousel>
              {sleepStatistics.map((statistic, index) => (
                <Carousel.Item key={index}>
                  <div className="text-center">
                    <img src={statistic.image} alt={statistic.title} style={{ maxWidth: '150px' }} />
                    <h3>{statistic.title}</h3>
                    <p>{statistic.description}</p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
