import { ExternalLink } from 'lucide-react';

import HairCut from "../images/HairCut.jpg";
import mycalculator from "../images/mycalculator.png";
import BodyBuilding from "../images/BodyBuilding.jpg";
import Calculator from "../images/Calculator.jpg";
import RoyalAirplanes from "../images/royal.jpg";
import RoyalDriving from "../images/RoyalDriving.jpg";
import crud from "../images/CRUD.jpg";
import opodmusic from "../images/opodmusic.png";
import Tradely from "../images/Tradely.jpg";
import SacredJourney from "../images/Sacred Journey.jpg";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "ELITE CUTS",
      description: "A full-featured e-commerce platform built with React and Node.js",
      technologies: "React.js TalwindCss",
      image: HairCut,
      demo: "https://mohamedfirasalfarra.github.io/EliteCuts/"
    },
    {
      id: 2,
      title: "Tradely",
      description: "A full-featured e-commerce platform built with Figma",
      technologies: "UI UX in Figma",
      image: Tradely ,
    },
    {
      id: 3,
      title: "Sacred Journey",
      description: "Makes it easy for users to navigate and book their religious travel packages.",
      technologies: "Next.Js & Prisma &TalwindCss ",
      image: SacredJourney,
      demo: "https://mohamedfirasalfarra.github.io/Sacred_Journey/"
    },

    {
      id: 4,
      title: "Body Building",
      description: "A full-featured e-commerce platform built with React and Node.js",
      technologies: "React.Js & TalwindCss & Laravel",
      image: "https://as2.ftcdn.net/v2/jpg/03/16/58/57/1000_F_316585784_XykKca4Uetd5RuelyAfGmHPnDQMxA6vX.jpg",
      github: "https://mohamedfirasalfarra.github.io/Body-Building/",
    },
    {
      id: 5,
      title: "Royal Airplanes",
      description: "A full-featured e-commerce platform built with React and Node.js",
      technologies: "Html,Css,Js,Php,Sql",
      image: RoyalAirplanes,
      github: "https://mohamedfirasalfarra.github.io/Royal_Airplanes/",
    },
    {
      id: 6,
      title: "CRUD",
      description: "A full-featured e-commerce platform built with React and Node.js",
      technologies: "Html,Css,Js",
      image: crud,
      github: "https://mohamedfirasalfarra.github.io/CRUD/",
    },
    {
      id: 7,
      title: "MyCalculator",
      description: "A full-featured e-commerce platform built with React and Node.js",
      technologies: "React.js",
      image: mycalculator,
      github: "https://mohamedfirasalfarra.github.io/MyCalcuatorReact/",
    },
    {
      id: 8,
      title: "Royal Driving",
      description: "A full-featured e-commerce platform built with React and Node.js",
      technologies: "Html,Css,Js,Bootstrap",
      image: RoyalDriving,
      github: "https://mohamedfirasalfarra.github.io/Royal_Driving/",
    },
    {
      id: 9,
      title: "OpodMusic",
      description: "A full-featured e-commerce platform built with React and Node.js",
      technologies: "Html,Css,Js",
      image: opodmusic,
      github: "https://mohamedfirasalfarra.github.io/OpodMusic/",
    },
    {
      id: 10,
      title: "My Calculator",
      description: "A full-featured e-commerce platform built with React and Node.js",
      technologies: "Html,Css,Js",
      image: Calculator,
      github: "https://mohamedfirasalfarra.github.io/MyCalculator/",
    },
  
  ];

  return (
    <div id="projects" className="py-24 bg-gradient-to-br from-gray-300 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-16" id="title">Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-indigo-600 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-gray-600 mb-4">{project.technologies}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}