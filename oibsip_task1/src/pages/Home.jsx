import React from 'react';
import '../assets/Home.css';

const Home = () => {
    return (
      <div className="App">
        <header className="Header">
          <div className="header-content">
            <h1>Welcome to CarRental</h1>
            <p>Explore our wide range of cars for rent</p>
            <button className="btn">Book Now</button>
          </div>
        </header>
        <section className="Features">
          <div className="container">
            <div className="feature">
              <i className="fas fa-car"></i>
              <h2>Wide Selection</h2>
              <p>Choose from a variety of cars to suit your needs.</p>
            </div>
            <div className="feature">
              <i className="fas fa-clock"></i>
              <h2>Flexible Rental</h2>
              <p>Rent by the hour, day, week, or month.</p>
            </div>
            <div className="feature">
              <i className="fas fa-headset"></i>
              <h2>24/7 Support</h2>
              <p>Customer support available round the clock.</p>
            </div>
          </div>
        </section>
        <section className="Testimonials">
          <div className="container">
            <h2>What Our Customers Say</h2>
            <div className="testimonial">
              <p>"Best car rental service I've ever used. Highly recommended!"</p>
              <p>- Rahul</p>
            </div>
            <div className="testimonial">
              <p>"Easy booking process and great cars. Will definitely use again!"</p>
              <p>- Rohan</p>
            </div>
          </div>
        </section>
        <footer>
          <p>&copy; 2024 CarRental. All rights reserved.</p>
        </footer>
      </div>
    );
}

export default Home;
