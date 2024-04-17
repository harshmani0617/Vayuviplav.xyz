import React, { Component } from 'react'

export default class Donation extends Component {
  render() {
    return (
      <>


<section className="bg-blue-200 py-10 mx-14 px-5 mt-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6">Support Our Cause</h2>
        <p className="text-lg text-blue-700 mb-4">
          Your donation can make a significant impact in the fight against climate change and environmental degradation. 
          Consider supporting our cause to help us continue our efforts to create a more sustainable future.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Donate Now
          </button>
        </div>
      </div>
    </section>
      
      
      </>
    )
  }
}
