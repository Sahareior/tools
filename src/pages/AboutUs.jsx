import React from 'react';
import { FaUsers, FaGlobe, FaHandshake } from 'react-icons/fa';

const AboutUs = () => {
  const cards = [
    {
      icon: <FaUsers size={30} className="text-red-600" />,
      title: 'Who We Are',
      description:
        'We are a passionate team dedicated to helping people explore new destinations and experiences.',
    },
    {
      icon: <FaGlobe size={30} className="text-red-600" />,
      title: 'Our Mission',
      description:
        'Our mission is to connect travelers with meaningful journeys while ensuring safety and satisfaction.',
    },
    {
      icon: <FaHandshake size={30} className="text-red-600" />,
      title: 'Why Choose Us',
      description:
        'Trusted by thousands, we offer curated travel experiences, support, and unbeatable prices.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100" id="about">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Learn more about our values, goals, and the people behind the service.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="mb-4 flex justify-center">{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
