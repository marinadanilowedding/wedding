import React from 'react';

interface HeaderProps {
  title: string;
  leftInfo?: string;
  centerInfo?: string;
  rightInfo?: string;
  borderColor: string;
  textColor: string;
}

export const Header: React.FC<HeaderProps> = ({ title, leftInfo, centerInfo, rightInfo, borderColor, textColor }) => {
  return (
    <div className={`flex flex-col sm:flex-row justify-between items-center p-4 border-b-4 ${borderColor} bg-black gap-2`}>
      <div className={`${textColor} text-lg`}>{title}</div>
      {leftInfo && <div className={`${textColor} text-lg`}>{leftInfo}</div>}
      {centerInfo && <div className={`${textColor} text-lg`}>{centerInfo}</div>}
      {rightInfo && <div className={`${textColor} text-lg`}>{rightInfo}</div>}
    </div>
  );
};