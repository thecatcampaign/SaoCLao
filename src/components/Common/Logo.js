import React from 'react';

export default function Logo() {
  const linearGradient = {
    background: 'linear-gradient(#f70,#f30)',
  };
  return (
    <button style={linearGradient} className="px-4 py-2">
            SOUNDCLOUND
    </button>
  );
}
