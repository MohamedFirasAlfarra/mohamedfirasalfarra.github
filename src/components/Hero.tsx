import React from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <br /> <span className="text-indigo-600">Mohamed Firas Alfarra</span><br /> <span id="change-texts"></span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Full-Stack Developer and UIUX Desginer specializing in building exceptional digital experiences
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Mohamed-Firas"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-indigo-600 hover:text-gray-600 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-firas-alfarra-130b01274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-indigo-600 hover:text-gray-600 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/code.withfiras?igsh=MW1nODFydmc2aThpOQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-indigo-600 hover:text-gray-600 transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <div id='myphoto' className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
            <img id='myphoto'
              src="src\images\MyPhoto.png"
              alt="Profile"
              className="rounded-full  object-left w-96 h-96 shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}