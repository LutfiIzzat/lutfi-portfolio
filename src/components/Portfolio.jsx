import { useState } from "react";
import Collapse from "./Collapse"; // <-- Import the new component
import Game1 from '/Portfolio/Game1.png';
import Game2 from '/Portfolio/Game2.png';
import Game3 from '/Portfolio/Game3.png';
import React from "react";

const ProjectCard = ({ title, description, image, isActive, onToggle }) => (
  <div 
    className={`rounded-2xl overflow-hidden bg-[#130918] shadow-lg hover:shadow-xl transition-transform duration-300 
      ${isActive ? 'border-2 border-white' : ''} 
      hover:translate-y-[-8px] cursor-pointer`} // Hover: translate the card up
    onClick={onToggle}
  >
    <img className="w-full rounded-t-3xl" src={image} alt={title} />
    <div className="px-6 py-4 text-[#ECE2D0]">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
);

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const projectData = [
    {
      title: "Who's The Hunter",
      description: "Local 2-Player PvP chase tag competitive game.",
      image: Game1,  // Image asset
      videoURL: "https://www.youtube.com/embed/6Hc-llJl7Is?si=egszBramwn3ESRV9",  // Add YouTube video URL
      story: "The Hunted navigates through an arena, trying to reach the portal while being relentlessly hunted by The Hunter. Upon reaching the portal, The Hunted switches roles and becomes The Hunter.",
      objective: "The dynamics of the game shift as the previous Hunter now becomes The Hunted. The new Hunted must quickly adapt and navigate to a new portal to reclaim their role as The Hunter. This cycle continues until one player emerges victorious.",
      tech: "Phaser2D, Tiled, JavaScript",
    },
    {
      title: "ErrorCollisionMatrix",
      description: "Singleplayer puzzle FPS PVE game.",
      image: Game2,  // Image asset
      videoURL: "https://www.youtube.com/embed/Cr4FFt3VYT4?si=a_XZQtx8EEZmr6do",  // Add YouTube video URL
      story: "The player has a special ability to see through walls, helping them spot enemies and hidden items. This skill lets the player plan and act carefully to beat each level. The player can also shoot through walls, making it easier to take out enemies from hidden spots.",
      objective: "The player proceeds through a facility, solving puzzles and staying alive amidst the onslaught of enemies, which become more difficult with each level.",
      tech: "Unreal Engine 5, Blueprint, C++, UE Behaviour Trees",
    },
    {
      title: "Cat Scan",
      description: "Hypercasual Symbol Recognition game.",
      image: Game3,  // Image asset
      videoURL: "https://www.youtube.com/embed/4MH501NE3_c?si=JLv6tgb9zpEARY1S",  // Add YouTube video URL
      story: "Cat Scan is a puzzle drawing game where the Player, a cat named Matt, scans luggage in an airport and identifies contraband. Players draw symbols to ensure items are flagged by the scanner.",
      objective: "This endless game challenges players to achieve a high score and secure a place on the leaderboard, continuing until all player health points are lost.",
      tech: "Fingers Unity Assets, Unity, C#, Mobile (Android)",
    },
  ];


  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="projects" className="p-6 bg-[#DFD0B8]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#130918] mb-8 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, idx) => (
          <ProjectCard
            key={idx}
            {...project}
            isActive={openIndex === idx}
            onToggle={() => handleToggle(idx)}
          />
        ))}
      </div>

<Collapse isOpen={openIndex !== null}>
  {openIndex !== null && (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Video section (same dimensions as the image) */}
      <iframe
        width="1200"
        height="600"
        src={projectData[openIndex].videoURL}  // Directly use the videoURL from projectData
        title={projectData[openIndex].title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="object-cover rounded-lg"
      ></iframe>


      {/* Text section (smaller width) */}
      <div className="w-full md:w-1/3 flex flex-col justify-between text-[#130918]">
        {/* This wrapper takes only 50% of the height */}
        <div className="h-1/2 flex flex-col justify-between pt-10 pl-6 pr-6">
          {/* Overview */}
          <div>
            <h3 className="font-bold text-lg mb-1">Overview</h3>
            <p className="text-sm mb-3">{projectData[openIndex].story}</p>
          </div>

          {/* Objective */}
          <div>
            <h3 className="font-bold text-lg mb-1">Objective</h3>
            <p className="text-sm mb-3">{projectData[openIndex].objective}</p>
          </div>

          {/* Tech */}
          <div>
            <h3 className="font-bold text-lg mb-1">Tech Used</h3>
            <p className="text-sm">{projectData[openIndex].tech}</p>
          </div>
        </div>

        {/* You can use this second half for anything else */}
        <div className="h-1/2">
          {/* Custom content goes here */}
        </div>
      </div>
    </div>
  )}
</Collapse>



    </div>
  );
};

export default Projects;
