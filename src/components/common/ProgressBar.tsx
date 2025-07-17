import React from 'react';

interface ProgressBarProps {
  progress: number;
  fromColor?: string;
  toColor?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, fromColor = 'from-cyan-400', toColor = 'to-yellow-400' }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-gray-800 z-50">
      <div
        className={`h-full bg-gradient-to-r ${fromColor} ${toColor} transition-all duration-300`} // 
        style={{ width: `${progress}%` }} // 
      />
    </div>
  );
};