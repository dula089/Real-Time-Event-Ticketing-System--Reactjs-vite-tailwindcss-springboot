import React from "react";
import { Link } from "react-router-dom";
import TicketAnimation from "../components/TicketAnimation";

// Define FeatureCard component before using it
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-blue-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Welcome to the Ticket Management System
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              An efficient solution for managing ticket sales, monitoring capacity,
              and analyzing customer flow in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/config"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 text-center"
              >
                Configure System
              </Link>
              <Link
                to="/logs"
                className="bg-gray-100 hover:bg-gray-200 text-blue-800 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 text-center"
              >
                View Logs
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <TicketAnimation />
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon="🎫" 
            title="Ticket Management" 
            description="Monitor ticket availability and sales in real-time with dynamic updates."
          />
          <FeatureCard 
            icon="⚙️" 
            title="Flexible Configuration" 
            description="Customize ticket capacity, release rates, and customer retrieval patterns."
          />
          <FeatureCard 
            icon="📊" 
            title="Detailed Logs" 
            description="Track all system activities with comprehensive timestamped logs."
          />
        </div>
        
      </div>
    
    </div>
  );
};

export default HomePage;