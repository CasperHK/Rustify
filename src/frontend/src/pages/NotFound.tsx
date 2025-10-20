import React from 'react';

const NotFound = () => (
  <div class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
    <div class="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full text-center">
      <h1 class="text-5xl font-bold text-blue-700 mb-4">404</h1>
      <h2 class="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p class="text-gray-700 mb-6">Sorry, the page you are looking for does not exist.</p>
      <a href="/" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Go Home</a>
    </div>
  </div>
);

export default NotFound;