import React, { useState } from 'react';

function FoodMenu() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [discount, setDiscount] = useState(0);

  function applyCategoryFilter(categoryName) {
    setSelectedCategory(categoryName);
  }

  function applyDiscountCode(percent, codeName) {
    setDiscount(percent);
    alert('Coupon Code Applied: ' + codeName + ' (' + percent + '% OFF)');
  }

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Quick Bites Food Corner</h2>

      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-600 mb-2">Filter Category:</p>
        <div className="flex space-x-2">
          <button
            onClick={() => applyCategoryFilter('Burgers')}
            className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
          >
            Burgers
          </button>
          <button
            onClick={() => applyCategoryFilter('Pizzas')}
            className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
          >
            Pizzas
          </button>
          <button
            onClick={() => applyCategoryFilter('All')}
            className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600"
          >
            Show All
          </button>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-600 mb-2">Apply Quick Promo:</p>
        <div className="flex space-x-2">
          <button
            onClick={() => applyDiscountCode(10, 'WELCOME10')}
            className="bg-amber-500 text-white px-3 py-1 rounded text-sm hover:bg-amber-600"
          >
            10% Off
          </button>
          <button
            onClick={() => applyDiscountCode(20, 'FEAST20')}
            className="bg-purple-500 text-white px-3 py-1 rounded text-sm hover:bg-purple-600"
          >
            20% Off
          </button>
        </div>
      </div>

      <div className="p-4 bg-red-50 rounded-lg border border-red-200">
        <p className="text-gray-800">Current Category: <span className="font-bold">{selectedCategory}</span></p>
        <p className="text-gray-800">Applied Discount: <span className="font-bold">{discount}%</span></p>
      </div>
    </div>
  );
}

export default FoodMenu;
