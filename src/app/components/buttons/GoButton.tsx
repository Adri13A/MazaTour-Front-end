'use client'

import React from "react";
import { MoveUpRight } from 'lucide-react';

const GoButton = () => {
  return (
      <div className="flex justify-end mt-1">
          <button className="p-1 bg-black/10 backdrop-blur-md rounded-full hover:bg-black/30 transition-all duration-300 ease-in-out">
              <a href="">
                <MoveUpRight size={14} />
              </a>
          </button>
      </div>
  );
};

export default GoButton;
