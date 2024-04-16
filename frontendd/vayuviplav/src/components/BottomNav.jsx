import React from 'react';

const BottomNav = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-400">123 Main Street, City</p>
            <p className="text-gray-400">contact@example.com</p>
            <p className="text-gray-400">+123 456 7890</p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.388 6.386a.747.747 0 111.055-1.055.747.747 0 01-1.055 1.055zm7.166 7.166a.747.747 0 100-1.494.747.747 0 000 1.494zm1.22-5.104a5.831 5.831 0 00-.463-2.35 5.923 5.923 0 00-1.372-1.944 6.005 6.005 0 00-1.944-1.372 5.83 5.83 0 00-2.35-.463c-.795-.093-1.588-.093-2.383 0a5.83 5.83 0 00-2.35.463 5.923 5.923 0 00-1.944 1.372 6.005 6.005 0 00-1.372 1.944 5.83 5.83 0 00-.463 2.35c-.093.795-.093 1.588 0 2.383a5.83 5.83 0 00.463 2.35 5.923 5.923 0 001.372 1.944 6.005 6.005 0 001.944 1.372 5.83 5.83 0 002.35.463c.795.093 1.588.093 2.383 0a5.83 5.83 0 002.35-.463 5.923 5.923 0 001.944-1.372 6.005 6.005 0 001.372-1.944 5.83 5.83 0 00.463-2.35c.093-.795.093-1.588 0-2.383zM12.5 10a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 6.733c0-.414.336-.75.75-.75h2.5a.75.75 0 110 1.5h-2.5a.75.75 0 01-.75-.75zm5.26-.75a1 1 0 00-1.47-.27 5.544 5.544 0 00-3.044-1.17 5.666 5.666 0 00-3.878 1.09 5.626 5.626 0 00-1.835 2.72A5.507 5.507 0 004 10c0 1.458.56 2.818 1.573 3.83A5.626 5.626 0 009.25 15.5c.918 0 1.795-.277 2.536-.8a5.666 5.666 0 001.834-2.72 5.544 5.544 0 001.04-3.044 1 1 0 00-.27-.73zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM13 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1.402 1.05a4.5 4.5 0 10-4.196 0L5 10.5h2.457l.618-1.225a.75.75 0 01.678-.408H11.25a.75.75 0 01.678.408L12.543 10.5H15l-1.402-2.95zM10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BottomNav;
