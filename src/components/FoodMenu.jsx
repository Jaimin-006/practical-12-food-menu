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
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-sm border border-orange-200">
      <h2 className="text-2xl font-bold font-serif text-orange-700 mb-4 border-b border-orange-100 pb-2">
        Quick Bites Food Corner
      </h2>

      <div className="mb-4">
        <p className="text-xs font-semibold text-stone-600 mb-2">Filter Category:</p>
        <div className="flex space-x-2">
          <button
            onClick={() => applyCategoryFilter('Burgers')}
            className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1.5 rounded-md text-xs font-semibold transition"
          >
            Burgers
          </button>
          <button
            onClick={() => applyCategoryFilter('Pizzas')}
            className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-1.5 rounded-md text-xs font-semibold transition"
          >
            Pizzas
          </button>
          <button
            onClick={() => applyCategoryFilter('All')}
            className="bg-stone-600 hover:bg-stone-700 text-white px-3 py-1.5 rounded-md text-xs font-semibold transition"
          >
            Show All
          </button>
        </div>
      </div>

      <div className="mb-5">
        <p className="text-xs font-semibold text-stone-600 mb-2">Apply Quick Promo:</p>
        <div className="flex space-x-2">
          <button
            onClick={() => applyDiscountCode(10, 'WELCOME10')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded-md text-xs font-semibold transition"
          >
            10% Off
          </button>
          <button
            onClick={() => applyDiscountCode(20, 'FEAST20')}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-md text-xs font-semibold transition"
          >
            20% Off
          </button>
        </div>
      </div>

      <div className="p-4 bg-orange-50/70 rounded-md border border-orange-200 text-sm space-y-1">
        <p className="text-stone-800">Current Category: <span className="font-bold text-orange-800">{selectedCategory}</span></p>
        <p className="text-stone-800">Applied Discount: <span className="font-bold text-orange-800">{discount}%</span></p>
      </div>
    </div>
  );
}

export default FoodMenu;
