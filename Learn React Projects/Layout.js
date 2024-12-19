import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4">
      <h1 className="text-3xl font-bold">Welcome to our website!</h1>
    </header>
  );
};

const LeftSidebar = () => {
  return (
    <aside className="fixed top-16 left-0 w-64 h-screen bg-gray-600 text-white p-4">
      <h2 className="text-2xl font-bold">Left Sidebar</h2>
      <ul>
        <li className="mb-2">
          <a href="#home" className="text-sm text-white hover:text-gray-300">
            Home
          </a>
        </li>
        <li className="mb-2">
          <a href="#about" className="text-sm text-white hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="text-sm text-white hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>
    </aside>
  );
};

const RightSidebar = () => {
  return (
    <aside className="fixed top-16 right-0 w-64 h-screen bg-gray-600 text-white p-4">
      <h2 className="text-2xl font-bold">Right Sidebar</h2>
      <p className="text-sm text-white">This is the right sidebar.</p>
    </aside>
  );
};

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4">
      <p className="text-sm text-white">&copy; 2023 Our Website</p>
    </footer>
  );
};

const Home = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mt-24 ml-64 mr-64 mb-16">
      <h1 className="text-3xl font-bold mb-4">Welcome to our website!</h1>
      <p className="text-sm text-gray-700">This is the home page.</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mt-24 ml-64 mr-64 mb-16">
      <h1 className="text-3xl font-bold mb-4">About us</h1>
      <p className="text-sm text-gray-700">We are a team of developers.</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mt-24 ml-64 mr-64 mb-16">
      <h1 className="text-3xl font-bold mb-4">Contact us</h1>
      <p className="text-sm text-gray-700">Email: example@example.com</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <LeftSidebar />
      <RightSidebar />
      <Footer />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;
