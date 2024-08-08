import React from 'react';

interface HackathonStickerProps {
  text: string;
}

const HackathonSticker: React.FC<HackathonStickerProps> = ({ text }) => {
  return (
    <div className="hackathon-sticker animate-pulse animate-infinite hover:animate-none">
      {text}
    </div>
  );
};

export default HackathonSticker;
