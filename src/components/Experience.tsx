import React from 'react';
import { Briefcase } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      position: "Senior Front_End Developer",
      period: "2022 - Present",
      description: "Teacher and trainer in the field of designing and programming front-end web pages within an institute in Damascus."
    },
    {
      position: "Junior Back_End Developer",
      period: "2024 - Present",
      description: "Teacher and trainer in the field of designing and programming back-end web pages within an institute in Damascus."
    },
    {
      position: "Mobail Application Developer",
      period: "2024",
      description: "Teacher and trainer in the field of designing and programming front-end interfaces for web pages and mobile applications {online course}"
    },
    {
      position: "Junior Developer in UI/UX",
      period: "2023",
      description: "Started my journey as a web developer. Learned modern web technologies and best practices."
    }
  ];

  return (
    <div id="experience" className="py-24 bg-gradient-to-br from-gray-300 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-16" id="title">Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                  {/* <p className="text-indigo-600 font-medium mb-2">{exp.company}</p> */}
                  <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}