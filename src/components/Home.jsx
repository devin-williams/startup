import React, { useState, useEffect } from 'react';

const Home = () => {
  const [expandedFeatures, setExpandedFeatures] = useState([]);

  const features = [
    {
      title: 'Secure Cloud Hosting',
      description: 'Access QuickBooks from anywhere with our secure cloud hosting solution.',
    },
    {
      title: 'Automatic Backups',
      description: 'Never worry about losing your data with our automatic backup feature.',
    },
    {
      title: '24/7 IT Support',
      description: 'Get help whenever you need it with our 24/7 IT support team.',
    },
  ];

  const toggleFeature = (index) => {
    setExpandedFeatures((prevExpandedFeatures) =>
      prevExpandedFeatures.includes(index)
        ? prevExpandedFeatures.filter((i) => i !== index)
        : [...prevExpandedFeatures, index]
    );
  };

  return (
    <main>
      <div className="container">
        <p>Your ultimate solution for cloud-based bookkeeping.</p>
        <div className="features">
          <h2>Key Features</h2>
          {features.map((feature, index) => (
            <div key={index} className="feature">
              <h3 onClick={() => toggleFeature(index)}>
                {feature.title}
                <span className={`arrow ${expandedFeatures.includes(index) ? 'down' : 'right'}`}></span>
              </h3>
              {expandedFeatures.includes(index) && <p>{feature.description}</p>}
            </div>
          ))}
        </div>
        <img src="/assets/images/bookkeeping.jpg" alt="Bookkeeping" />
      </div>
    </main>
  );
};

export default Home;