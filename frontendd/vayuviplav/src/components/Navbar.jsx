import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className='bg-green-700 p-4 relative'>
          <div className="ticker">
            <span className="breaking-label bg-red-500 px-2 py-4 absolute top-0 left-0 z-10">Today's Breaking:</span>
            <span className="breaking-news ml-16 text-white">This is a breaking news headline. This is a breaking news headline. This is a breaking news headline.</span>
          </div>
        </nav>
      </>
    );
  }
}
