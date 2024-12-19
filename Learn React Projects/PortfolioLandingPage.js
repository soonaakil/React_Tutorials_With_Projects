import React from 'react';

const Portfolio = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">John Doe</h1>
        <p className="text-lg font-medium">Full Stack Developer</p>
      </header>
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg font-medium mb-4">I'm a full stack developer with a passion for building scalable and maintainable applications. I have experience with a variety of technologies, including React, Node.js, and MongoDB.</p>
        <button className="block w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500">Learn More</button>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex justify-center items-center cursor-pointer">
            <p className="text-lg font-medium">Project 1</p>
          </div>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex justify-center items-center cursor-pointer">
            <p className="text-lg font-medium">Project 2</p>
          </div>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex justify-center items-center cursor-pointer">
            <p className="text-lg font-medium">Project 3</p>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
            <input className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500" type="text" id="name" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500" type="email" id="email" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
            <textarea className="block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500" id="message" />
          </div>
          <button className="block w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500" type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Portfolio;
