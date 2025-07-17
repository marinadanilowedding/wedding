import React from 'react';

interface FooterProps {
  copyrightText: string;
  textColor: string;
}

export const Footer: React.FC<FooterProps> = ({ copyrightText, textColor }) => {
  return (
    <div className="border-t-4 border-yellow-400 bg-black p-4 text-center">
      <div className={`${textColor} text-sm`}>{copyrightText}</div> {/*  */}
    </div>
  );
};