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
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md border border-amber-200/80">
      <div className="border-b border-amber-100 pb-3 mb-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
          Quick Bites Food Corner
        </h2>
      </div>

      <div className="mb-4">
        <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Filter Category:</p>
        <div className="flex space-x-2">
          <button
            onClick={() => applyCategoryFilter('Burgers')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition"
          >
            Burgers
          </button>
          <button
            onClick={() => applyCategoryFilter('Pizzas')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition"
          >
            Pizzas
          </button>
          <button
            onClick={() => applyCategoryFilter('All')}
            className="bg-stone-700 hover:bg-stone-800 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition"
          >
            Show All
          </button>
        </div>
      </div>

      <div className="mb-5">
        <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Apply Quick Promo:</p>
        <div className="flex space-x-2">
          <button
            onClick={() => applyDiscountCode(10, 'WELCOME10')}
            className="bg-rose-500 hover:bg-rose-600 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition"
          >
            10% Off
          </button>
          <button
            onClick={() => applyDiscountCode(20, 'FEAST20')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-sm transition"
          >
            20% Off
          </button>
        </div>
      </div>

      <div className="p-4 bg-amber-50/80 rounded-lg border border-amber-200 text-sm space-y-1">
        <p className="text-stone-700 font-medium">Current Category: <span className="font-bold text-amber-800">{selectedCategory}</span></p>
        <p className="text-stone-700 font-medium">Applied Discount: <span className="font-bold text-amber-800">{discount}%</span></p>
      </div>
    </div>
  );
}

export default FoodMenu;
