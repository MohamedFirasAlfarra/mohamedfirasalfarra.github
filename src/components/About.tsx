import React from 'react';
import { Code, Laptop, MoonIcon, Pen, RepeatIcon, Server } from 'lucide-react';

export function About() {
  return (
    <div id="about" className="py-44  bg-gradient-to-br from-gray-300 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-16 " id="title">About Me</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            I'm a passionate developer with 2 years of experience in building web applications .   
            I love creating elegant solutions to complex problems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-100 p-8 rounded-xl">
            <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Code className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend Development</h3>
            <p className="text-gray-600">
              Experienced in React, JavaScript, and modern CSS frameworks like Tailwind and Bootstrap.
            </p>
          </div>

          <div className="bg-slate-100 p-8 rounded-xl">
            <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Server className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Backend Development</h3>
            <p className="text-gray-600">
              Proficient in PHP, and Laravel technologies.
            </p>
          </div>

          <div className="bg-slate-100 p-8 rounded-xl">
            <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Pen className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">UI/UX Design</h3>
            <p className="text-gray-600">
              Creating beautiful and intuitive user interfaces with attention to detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}