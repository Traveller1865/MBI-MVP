import React from 'react';
import { Calendar, FileText, MessageCircle, Dumbbell, Utensils } from 'lucide-react';
import { motion } from 'framer-motion';

function QuickActionsPanel() {
    const buttonVariants = {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                type: "spring",
                stiffness: 150
            }
        },
        tap: { scale: 0.95 }
    };

    return (
        <div className="space-y-2">
            <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg"
                title="Book a telehealth or in-person appointment"
            >
                <Calendar className="h-5 w-5" />
                <span>Schedule Visit</span>
            </motion.button>
            <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg"
                title="View your medical records and appointment history"
            >
                <FileText className="h-5 w-5" />
                <span>View Records</span>
            </motion.button>
            <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg"
                title="Send a secure message to your healthcare provider"
            >
                <MessageCircle className="h-5 w-5" />
                <span>Message Provider</span>
            </motion.button>
            <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg"
                title="Log your workout activity"
            >
                <Dumbbell className="h-5 w-5" />
                <span>Log Workout</span>
            </motion.button>
            <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="w-full flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-4 py-2 rounded-lg"
                title="Log your daily meal intake"
            >
                <Utensils className="h-5 w-5" />
                <span>Log Meal</span>
            </motion.button>
        </div>
    );
}

export default QuickActionsPanel;
