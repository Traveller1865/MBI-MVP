import React, { useState, useEffect } from 'react';
    import { Heart, Activity as HRVIcon, Moon, Thermometer, AlertTriangle, Dumbbell, Utensils, TrendingUp, TrendingDown, Award, PlusCircle } from 'lucide-react';
    import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
    import WorkoutForm from './WellnessTracking/WorkoutForm';
    import NutritionForm from './WellnessTracking/NutritionForm';
    import AIWorkoutPlan from './WellnessTracking/AIWorkoutPlan';

    function WellnessTracking() {
      // Simulated wearable data (replace with actual API calls)
      const [wearableData, setWearableData] = useState({
        sleep: { hours: 7.5, quality: 80 },
        hrv: { value: 65, status: 'good' },
        stress: { level: 'low', score: 30 },
        temperature: { value: 98.6, status: 'normal' },
      });

      // Simulated historical data for trends (replace with actual data)
      const [dailyTrends, setDailyTrends] = useState(generateTrendData(1));
      const [weeklyTrends, setWeeklyTrends] = useState(generateTrendData(7));
      const [monthlyTrends, setMonthlyTrends] = useState(generateTrendData(30));
      const [selectedTrend, setSelectedTrend] = useState('daily'); // 'daily', 'weekly', 'monthly'

      // Workout and Nutrition Logs
      const [workouts, setWorkouts] = useState([]);
      const [nutrition, setNutrition] = useState([]);

      // Gamification
      const [points, setPoints] = useState(1250);
      const [goals, setGoals] = useState([
        { id: 1, name: 'Daily Steps', current: 8000, target: 10000, color: 'blue' },
        { id: 2, name: 'Workout Minutes', current: 120, target: 150, color: 'green' },
        { id: 3, name: 'Calories Burned', current: 1800, target: 2200, color: 'yellow' },
      ]);

      // Form visibility
      const [showWorkoutForm, setShowWorkoutForm] = useState(false);
      const [showNutritionForm, setShowNutritionForm] = useState(false);

      // AI Workout Plan
      const [showAIWorkoutPlan, setShowAIWorkoutPlan] = useState(false);

      // Simulate data updates (replace with actual data fetching)
      useEffect(() => {
        const interval = setInterval(() => {
          setWearableData({
            sleep: { hours: Math.random() * 3 + 6, quality: Math.random() * 40 + 60 },
            hrv: { value: Math.random() * 30 + 50, status: ['poor', 'fair', 'good'][Math.floor(Math.random() * 3)] },
            stress: { level: ['low', 'moderate', 'high'][Math.floor(Math.random() * 3)], score: Math.random() * 100 },
            temperature: { value: Math.random() * 2 + 97, status: ['low', 'normal', 'high'][Math.floor(Math.random() * 3)] },
          });
          setDailyTrends(generateTrendData(1));
          setWeeklyTrends(generateTrendData(7));
          setMonthlyTrends(generateTrendData(30));
        }, 5000); // Update every 5 seconds

        return () => clearInterval(interval);
      }, []);

      // Add workout
      const handleAddWorkout = (workout) => {
        setWorkouts([...workouts, workout]);
        setPoints(points + 150); // Add points for logging a workout
        setShowWorkoutForm(false);
      };

      // Add nutrition
      const handleAddNutrition = (nutritionEntry) => {
        setNutrition([...nutrition, nutritionEntry]);
        setPoints(points + 100); // Add points for logging nutrition
        setShowNutritionForm(false);
      };

      // Generate AI Workout Plan
      const handleGenerateAIWorkoutPlan = () => {
        setShowAIWorkoutPlan(true);
      };

      return (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Wellness Tracking</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Award className="h-6 w-6 text-yellow-500 mr-2" />
                <p className="text-lg font-semibold">{points} Points</p>
              </div>
            </div>
          </div>

          {/* Wearable Data Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Sleep */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <Moon className="h-6 w-6 text-indigo-500 mr-2" />
                <h3 className="text-xl font-semibold">Sleep</h3>
              </div>
              <p className="text-3xl font-bold">{wearableData.sleep.hours.toFixed(1)} hrs</p>
              <p className="text-gray-600">Quality: {wearableData.sleep.quality.toFixed(0)}%</p>
            </div>

            {/* HRV */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <HRVIcon className="h-6 w-6 text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold">HRV</h3>
              </div>
              <p className="text-3xl font-bold">{wearableData.hrv.value.toFixed(0)} ms</p>
              <p className="text-gray-600">Status: {wearableData.hrv.status}</p>
            </div>

            {/* Stress */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <AlertTriangle className="h-6 w-6 text-yellow-500 mr-2" />
                <h3 className="text-xl font-semibold">Stress</h3>
              </div>
              <p className="text-3xl font-bold">{wearableData.stress.level}</p>
              <p className="text-gray-600">Score: {wearableData.stress.score.toFixed(0)}</p>
            </div>

            {/* Temperature */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-2">
                <Thermometer className="h-6 w-6 text-red-500 mr-2" />
                <h3 className="text-xl font-semibold">Temperature</h3>
              </div>
              <p className="text-3xl font-bold">{wearableData.temperature.value.toFixed(1)}°F</p>
              <p className="text-gray-600">Status: {wearableData.temperature.status}</p>
            </div>
          </div>

          {/* Trend Charts */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Wellness Trends</h3>
              <div className="flex gap-4">
                <button
                  onClick={() => setSelectedTrend('daily')}
                  className={`px-4 py-2 rounded-lg ${selectedTrend === 'daily' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  Daily
                </button>
                <button
                  onClick={() => setSelectedTrend('weekly')}
                  className={`px-4 py-2 rounded-lg ${selectedTrend === 'weekly' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  Weekly
                </button>
                <button
                  onClick={() => setSelectedTrend('monthly')}
                  className={`px-4 py-2 rounded-lg ${selectedTrend === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                >
                  Monthly
                </button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={selectedTrend === 'daily' ? dailyTrends : selectedTrend === 'weekly' ? weeklyTrends : monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sleep" stroke="#8884d8" name="Sleep (hrs)" />
                <Line type="monotone" dataKey="hrv" stroke="#82ca9d" name="HRV (ms)" />
                <Line type="monotone" dataKey="stress" stroke="#ffc658" name="Stress" />
                <Line type="monotone" dataKey="temperature" stroke="#f44336" name="Temp (°F)" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Workout and Nutrition Logging */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Workout Log */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Workout Log</h3>
                <button
                  onClick={() => setShowWorkoutForm(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
                >
                  <PlusCircle className="h-5 w-5" />
                  Add Workout
                </button>
              </div>
              {workouts.length === 0 ? (
                <p className="text-gray-600">No workouts logged yet.</p>
              ) : (
                <div className="space-y-2">
                  {workouts.map((workout, index) => (
                    <div key={index} className="p-2 border rounded-lg">
                      <p className="font-semibold">{workout.type} - {workout.duration} min</p>
                      <p className="text-gray-600">{workout.date}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Nutrition Log */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Nutrition Log</h3>
                <button
                  onClick={() => setShowNutritionForm(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
                >
                  <PlusCircle className="h-5 w-5" />
                  Add Nutrition
                </button>
              </div>
              {nutrition.length === 0 ? (
                <p className="text-gray-600">No nutrition logged yet.</p>
              ) : (
                <div className="space-y-2">
                  {nutrition.map((entry, index) => (
                    <div key={index} className="p-2 border rounded-lg">
                      <p className="font-semibold">{entry.calories} kcal - {entry.date}</p>
                      <p className="text-gray-600">Protein: {entry.protein}g, Carbs: {entry.carbs}g, Fat: {entry.fat}g</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Gamification - Progress Bars */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4">Health Goals</h3>
            <div className="space-y-4">
              {goals.map((goal) => (
                <div key={goal.id}>
                  <p className="text-gray-600">{goal.name} ({goal.current}/{goal.target})</p>
                  <div className="h-4 bg-gray-200 rounded-full">
                    <div
                      className={`h-full bg-${goal.color}-500 rounded-full`}
                      style={{ width: `${(goal.current / goal.target) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Workout Plan Button */}
          <button
            onClick={handleGenerateAIWorkoutPlan}
            className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-700"
          >
            <Dumbbell className="h-5 w-5" />
            Generate AI Workout Plan
          </button>

          {/* Modals */}
          {showWorkoutForm && <WorkoutForm onAddWorkout={handleAddWorkout} onClose={() => setShowWorkoutForm(false)} />}
          {showNutritionForm && <NutritionForm onAddNutrition={handleAddNutrition} onClose={() => setShowNutritionForm(false)} />}
          {showAIWorkoutPlan && <AIWorkoutPlan onClose={() => setShowAIWorkoutPlan(false)} />}
        </div>
      );
    }

    // Helper function to generate simulated trend data
    function generateTrendData(days) {
      const data = [];
      for (let i = 0; i < days; i++) {
        data.push({
          time: `Day ${i + 1}`,
          sleep: Math.random() * 3 + 6,
          hrv: Math.random() * 30 + 50,
          stress: Math.random() * 100,
          temperature: Math.random() * 2 + 97,
        });
      }
      return data;
    }

    export default WellnessTracking;
