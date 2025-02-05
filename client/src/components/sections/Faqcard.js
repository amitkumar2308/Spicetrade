import React, { useState } from 'react';
import { ArrowOutward } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Folder, LocalCafe, RestaurantMenu } from '@mui/icons-material';

const CoffeeCard = () => {
  const [activeSection, setActiveSection] = useState('Coffee');

  const sections = [
    { name: 'Coffee', icon: <LocalCafe className={`text-${activeSection === 'Coffee' ? 'black' : 'gray-400'}`} /> },
    { name: 'Spices', icon: <RestaurantMenu className={`text-${activeSection === 'Spices' ? 'black' : 'gray-400'}`} /> },
    { name: 'Tea', icon: <Folder className={`text-${activeSection === 'Tea' ? 'black' : 'gray-400'}`} /> },
  ];

  const links = {
    Coffee: [
      { title: 'Coffee Board of India', url: '#' },
      { title: 'Global Coffee Trade', url: '#' },
      { title: 'India’s Coffee Exports', url: '#' },
      { title: 'Introduction to Coffee', url: '#' },
    ],
    Spices: [
      { title: 'Spices Board of India', url: '#' },
      { title: 'Export of Spices', url: '#' },
      { title: 'Spices Varieties', url: '#' },
    ],
    Tea: [
      { title: 'Tea Board of India', url: '#' },
      { title: 'Types of Tea', url: '#' },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row max-w-4xl mx-auto mt-10 bg-gray-50 p-6 rounded-lg shadow-md">
      {/* Sidebar Section */}
      <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r pr-4 mb-4 md:mb-0">
        {sections.map((section) => (
          <div
            key={section.name}
            onClick={() => setActiveSection(section.name)}
            className={`cursor-pointer flex items-center space-x-2 py-3 ${activeSection === section.name ? 'text-black font-bold' : 'text-gray-400'}`}
          >
            {section.icon}
            <span>{section.name}</span>
          </div>
        ))}
      </div>

      {/* Links Section */}
      <div className="w-full md:w-3/4 pl-0 md:pl-6">
        <List>
          {links[activeSection]?.map((link, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component="a"
                href={link.url}
                className="flex flex-col items-start px-0 py-3 group"
              >
                <ListItemText primary={link.title} className="text-black w-full" />
                <div className="flex justify-between items-center w-full">
                  <span></span>
                  <ListItemIcon className="text-black">
                    <ArrowOutward />
                  </ListItemIcon>
                </div>
                <div className="w-full h-0.5 bg-black group-hover:bg-yellow-400 group-hover:h-1 mt-1 transition-all duration-300"></div>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default CoffeeCard;
