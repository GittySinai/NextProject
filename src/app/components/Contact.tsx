import React from 'react';

function Contact() {
  return (
    <div className="w-1/3 mx-auto my-4 p-4 bg-white rounded-lg shadow-md">
      <img
        src="https://via.placeholder.com/80" 
        alt="Avatar"
        className="w-20 h-20 rounded-full mx-auto mb-2" 
      />
      <div className="text-center"> 
        <h2 className="text-xl font-bold">Full Name</h2>
        <p className="text-gray-600">Job Title</p>
        <p className="text-gray-600">Email: example@example.com</p>
        <p className="text-gray-600">Phone: (123) 456-7890</p>
      </div>
    </div>
  );
}

export default Contact;
