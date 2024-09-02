import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaCode, FaTiktok } from 'react-icons/fa';

const HomeSection = () => {
    const goals = [
        {
            title: 'Taking IELTS Test (7.5 Overall) - For applying to Georgia Tech',
            status: 'in progress',
        },
        {
            title: 'Learning Machine Learning Specialization by Andrew Ng in Coursera',
            status: 'in progress',
        },
        // Add more items if needed
    ];

    const getVariants = () => ({
        offscreen: { opacity: 0, y: 100 },
        onscreen: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    });

    return (
        <motion.div
            className="container mx-auto text-center flex flex-col justify-center items-center"
            initial='offscreen'
            variants={getVariants()}
            whileInView={'onscreen'}
            viewport={{ amount: 0.2, once: true }}
        >
            <div className="mb-8 text-8xl">
                <h1 className="work-sans-google">Tech Talk</h1>
                <p className="sm:text-4xl text-2xl font-light open-sans">
                    Welcome to my journey of learning.
                </p>
            </div>
            <p className="text-lg text-gray-600 mb-8">
                I’m a Computer Science graduate from Binus University, with experience in React, Node.js, and many more. This site represents my ongoing learning journey, showcasing my current goals and projects.
            </p>
            <div className='flex sm:flex-row flex-col w-full gap-3 justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
                        <h2 className="text-2xl font-semibold mb-4">What I'm Learning & Aiming For</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-60 overflow-y-auto">
                            {goals.map((goal, index) => (
                                <div
                                    key={index}
                                    className={`p-4 border rounded-md flex flex-col justify-between ${goal.status === 'in progress' ? 'border-yellow-400 bg-yellow-50' : 'border-green-400 bg-green-50'
                                        }`}
                                >
                                    <span>{goal.title}</span>
                                    <span className="text-sm font-medium text-gray-500 mt-2 self-end">{goal.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex space-x-6 text-gray-600">
                <a href="https://www.linkedin.com/in/dwiki-dwiki-97610b223/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-600">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/dwikis17" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-900">
                    <FaGithub />
                </a>
                <a href="https://www.tiktok.com/@techtalk.id_" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500">
                    <FaTiktok />
                </a>
                <a href="https://www.instagram.com/techtalk.id" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500">
                    <FaInstagram />
                </a>
                <a href="https://leetcode.com/u/dwikis17/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-yellow-500">
                    <FaCode />
                </a>
            </div>
        </motion.div>
    );
};

export default HomeSection;
