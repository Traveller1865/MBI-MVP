import React, { useState } from 'react';
    import { X, Calendar, Utensils } from 'lucide-react';

    function NutritionForm({ onAddNutrition, onClose }) {
      const [date, setDate] = useState('');
      const [calories, setCalories] = useState('');
      const [protein, setProtein] = useState('');
      const [carbs, setCarbs] = useState('');
      const [fat, setFat] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        onAddNutrition({ date, calories, protein, carbs, fat });
      };

      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Add Nutrition</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="calories" className="block text-sm font-medium text-gray-700">
                  Calories
                </label>
                <input
                  type="number"
                  name="calories"
                  id="calories"
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="protein" className="block text-sm font-medium text-gray-700">
                    Protein (g)
                  </label>
                  <input
                    type="number"
                    name="protein"
                    id="protein"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={protein}
                    onChange={(e) => setProtein(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="carbs" className="block text-sm font-medium text-gray-700">
                    Carbs (g)
                  </label>
                  <input
                    type="number"
                    name="carbs"
                    id="carbs"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={carbs}
                    onChange={(e) => setCarbs(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="fat" className="block text-sm font-medium text-gray-700">
                    Fat (g)
                  </label>
                  <input
                    type="number"
                    name="fat"
                    id="fat"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={fat}
                    onChange={(e) => setFat(e.target.value)}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Add Nutrition
              </button>
            </form>
          </div>
        </div>
      );
    }

    export default NutritionForm;
