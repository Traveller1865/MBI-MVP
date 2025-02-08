import React from 'react';
import BiometricOverview from './BiometricOverview';
import ActivityRings from './ActivityRings';
import NutritionProgress from './NutritionProgress';
import HealthInsights from './HealthInsights';
import Gamification from './Gamification';

function Home() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                <BiometricOverview />
                <ActivityRings />
                <NutritionProgress />
                <HealthInsights/>
            </div>
            <div className='col-span-1'>
                <Gamification />
            </div>
        </div>
    )
}

export default Home;
