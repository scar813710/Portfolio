import React, { useEffect, useState } from 'react';
import './TypingAnimation.css';

const TypingAnimation = ({ message, speed = 100 }) => {
  const [cursor, setCursor] = useState(' | ');
  const [text, setText] = useState('');

  useEffect(() => {
    const typing = () => {
      if (text === message) return;
      if (cursor === ' | ') {
        setText(message.slice(0, text.length + 1));
        setCursor(' | ');
      } else {
        setCursor('');
        setTimeout(() => {
          setText(message.slice(0, text.length + 1));
          setCursor(' | ');
        }, speed);
      }
    };
    const loop = () => {
      typing();
      setTimeout(loop, speed);
    };
    loop();
  }, [message, text, speed]);

  return (
    <>
      <p>
        {text}{cursor}
      </p>
    </>
  );
};

export default TypingAnimation;